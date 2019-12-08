import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-estadisticas-empleados',
  templateUrl: './estadisticas-empleados.component.html',
  styleUrls: ['./estadisticas-empleados.component.css']
})
export class EstadisticasEmpleadosComponent implements OnInit {

  public turnos:Array<any>;
  public usuarios: Array<any>;
  public especialistas: Array<any>;
  public info: Array<any>;
  public especialidad: string = "Mecanica";

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit() 
  {
    this.turnos = new Array<any>();
    this.usuarios = new Array<any>();
    this.especialistas = new Array<any>();
    this.info = new Array<any>();

    let turns = this.fireStore.collection("turnos").valueChanges();
    let us = this.fireStore.collection("usuarios").valueChanges();

    turns.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.turnos.push(item);
          })
      });

    us.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.usuarios.push(item);
          })
      });

    setTimeout(()=>{

      this.usuarios.forEach(us=>
        {
          if(us.tipo == "especialista")
          {
            this.especialistas.push(us);
          }
        })

        this.especialistas.forEach(us=>{
          this.turnos.forEach(tur=>{
          
            if(us.especialidad == this.especialidad && tur.especialista == us.email)
            {
              this.info.push(tur);
            }
          });
      });
    }, 1000);
  }

}
