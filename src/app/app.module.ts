import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthService } from './servicios/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage'
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { PrincipalRecepcionistaComponent } from './componentes/principal-recepcionista/principal-recepcionista.component';
import { PrincipalEspecialistaComponent } from './componentes/principal-especialista/principal-especialista.component';
<<<<<<< HEAD
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { ConsultoriosOcupadosComponent } from './componentes/consultorios-ocupados/consultorios-ocupados.component';
import { AltaTurnoComponent } from './componentes/alta-turno/alta-turno.component';
=======
>>>>>>> ec4042b1d7c857c835c905a50336478920085b4d


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    RegistrarComponent,
    PrincipalClienteComponent,
    PrincipalRecepcionistaComponent,
    PrincipalEspecialistaComponent,
<<<<<<< HEAD
    AltaUsuarioComponent,
    ConsultoriosOcupadosComponent,
    AltaTurnoComponent,
=======
>>>>>>> ec4042b1d7c857c835c905a50336478920085b4d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaModule.forRoot(),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AuthService, AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
