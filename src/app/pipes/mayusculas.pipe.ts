import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: any): any 
  {
    let retorno;

    let caracter = value.charAt(0);

    retorno = caracter.toUpperCase() + value.slice(1);

    return retorno;
  }

}
