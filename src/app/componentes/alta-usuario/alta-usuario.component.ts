import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from  './../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  @Output() cerrarAltaUsuario: EventEmitter<any> = new EventEmitter<any>();
  email: string = "";
  clave: string = "";
  public tipoUsuario:string = "recepcionista";
  public especialidad:string = "Mecanica"
  public imagePath;
  public imgURL: any = "url";
  public message: string;
  public mensaje:string ="Algo";
  public mostrar:boolean = false;

  constructor(private router: Router, private authService: AuthService, private fireStore: AngularFirestore) { }

  ngOnInit() {
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imgURL);
    }
  }

  Registrar()
  {
    this.mostrar = false;
    let ok = this.validar();

    if(ok)
    {
      this.authService.RegistrarUsuario(this.email, this.clave).then((res)=>
      {
        if(this.tipoUsuario != "especialista")
        {
          this.fireStore.collection("usuarios").doc(this.email).set({
            email: this.email,
            tipo: this.tipoUsuario,
            foto:  this.imgURL
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
            foto:  this.imgURL
          }).catch(function(error)
          {
            alert("Error al registrarse");
          });
        }

        this.cerrarAltaUsuario.emit();
      }).catch(error =>
        {
          if(error.message == "The email address is badly formatted.")
          {
            this.mensaje = "El email tiene un formato invalido";
            this.mostrar = true;
          }
                    
          if(error.message == "The email address is already in use by another account.")
          {
            this.mensaje = "El email ya esta en uso";
            this.mostrar = true;
          }

          if(error.message == "Password should be at least 6 characters")
          {
            this.mensaje = "La contraseña debe tener por lo menos 6 caracteres";
            this.mostrar = true;
          }

          if(error.message == "The password must be 6 characters long or more.")
          {
            this.mensaje = "La contraseña debe ser de 6 caracteres o mas";
            this.mostrar = true;
          }

         console.log("Error:", error.message)
        });
    }
  }

  validar()
  {
    let retorno:boolean = true;
    document.getElementById("foto").classList.remove("error");
    document.getElementById("foto").classList.add("ok");

    if(this.imgURL == "url")
    {
      document.getElementById("foto").classList.add("error");
      retorno = false
    }

    return retorno;
  }

}
