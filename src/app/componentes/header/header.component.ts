import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email:string = firebase.auth().currentUser.email;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Logout() 
  {
    this.authService.LogoutUsuario();
    this.router.navigate(['/Login']);
  }

}
