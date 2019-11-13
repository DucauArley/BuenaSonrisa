import { Component, OnInit } from '@angular/core';
import { AuthService } from  './../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  email: string = "";
  clave: string = "";
  public tipoUsuario:string = "recepcionista";
  public especialidad:string = "Mecanica"

  constructor(private router: Router, private authService: AuthService, private fireStore: AngularFirestore) { }

  ngOnInit() {
  }

  Registrar()
  {
    this.authService.RegistrarUsuario(this.email, this.clave).then((res)=>
    {
      if(this.tipoUsuario != "especialista")
      {
        this.fireStore.collection("usuarios").doc(this.email).set({
          email: this.email,
          tipo: this.tipoUsuario,
          foto:  "url"
        }).catch(function(error)
        {
          alert("Error al registrarse");
        });
      }
      else
      {
        this.fireStore.collection("usuarios").doc(this.email).set({
          email: this.email,
          tipo: this.tipoUsuario,
          especialidad: this.especialidad,
          foto:  "url"
        }).catch(function(error)
        {
          alert("Error al registrarse");
        });
      }

      alert("Se registro correctamente");
    }).catch(error => console.log("Error:", error));
  }

}
