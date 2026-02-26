import {Directive, ElementRef, HostListener, inject, output} from '@angular/core';

@Directive({
  selector: '[appClickFuera]',
})
export class ClickFuera {

  private element= inject(ElementRef<HTMLElement>);
  fuera=output()
  constructor() { }

  @HostListener('document:click', ['$event'])
  commanderClose(event: MouseEvent){
    const there= this.element.nativeElement.contains(event?.target as Node)
    if (!there){
      this.fuera.emit()
    }
  }

}
