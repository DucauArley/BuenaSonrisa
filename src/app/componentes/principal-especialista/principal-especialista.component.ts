import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import html2canvas from 'html2canvas';
import * as PDF from 'jspdf';

@Component({
  selector: 'app-principal-especialista',
  templateUrl: './principal-especialista.component.html',
  styleUrls: ['./principal-especialista.component.css']
})
export class PrincipalEspecialistaComponent implements OnInit {

  public resenia:boolean = false;
  public resenia2:boolean = false;
  public turnos:Array<any>;
  public email:string = firebase.auth().currentUser.email;
  public turno: any;
  public encuesta:boolean = false;

  constructor(private fireStore: AngularFirestore, private router: Router)
  {
    let turns = this.fireStore.collection("turnos").snapshotChanges().subscribe(res=>
      {
        this.tomarTurnos(res);
      });
  }

  tomarTurnos(res)
  {
    this.turnos = new Array<any>();
    let compare;

    res.forEach(item => 
      {
        compare = item.payload.doc.data();
        if(compare["especialista"] == this.email && compare["estado"] != "Cancelado")
        {
          this.turnos.push(item.payload.doc.data());
        }
    });
  }

  ngOnInit()
  {
  }

  generatePdf()
  {
    var data = document.getElementById('tablon');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new PDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.setFontSize(20);
      pdf.text(35, 25,'La Buena Sonrisa, lista de turnos');
      pdf.save('Turnos.pdf'); // Generated PDF   
    });  
    
  }  

  generateCsv()
  {
    this.downloadButtonPush();
  }

  downloadButtonPush() {
    var csvData = this.ConvertToCSV(this.turnos);
    console.log(csvData);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Turnos.csv';
    a.click();
}

ConvertToCSV(objArray: any): string {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";

    for (var index in objArray[0]) {
        //Now convert each value to string and comma-separated
        row += index + ';';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ';'

            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

  ruteando()
  {
    var email:string = firebase.auth().currentUser.email;

    this.router.navigate(['/ListaTurnos', 1, email])
  }

  atender(turno)
  {
    this.fireStore.collection('turnos').doc(turno.especialista + turno.fecha + turno.horario).set({
      fecha: turno.fecha,
      especialista: turno.especialista,
      horario: turno.horario,
      cliente: turno.cliente,
      estado: "Atendido"
    }).catch(function(error)
    {
      alert("Error al cargar");
    });

  }

  reseniar(tur, tipo)
  {
    this.turno = tur;

    if(tipo == 0)
    {
      this.resenia = true;
    }
    else
    {
      this.resenia2 = true;
    }
  }

  verEncuesta(tur)
  {
    this.turno = tur;

    this.encuesta = true;
  }

}
