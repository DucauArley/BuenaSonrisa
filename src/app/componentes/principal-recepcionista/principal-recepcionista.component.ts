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

  constructor(private fireStore: AngularFirestore)
  {
    let turns = this.fireStore.collection("turnos").snapshotChanges().subscribe(res=>
      {
        this.tomarTurnos(res);
      });
  }

  tomarTurnos(res)
  {
    this.turnos = new Array<any>();
    let compare;

    res.forEach(item => 
      {
        compare = item.payload.doc.data();
        if(compare["estado"] != "Cancelado")
        {
          this.turnos.push(item.payload.doc.data());
        }
    });
  }

  ngOnInit() {
  }

  cargarPelis($event)
  {
    console.log($event);
  }

}
