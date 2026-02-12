import re
from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models


class UsuarioAdminAndUSer(BaseUserManager):
    def create_user(self, email=None, password=None, **extra_fields):

        if not email or email == "":
            raise ValueError('Usuario debe de tener un correo válido')

        if not re.search(r"^[a-z0-9._]+@[a-z0-9.-]+\.(com|es)$",email):
            raise ValueError('No es un formato de correo válido')

        if any(ext in email for ext in settings.EXTENSIONES_BLACKLIST):
            raise ValueError(
                f"No te voy a dejar crear una cuenta. Formatos no permitidos: " + ", ".join(
                    settings.EXTENSIONES_BLACKLIST))

        if not password or password == "":
            raise ValueError("Contraseña no válida")

        email = self.normalize_email(email)

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)


class UsuarioOrdinario(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=100, unique=True, blank=False, null=False)
    nombre = models.CharField(max_length=50, null=False, blank=False)
    apellidos = models.CharField(max_length=50, null=False, blank=False)
    is_active = models.BooleanField(default=True, verbose_name="¿Está activo?",help_text="(Obligatorio si queremos que el usuario pueda acceder a su cuenta)")

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UsuarioAdminAndUSer()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        db_table = 'users'
        ordering = ['-is_superuser', 'is_active', 'email']
        verbose_name = '1. Usuario'
        verbose_name_plural = '1. Usuarios'

    def __str__(self):
        full_name = "SIN NOMBRE" if not self.nombre or self.apellidos else f"{self.nombre} {self.apellidos}"
        return f"{full_name} ({self.email})"
