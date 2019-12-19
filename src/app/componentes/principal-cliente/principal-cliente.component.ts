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
  public resenia:boolean = false;
  public email = firebase.auth().currentUser.email;
  public turno: any;

  constructor(private fireStore: AngularFirestore, private router: Router)
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
        if(compare["cliente"] == this.email && compare["estado"] != "Cancelado")
        {
          this.turnos.push(item.payload.doc.data());
        }
    });
  }

  ngOnInit() 
  {
    
  }

  ruteando()
  {
    this.router.navigate(['/ListaTurnos', 0, this.email])
  }

  encuestar(tur)
  {
    this.turno = tur;

    this.encuesta = true;
  }

  reseniar(tur)
  {
    this.turno = tur;

    this.resenia = true;
  }

}
