import {AfterViewInit, Directive, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appFocusStart]',
})
export class FocusStart implements AfterViewInit {

  private element = inject(ElementRef<HTMLElement>);
  enabled = input<boolean>(true);

  constructor() {
  }

  ngAfterViewInit() {
    if(!this.enabled){
      return;
    }
    queueMicrotask(()=>{
      this.element.nativeElement.focus()
    })

  }

}
