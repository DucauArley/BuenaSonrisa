import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-cancelar-turno',
  templateUrl: './cancelar-turno.component.html',
  styleUrls: ['./cancelar-turno.component.css']
})
export class CancelarTurnoComponent implements OnInit {

  @Input() btnTur: any;
  @Output() recargarGrilla: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fireStore: AngularFirestore)
  {

  }

  ngOnInit() {
  }

  Borrar()
  {
      this.fireStore.collection('turnos').doc(this.btnTur.especialista + this.btnTur.fecha).set({
      fecha: this.btnTur.fecha,
      especialista: this.btnTur.especialista,
      horario: this.btnTur.horario,
      cliente: this.btnTur.cliente,
      estado: "Cancelado"
    }).catch(function(error)
    {
      alert("Error al cargar");
    });

    this.recargarGrilla.emit(this.btnTur);
  }

}
