import { Component, OnInit } from '@angular/core';
import { AuthService } from  './../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  email: string = "";
  clave: string = "";
  public bots:string ="Soy un Robot";

  constructor(private router: Router, private authService: AuthService, private fireStore: AngularFirestore) { }

  ngOnInit() {
  }

  Registrar()
  {
    this.authService.RegistrarUsuario(this.email, this.clave).then((res)=>
    {
      this.fireStore.collection("usuarios").doc(this.email).set({
        email: this.email,
        tipo: "cliente",
        foto:  "url"
      }).catch(function(error)
      {
        alert("Error al registrarse");
      })
      this.router.navigate(['/PrincipalCliente']);
    }).catch(error => console.log("Error:", error));
  }

  onFileChange($event)
  {
    
  }
}
