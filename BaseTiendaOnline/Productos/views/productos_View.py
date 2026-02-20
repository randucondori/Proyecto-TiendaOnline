from rest_framework import status, viewsets
from rest_framework.response import Response
from Productos.models import ProductosModels


class ProductosView(viewsets.ViewSet):

    queryset = ProductosModels.objects.all()

    def list(self, request):
        productos = [{"nombre": p.nombre,
                      "precio": p.precio,
                      "categoria_nombre": p.categoria.nombre,
                      "slug": p.slug,
                      "img": "nada" if not p.img.url else request.build_absolute_uri(p.img.url),
                      "id": p.id,
                      }
                     for p in self.queryset
                     ]

        return Response({"succes": True, "productos": productos}, status=status.HTTP_200_OK)


    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


# from rest_framework.permissions import AllowAny
# from rest_framework.views import APIView


# class ProductosView(APIView):
#     permission_classes = [AllowAny]
#
#     def get(self, request):
#         productos = [{"nombre": p.nombre,
#                       "precio": p.precio,
#                       "categoria_nombre": p.categoria.nombre,
#                       "slug": p.slug,
#                       "img": "nada" if not p.img.url else request.build_absolute_uri(p.img.url), "id": p.id
#                       }
#                      for p in ProductosModels.objects.all()
#                      ]
#
#         return Response({"succes": True, "productos": productos}, status=status.HTTP_200_OK)

