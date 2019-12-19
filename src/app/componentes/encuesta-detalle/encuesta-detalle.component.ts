import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-encuesta-detalle',
  templateUrl: './encuesta-detalle.component.html',
  styleUrls: ['./encuesta-detalle.component.css']
})
export class EncuestaDetalleComponent implements OnInit {

  @Output() cerrarEncuesta: EventEmitter<any> = new EventEmitter<any>();
  @Input() turno: any;
  public encuestas: Array<any>;
  public encuesta:any;
  public resenia:string;

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit() 
  {
    this.encuestas = new Array<any>();

    let enc = this.fireStore.collection("encuestas").valueChanges();

    enc.forEach(ped=>
      {
        ped.forEach(item=>
          {
            this.encuestas.push(item);
          })
      });    

      console.log(this.turno);

      setTimeout(()=>{
        this.encuestas.forEach(enc=>{
         
          if(this.turno.especialista == enc.nombreEspecialista && this.turno.fecha == enc.fecha && this.turno.cliente == enc.cliente)
          {
            this.encuesta = enc;
          }
        });

        console.log(this.encuesta);
      }, 1000);
  }

}
