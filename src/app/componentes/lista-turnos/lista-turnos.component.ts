import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.css']
})
export class ListaTurnosComponent implements OnInit {

  public turnos:Array<any>;
  public info: Array<any>;
  public tipo:string;
  public user:string;

  constructor(private fireStore: AngularFirestore, private route: ActivatedRoute)
  {
    this.route.params.subscribe(params => {
      this.tipo = <string>params['tipo'];
      this.user = <string>params['user'];
      console.log(this.tipo);
      console.log(this.user);
    });
  }

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

    setTimeout(()=>{
      this.turnos.forEach(tur=>{
        switch(this.tipo)
        {
          case '0':
            if(this.user == tur.cliente)
            {
              this.info.push(tur);
            }
            break;
          case '1':
            if(this.user == tur.especialista)
            {
              this.info.push(tur);
            }
            break;
        }
      });
    }, 1000);

  }
}

