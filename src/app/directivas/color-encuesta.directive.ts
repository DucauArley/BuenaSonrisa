import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorEncuesta]'
})
export class ColorEncuestaDirective {

  @Input() colorBase: string;
  @Input('appColorEncuesta') puntaje: number;

  ngOnInit()
  {
    this.cambiar(this.puntaje);
  }

  constructor(private el: ElementRef) { }

  cambiar(puntaje: number)
  {
    if(puntaje < 7 && puntaje > 3)
    {
      this.el.nativeElement.style.backgroundColor = "yellow";
    }
    else
    {
      if(puntaje > 6)
      {
        this.el.nativeElement.style.backgroundColor = "#32e809";
      }
      else
      {
        this.el.nativeElement.style.backgroundColor = "red";
      }
    }
  }
}
