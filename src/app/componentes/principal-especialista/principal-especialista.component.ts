import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-principal-especialista',
  templateUrl: './principal-especialista.component.html',
  styleUrls: ['./principal-especialista.component.css']
})
export class PrincipalEspecialistaComponent implements OnInit {

  public resenia:boolean = false;
  public resenia2:boolean = false;
  public turnos:Array<any>;
  public info: Array<any>;
  public email:string = firebase.auth().currentUser.email;
  public turno: any;

  constructor(private fireStore: AngularFirestore, private router: Router) { }

  ngOnInit()
  {
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

      console.log(this.turnos);

    setTimeout(()=>{
      this.turnos.forEach(tur=>{
       
        if(this.email == tur.especialista && tur.estado != "Cancelado")
        {
          this.info.push(tur);
        }
      });
    }, 1000);
  }

  ruteando()
  {
    var email:string = firebase.auth().currentUser.email;

    this.router.navigate(['/ListaTurnos', 1, email])
  }

  atender(turno)
  {
    this.fireStore.collection('turnos').doc(turno.especialista + turno.fecha).set({
      fecha: turno.fecha,
      especialista: turno.especialista,
      horario: turno.horario,
      cliente: turno.cliente,
      estado: "Atendido"
    }).catch(function(error)
    {
      alert("Error al cargar");
    });

    this.turnos = new Array<any>();
    this.info = new Array<any>();

    this.ngOnInit();

  }

  reseniar(tur, tipo)
  {
    this.turno = tur;

    if(tipo == 0)
    {
      this.resenia = true;
    }
    else
    {
      this.resenia2 = true;
    }
  }

}
