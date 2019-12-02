import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { isUndefined } from 'util';
import * as firebase from 'firebase'

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  @Output() cerrarEncuesta: EventEmitter<any> = new EventEmitter<any>();
  public clinica:number;
  public especialista:number;
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
      this.fireStore.collection("encuestas").doc(email + this.resenia).set({
        clinica: this.clinica,
        especialista: this.especialista,
        reseña: this.resenia,
        cliente: email
      }).catch(function(error)
      {
        alert("Error al cargar");
      });

      console.log(this.clinica);
      console.log(this.especialista);
      console.log(this.resenia)
      console.log(email);

      this.cerrarEncuesta.emit();

    }
  }

  verificar()
  {
    let retorno:boolean = true;
    let okTur:boolean = true;
    document.getElementById("pCli").classList.remove("error");
    document.getElementById("pEs").classList.remove("error");
    document.getElementById("res").classList.remove("error");

    document.getElementById("pCli").classList.add("ok");
    document.getElementById("pEs").classList.add("ok");
    document.getElementById("res").classList.add("ok");


    if(isUndefined(this.clinica) || this.clinica < 1 || this.clinica >10)
    {
      document.getElementById("pCli").classList.add("error");
      retorno = false;
    }

    if(isUndefined(this.especialista) || this.especialista < 1 || this.especialista >10)
    {
      document.getElementById("pEs").classList.add("error");
      retorno = false;
    }

    if(isUndefined(this.resenia))
    {
      document.getElementById("res").classList.add("error");
      retorno = false;
    }

    return retorno;
  }

}
