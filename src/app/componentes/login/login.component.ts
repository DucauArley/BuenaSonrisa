import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public clave: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Loguearse()
  {
    this.authService.LoginUsuario(this.email, this.clave).then((res)=>
    {
      //Aca iria algo para que depende de que usuario sea va a tal lado
      this.router.navigate(['/Principal']);
    }).catch(error=>
      {
          alert("Error");
      });
  }

}
