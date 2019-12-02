import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.css']
})
export class ListaTurnosComponent implements OnInit {

  public turnos:Array<any>;

  constructor(private fireStore: AngularFirestore){ }

  ngOnInit() 
  {
    this.turnos = new Array<any>();

    let turns = this.fireStore.collection("turnos").valueChanges();

    turns.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.turnos.push(item);
          })
      })

  }

}
