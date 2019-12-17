import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-resenia-detalle',
  templateUrl: './resenia-detalle.component.html',
  styleUrls: ['./resenia-detalle.component.css']
})
export class ReseniaDetalleComponent implements OnInit {

  @Output() cerrarResenia: EventEmitter<any> = new EventEmitter<any>();
  @Input() turno: any;
  public resenias: Array<any>;
  public resenia:string;

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit()
  {
    this.resenias = new Array<any>();

    let res = this.fireStore.collection("resenias").valueChanges();

    res.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.resenias.push(item);
          })
      });    

      setTimeout(()=>{
        this.resenias.forEach(res=>{
         
          if(this.turno.especialista == res.especialista && this.turno.fecha == res.fecha)
          {
            this.resenia = res.reseña;
          }
        });
      }, 1000);
  }

}
