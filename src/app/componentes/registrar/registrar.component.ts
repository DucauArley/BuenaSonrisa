import { Component, OnInit } from '@angular/core';
import { AuthService } from  './../../servicios/auth.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
=======
>>>>>>> ec4042b1d7c857c835c905a50336478920085b4d

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  email: string = "";
  clave: string = "";

<<<<<<< HEAD
  constructor(private router: Router, private authService: AuthService, private fireStore: AngularFirestore) { }
=======
  constructor(private router: Router, private authService: AuthService) { }

  //Para registrar deberia guardar los usuarios en firebase si o si como tipo: clientes
>>>>>>> ec4042b1d7c857c835c905a50336478920085b4d

  ngOnInit() {
  }

  Registrar()
  {
    this.authService.RegistrarUsuario(this.email, this.clave).then((res)=>
    {
<<<<<<< HEAD
      this.fireStore.collection("usuarios").doc(this.email).set({
        email: this.email,
        tipo: "cliente",
        foto:  "url"
      }).catch(function(error)
      {
        alert("Error al registrarse");
      })

=======
>>>>>>> ec4042b1d7c857c835c905a50336478920085b4d
      this.router.navigate(['/PrincipalCliente']);
    }).catch(error => console.log("Error:", error));
  }
}
