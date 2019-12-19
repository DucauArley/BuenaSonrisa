import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorTurnos]'
})
export class ColorTurnosDirective {

  @Input() colorBase: string;
  @Input('appColorTurnos') estado: string;

  ngOnInit()
  {
    this.cambiar(this.estado);
  }

  constructor(private el: ElementRef) { }

  cambiar(estado: string)
  {
    switch (estado) 
    {
      case "Solicitado":
        this.el.nativeElement.style.backgroundColor = "red";
        break;
      case "Atendido":
        this.el.nativeElement.style.backgroundColor = "yellow";
        break;
      case "Finalizado":
        this.el.nativeElement.style.backgroundColor = "lightgreen";
        break;
      case "Encuestado":
        this.el.nativeElement.style.backgroundColor = "#32e809";
        break; 
    }
  }

}
