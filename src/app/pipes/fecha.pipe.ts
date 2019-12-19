import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fecha',
})
export class FechaPipe implements PipeTransform {

  constructor(private datePipe: DatePipe){}

  transform(value: any): any {

    value = this.datePipe.transform(value, 'dd/MM/yyyy');

    return value;
  }

}
