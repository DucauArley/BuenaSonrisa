import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { isUndefined } from 'util';
import * as firebase from 'firebase'

@Component({
  selector: 'app-resenia',
  templateUrl: './resenia.component.html',
  styleUrls: ['./resenia.component.css']
})
export class ReseniaComponent implements OnInit {

  @Output() cerrarResenia: EventEmitter<any> = new EventEmitter<any>();
  public resenia:string;

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit() {
  }

  crear()
  {
    let ok = this.verificar();
    var email:string = firebase.auth().currentUser.email;

    if(ok)
    {
      /*this.fireStore.collection("resenias").doc(email + this.resenia).set({
        cliente: this.clinica, Tendria que tomar el turno y ver quien lo pidio
        especialista: email,
        reseña: this.resenia,
      }).catch(function(error)
      {
        alert("Error al cargar");
      });

      console.log(this.clinica);*/
      console.log(this.resenia)
      console.log(email);

      this.cerrarResenia.emit();

    }
  }

  verificar()
  {
    let retorno:boolean = true;
    
    document.getElementById("res").classList.remove("error");

    document.getElementById("res").classList.add("ok");

    if(isUndefined(this.resenia))
    {
      document.getElementById("res").classList.add("error");
      retorno = false;
    }

    return retorno;
  }



}
