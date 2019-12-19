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
import { CancelarTurnoComponent } from './componentes/cancelar-turno/cancelar-turno.component';
import { ReseniaDetalleComponent } from './componentes/resenia-detalle/resenia-detalle.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EstadisticasEmpleadosComponent } from './componentes/estadisticas-empleados/estadisticas-empleados.component';
import { EstadisticasTurnosComponent } from './componentes/estadisticas-turnos/estadisticas-turnos.component';
import { EstadisticasEspecialidadesComponent } from './componentes/estadisticas-especialidades/estadisticas-especialidades.component';
import { HeaderComponent } from './componentes/header/header.component';
import { EncuestaDetalleComponent } from './componentes/encuesta-detalle/encuesta-detalle.component';
import { ColorEncuestaDirective } from './directivas/color-encuesta.directive';
import { ColorCursorDirective } from './directivas/color-cursor.directive';
import { ColorTurnosDirective } from './directivas/color-turnos.directive';
import { FechaPipe } from './pipes/fecha.pipe';
import { DatePipe } from '@angular/common';
import { HoraPipe } from './pipes/hora.pipe';
import { MayusculasPipe } from './pipes/mayusculas.pipe';


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
    CancelarTurnoComponent,
    ReseniaDetalleComponent,
    SpinnerComponent,
    EstadisticasEmpleadosComponent,
    EstadisticasTurnosComponent,
    EstadisticasEspecialidadesComponent,
    HeaderComponent,
    EncuestaDetalleComponent,
    ColorEncuestaDirective,
    ColorCursorDirective,
    ColorTurnosDirective,
    FechaPipe,
    HoraPipe,
    MayusculasPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    RecaptchaModule,
    RecaptchaModule.forRoot(),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AuthService, AngularFireAuth, AngularFirestore, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
