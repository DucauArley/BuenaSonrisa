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
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { ConsultoriosOcupadosComponent } from './componentes/consultorios-ocupados/consultorios-ocupados.component';
import { AltaTurnoComponent } from './componentes/alta-turno/alta-turno.component';
import { ListaTurnosComponent } from './componentes/lista-turnos/lista-turnos.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { ReseniaComponent } from './componentes/resenia/resenia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    RegistrarComponent,
    PrincipalClienteComponent,
    PrincipalRecepcionistaComponent,
    PrincipalEspecialistaComponent,
    AltaUsuarioComponent,
    ConsultoriosOcupadosComponent,
    AltaTurnoComponent,
    ListaTurnosComponent,
    EncuestaComponent,
    ReseniaComponent,
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
