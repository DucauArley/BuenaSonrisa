import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorCursor]'
})
export class ColorCursorDirective {

  @Input('appColorCursor') resaltarColor: string;
  @HostListener('mouseenter') onMouseEnter()
  {
    this.resaltar("lightgrey");
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.resaltar(null);
  }

  constructor(private el: ElementRef) { }

  resaltar(color: string)
  {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
