import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email:string = firebase.auth().currentUser.email;
  public foto;

  constructor(private authService: AuthService, private router: Router, private fireStore: AngularFirestore)
  { 
    let users = this.fireStore.collection("usuarios").snapshotChanges().subscribe(res=>
      {
        this.tomarUsuarios(res);
      });
  }

  tomarUsuarios(res)
  {
    let compare;

    res.forEach(item => 
      {
        compare = item.payload.doc.data();
        if(compare["email"] == this.email)
        {
          this.foto = item.payload.doc.data()["foto"];
        }
    });

  }

  ngOnInit() {
  }

  Logout() 
  {
    this.authService.LogoutUsuario();
    this.router.navigate(['/Login']);
  }

}
