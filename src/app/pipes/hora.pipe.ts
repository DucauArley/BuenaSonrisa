import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  transform(value: any): any {

    let retorno;
    
    if(value < "12:00")
    {
      retorno = value + " AM"
    }
    else
    {
      retorno = value + " PM"
    }

    return retorno;
  }

}
