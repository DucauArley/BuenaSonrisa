import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-consultorios-ocupados',
  templateUrl: './consultorios-ocupados.component.html',
  styleUrls: ['./consultorios-ocupados.component.css']
})
export class ConsultoriosOcupadosComponent implements OnInit {

  public consultorios: Array<any>;

  constructor(private fireStore: AngularFirestore) 
  {
    this.consultorios = new Array<any>();
  }

  ngOnInit() 
  {
    let consultorios = this.fireStore.collection("consultorios").valueChanges();

    consultorios.forEach(consultorio=>
      {
        consultorio.forEach(item=>
          {
            this.consultorios.push(item);
          })
      });

      console.log(this.consultorios);
  }









}
