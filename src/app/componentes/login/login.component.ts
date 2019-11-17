import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public clave: string;
  public captcha: boolean = false;
  public usuarios: Array<any>

  constructor(private authService: AuthService, private router: Router, private fireStore: AngularFirestore)
  {
    this.usuarios = new Array<any>();
  }

  ngOnInit() {
    let usuarios = this.fireStore.collection("usuarios").valueChanges();

    usuarios.forEach(usuario=>
      {
        usuario.forEach(item=>
          {
            this.usuarios.push(item);
          })
      })

  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captcha = true;
    }

  Loguearse()
  {
    this.authService.LoginUsuario(this.email, this.clave).then((res)=>
    {
      let entro: boolean = false;
      this.usuarios.forEach(user =>
        {
          if(user.email == this.email)
          {
            entro = true;
            switch(user.tipo)
            {
              case "admin":
                this.router.navigate(['/Principal']);
                break;
              case "cliente":
                this.router.navigate(['/PrincipalCliente']);
                break;
              case "especialista":
                this.router.navigate(['/PrincipalEspecialista']);
                break;
              case "recepcionista":
                this.router.navigate(['/PrincipalRecepcionista']);
                break;
            }
          }
        });

        if(entro == false)
        {
          alert("El usuario no esta en la base de datos");
          this.email = "";
          this.clave = "";
        }
      //Aca iria algo para que depende de que usuario sea va a tal lado
      this.router.navigate(['/Principal']);
    }).catch(error=>
      {
          alert("Error");
      });
  }

  admin()
    {
      this.email="admin@admin.com";
        this.clave="111111";
    }

    cliente()
    {
      this.email="cliente@cliente.com";
        this.clave="111111";
    }

    recepcionista()
    {
      this.email="recepcionista@recepcionista.com";
      this.clave="111111";
    }

    especialista()
    {
      this.email="especialista@especialista.com";
      this.clave="111111";
    }

}
