import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-estadisticas-turnos',
  templateUrl: './estadisticas-turnos.component.html',
  styleUrls: ['./estadisticas-turnos.component.css']
})
export class EstadisticasTurnosComponent implements OnInit {

  public turnos:Array<any>;
  public usuarios: Array<any>;
  public especialistas: Array<any>;
  public info: Array<any>;
  public especialidad: string = "Mecanica";
  public turnCanc:boolean = false;
  public turnReal:boolean = false;

  constructor(private fireStore: AngularFirestore)
  { 
    this.turnos = new Array<any>();
    this.usuarios = new Array<any>();

    let turns = this.fireStore.collection("turnos").valueChanges();
    let us = this.fireStore.collection("usuarios").valueChanges();

    turns.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.turnos.push(item);
          })
      });

    us.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.usuarios.push(item);
          })
      });
  }

  ngOnInit()
  { 
  }

  turnosRecepcion()
  {
    this.turnReal = false;
    this.turnCanc = false;
    this.info = new Array<any>();

    var ok = true;

    setTimeout(()=>
    {
      this.turnos.forEach(tur=>
        {
          ok = true;
          this.usuarios.forEach(us=>
            {
                if(us.email == tur.cliente)
                {
                  ok = false;
                }

            })

            if(ok)
            {
              this.info.push(tur);
            }

        });

    }, 1000);
  }

  turnosRealizadosEspecialidad()
  {
    this.turnReal = true;
    this.turnCanc = false;
    this.especialistas = new Array<any>();
    this.info = new Array<any>();

    setTimeout(()=>{

      this.usuarios.forEach(us=>
        {
          if(us.tipo == "especialista")
          {
            this.especialistas.push(us);
          }
        })

        this.especialistas.forEach(us=>{
          this.turnos.forEach(tur=>{
          
            if(us.especialidad == this.especialidad && tur.especialista == us.email && (tur.estado == "Finalizado" || tur.estado == "Encuestado"))
            {
              this.info.push(tur);
            }
          });
      });
    }, 1000);

  }

  turnosClientes()
  {
    this.turnReal = false;
    this.turnCanc = false;
    this.info = new Array<any>();

    setTimeout(()=>{

      this.usuarios.forEach(us=>
      {
        this.turnos.forEach(tur=>
          {
            if(us.email == tur.cliente)
            {
              this.info.push(tur);
            }

          });
      });

    },1000);
  }

  turnosCanceladosEspecialidad()
  {
    this.turnReal = false;
    this.turnCanc = true;
    this.especialistas = new Array<any>();
    this.info = new Array<any>();

    setTimeout(()=>{

      this.usuarios.forEach(us=>
        {
          if(us.tipo == "especialista")
          {
            this.especialistas.push(us);
          }
        })

        this.especialistas.forEach(us=>{
          this.turnos.forEach(tur=>{
          
            if(us.especialidad == this.especialidad && tur.especialista == us.email && tur.estado == "Cancelado")
            {
              this.info.push(tur);
            }
          });
      });
    }, 1000);
  }

}
