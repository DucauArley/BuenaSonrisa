import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase'

@Component({
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.component.html',
  styleUrls: ['./principal-cliente.component.css']
})
export class PrincipalClienteComponent implements OnInit {

  public altaTurno:boolean = false;
  public turnos: Array<any>;
  public encuesta:boolean = false;

  constructor(private fireStore: AngularFirestore, private router: Router) { }

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

  ruteando()
  {
    var email:string = firebase.auth().currentUser.email;

    this.router.navigate(['/ListaTurnos', 0, email])
  }


}
