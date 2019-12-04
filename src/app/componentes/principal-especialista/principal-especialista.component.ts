import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase'

@Component({
  selector: 'app-principal-especialista',
  templateUrl: './principal-especialista.component.html',
  styleUrls: ['./principal-especialista.component.css']
})
export class PrincipalEspecialistaComponent implements OnInit {

  public resenia:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ruteando()
  {
    var email:string = firebase.auth().currentUser.email;

    this.router.navigate(['/ListaTurnos', 1, email])
  }

}
