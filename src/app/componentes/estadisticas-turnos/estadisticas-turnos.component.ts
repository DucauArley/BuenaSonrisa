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

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit()
  {
    this.turnos = new Array<any>();
    this.usuarios = new Array<any>();
    this.especialistas = new Array<any>();
    this.info = new Array<any>();

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

    /* Turnos sacados por clientes
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

    },1000);*/

    /*Turnos sacados por recepcionistas*/ 
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

    }, 1000)



    /*Turnos cancelados por especialidad
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
    }, 1000);*/
  }

}
