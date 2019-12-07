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
  public info: Array<any>;
  public encuesta:boolean = false;
  public resenia:boolean = false;
  public email = firebase.auth().currentUser.email;
  public turno: any;

  constructor(private fireStore: AngularFirestore, private router: Router) { }

  ngOnInit() 
  {
    this.turnos = new Array<any>();
    this.info = new Array<any>();
    let turns = this.fireStore.collection("turnos").valueChanges();

    turns.forEach(tur=>
      {
        tur.forEach(item=>
          {
            this.turnos.push(item);
          })
      });

      setTimeout(()=>{
        this.turnos.forEach(tur=>{
          
          if(this.email == tur.cliente && tur.estado != "Cancelado")
          {
            this.info.push(tur);
          }
        });
      }, 1000);

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
