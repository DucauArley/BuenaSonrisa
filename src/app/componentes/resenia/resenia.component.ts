import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() turno: any;
  public resenia:string;

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit() {
  }

  crear()
  {
    let ok = this.verificar();

    console.log(this.turno);

    if(ok)
    {
      this.fireStore.collection("resenias").doc(this.turno.especialista + this.resenia).set({
        cliente: this.turno.cliente,
        especialista: this.turno.especialista,
        reseña: this.resenia,
        fecha: this.turno.fecha,
        horario: this.turno.horario
      }).catch(function(error)
      {
        alert("Error al cargar");
      });

      this.fireStore.collection("turnos").doc(this.turno.especialista + this.turno.fecha + this.turno.horario).set({
        cliente: this.turno.cliente,
        especialista: this.turno.especialista,
        estado: "Finalizado",
        fecha: this.turno.fecha,
        horario: this.turno.horario
      }).catch(function(error)
      {
        alert("Error al cargar");
      });

      console.log(this.resenia)

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
