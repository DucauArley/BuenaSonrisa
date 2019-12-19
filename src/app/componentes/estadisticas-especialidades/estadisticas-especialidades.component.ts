import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-estadisticas-especialidades',
  templateUrl: './estadisticas-especialidades.component.html',
  styleUrls: ['./estadisticas-especialidades.component.css']
})
export class EstadisticasEspecialidadesComponent implements OnInit {

  public turnos:Array<any>;
  public usuarios: Array<any>;
  public espMas:string = "No hay";
  public espMenos:string = "No hay";
  public encuestas: Array<any>;

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit()
  {
    this.usuarios = new Array<any>();
    this.turnos = new Array<any>();
    this.encuestas = new Array<any>();
    let mecanicos: Array<any> = new Array<any>();
    let imagenes: Array<any> = new Array<any>();
    let clinicos: Array<any> = new Array<any>();
    let contMec: number = 0;
    let contImg: number = 0;
    let contCli: number = 0;

    let turns = this.fireStore.collection("turnos").valueChanges();
    let us = this.fireStore.collection("usuarios").valueChanges();
    let enc = this.fireStore.collection("encuestas").valueChanges();

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

      enc.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.encuestas.push(item);
          })
      });

      setTimeout(()=>
      {
        this.usuarios.forEach(us=>
          {
            switch(us.especialidad)
            {
              case 'Mecanica':
                mecanicos.push(us);
                break;
              case 'Imagenes':
                imagenes.push(us);
                break;
              case 'Clinico':
                clinicos.push(us);
                break;
            }
          });


          this.turnos.forEach(tur=>
            {
              mecanicos.forEach(mec=>
                {
                  if(mec.email == tur.especialista)
                  {
                    contMec ++;
                  }
                });

              imagenes.forEach(img=>
                {
                  if(img.email == tur.especialista)
                  {
                    contImg ++;
                  }
                });

              clinicos.forEach(cli=>
                {
                  if(cli.email == tur.especialista)
                  {
                    contCli ++;
                  }
                });
            })

          if(contCli > contImg && contCli > contMec)
          {
            this.espMas = "Clinico";
          }

          if(contCli < contImg && contImg > contMec)
          {
            this.espMas = "Imagenes";
          }

          if(contMec > contImg && contCli < contMec)
          {
            this.espMas = "Mecanica";
          }

          if(contCli < contImg && contCli < contMec)
          {
            this.espMenos = "Clinico";
          }

          if(contCli > contImg && contImg < contMec)
          {
            this.espMenos = "Imagenes";
          }

          if(contMec < contImg && contCli > contMec)
          {
            this.espMenos = "Mecanica";
          }

      }, 1000);

  }

}
