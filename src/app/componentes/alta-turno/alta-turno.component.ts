import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-turno',
  templateUrl: './alta-turno.component.html',
  styleUrls: ['./alta-turno.component.css']
})
export class AltaTurnoComponent implements OnInit {

  public fechaTurno: Date;
  public especialidad: string = "Mecanica";
  
  constructor() { }

  ngOnInit() {
  }



  algo()
  {
    alert(this.fechaTurno);
  }


}
