import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { isUndefined } from 'util';
import { DatePipe } from '@angular/common';
import * as firebase from 'firebase'

@Component({
  selector: 'app-alta-turno',
  templateUrl: './alta-turno.component.html',
  styleUrls: ['./alta-turno.component.css'],
  providers:[DatePipe]
})
export class AltaTurnoComponent implements OnInit {

  @Output() cerrarAltaTurno: EventEmitter<any> = new EventEmitter<any>();
  @Input() turnos: any;
  @Input() recepcion:boolean;
  public fechaTurno: string;
  public especialidad: string = "Mecanica";
  public horario:number;
  public mail:string;
  
  constructor(private fireStore: AngularFirestore, private datePipe: DatePipe) { }

  ngOnInit() {
  }



  crear()
  {
    let ok = this.verificar();
    var email:string = firebase.auth().currentUser.email;

    if(ok)
    {
      if(!this.recepcion)
      {
        this.fireStore.collection("turnos").doc(this.especialidad + this.fechaTurno).set({
          fecha: this.fechaTurno,
          especialidad: this.especialidad,
          hora: this.horario,
          cliente: email,
          estado: "Solicitado"
        }).catch(function(error)
        {
          alert("Error al cargar");
        });
      }

      if(this.recepcion)
      {
        this.fireStore.collection("turnos").doc(this.especialidad + this.fechaTurno).set({
          fecha: this.fechaTurno,
          especialidad: this.especialidad,
          hora: this.horario,
          cliente: this.mail,
          estado: "Solicitado"
        }).catch(function(error)
        {
          alert("Error al cargar");
        });
      }

      console.log(this.fechaTurno);
      console.log(this.especialidad);
      console.log(this.horario)
      console.log(email);

      this.cerrarAltaTurno.emit();

    }
  }

  verificar()
  {
    let fecha:any = new Date();
    let retorno:boolean = true;
    let okTur:boolean = true;
    document.getElementById("turno").classList.remove("error");
    document.getElementById("esp").classList.remove("error");
    document.getElementById("hora").classList.remove("error");
    document.getElementById("mail").classList.remove("error");

    document.getElementById("turno").classList.add("ok");
    document.getElementById("esp").classList.add("ok");
    document.getElementById("hora").classList.add("ok");
    document.getElementById("mail").classList.add("ok");

    fecha = this.datePipe.transform(fecha, 'yyyy-MM-dd');

    this.turnos.forEach(tur =>
    {
      if(tur.fecha == this.fechaTurno && tur.especialidad == this.especialidad)
      {
        okTur = false;
      }
    });

    if(Date.parse('01/01/2011 ' + this.horario) > Date.parse('01/01/2011 19:00') || (Date.parse('01/01/2011 ' + this.horario) < Date.parse('01/01/2011 08:00')))
    {
      document.getElementById("hora").classList.add("error");
      retorno = false;
    }

    if(Date.parse(this.fechaTurno) < Date.parse(fecha))
    {
      document.getElementById("turno").classList.add("error");
      retorno = false;
    }

    if(okTur != true)
    {
      alert("Ya existe un turno para ese especialista en esa fecha");
      document.getElementById("turno").classList.add("error");
      document.getElementById("esp").classList.add("error");
      retorno = false;
    }

    if(isUndefined(this.fechaTurno))
    {
      document.getElementById("turno").classList.add("error");
      retorno = false;
    }

    if(isUndefined(this.horario))
    {
      document.getElementById("hora").classList.add("error");
      retorno = false;
    }

    if(this.recepcion == true)
    {
      if(isUndefined(this.mail))
      {
        document.getElementById("mail").classList.add("error");
        retorno = false;
      }
    }

    return retorno;
  }

}
