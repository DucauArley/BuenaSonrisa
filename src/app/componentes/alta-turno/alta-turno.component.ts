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
  @Input() email: any;
  public usuarios: Array<any>;
  public especialistas: Array<any>;
  public fechaTurno: string;
  public especialista: string = "especialista@especialista.com";
  public horario:number;
  public mail:string;
  
  constructor(private fireStore: AngularFirestore, private datePipe: DatePipe)
  { 
    this.usuarios = new Array<any>();

    let users = this.fireStore.collection("usuarios").valueChanges();

    users.forEach(us=>
      {
        us.forEach(item=>
          {
            this.usuarios.push(item);
          })
      });

  }

  ngOnInit() 
  {
    setTimeout(()=>{
      this.especialistas = new Array<any>();
      
      this.usuarios.forEach(user=>
        {
          if(user.tipo == "especialista")
          {
            this.especialistas.push(user);
          }
        });
    }, 1000);
  }

  crear()
  {
    let ok = this.verificar();

    console.log(this.email);

    if(ok)
    {
      if(!this.recepcion)
      {
        this.fireStore.collection("turnos").doc(this.especialista + this.fechaTurno).set({
          fecha: this.fechaTurno,
          especialista: this.especialista,
          horario: this.horario,
          cliente: this.email,
          estado: "Solicitado"
        }).catch(function(error)
        {
          alert("Error al cargar");
        });
      }

      if(this.recepcion)
      {
        this.fireStore.collection("turnos").doc(this.especialista + this.fechaTurno).set({
          fecha: this.fechaTurno,
          especialista: this.especialista,
          horario: this.horario,
          cliente: this.mail,
          estado: "Solicitado"
        }).catch(function(error)
        {
          alert("Error al cargar");
        });
      }

      console.log(this.fechaTurno);
      console.log(this.especialista);
      console.log(this.horario)

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

    document.getElementById("turno").classList.add("ok");
    document.getElementById("esp").classList.add("ok");
    document.getElementById("hora").classList.add("ok");

    if(this.recepcion == true)
    {
      document.getElementById("mail").classList.remove("error");
      document.getElementById("mail").classList.add("ok");
    }

    fecha = this.datePipe.transform(fecha, 'yyyy-MM-dd');

    this.turnos.forEach(tur =>
    {
      if(tur.fecha == this.fechaTurno && tur.especialista == this.especialista && tur.horario == this.horario)
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

      console.log(this.fechaTurno);
      console.log(this.especialista);
      console.log(this.horario)

    return retorno;
  }

}
