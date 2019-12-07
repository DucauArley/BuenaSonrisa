import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-principal-recepcionista',
  templateUrl: './principal-recepcionista.component.html',
  styleUrls: ['./principal-recepcionista.component.css']
})
export class PrincipalRecepcionistaComponent implements OnInit {

  public turnos: Array<any>;
  public altaTurno:boolean = false;
  public info: Array<any>;


  constructor(private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.turnos = new Array<any>();
    this.info = new Array<any>();
    let turns = this.fireStore.collection("turnos").valueChanges();

    turns.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.turnos.push(item);
          })
      });

      setTimeout(()=>{
        this.turnos.forEach(tur=>{
         
          if(tur.estado != "Cancelado")
          {
            this.info.push(tur);
          }
        });
      }, 1000);

  }

  cargarPelis($event)
  {
    console.log($event);
    this.turnos = new Array<any>();
  }

}
