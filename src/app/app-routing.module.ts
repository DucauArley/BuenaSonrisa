import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { PrincipalEspecialistaComponent } from './componentes/principal-especialista/principal-especialista.component';
import { PrincipalRecepcionistaComponent } from './componentes/principal-recepcionista/principal-recepcionista.component';
<<<<<<< HEAD
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import {ConsultoriosOcupadosComponent} from './componentes/consultorios-ocupados/consultorios-ocupados.component';
import { AltaTurnoComponent } from './componentes/alta-turno/alta-turno.component';
=======
>>>>>>> ec4042b1d7c857c835c905a50336478920085b4d


const routes: Routes = [{path: '' , component: LoginComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal', component: PrincipalComponent},
{path: 'Registrar', component: RegistrarComponent},
<<<<<<< HEAD
{path: 'AltaTurno', component: AltaTurnoComponent},
{path: 'AltaUsuario', component: AltaUsuarioComponent},
{path: 'PrincipalCliente', component: PrincipalClienteComponent},
{path: 'ConsultoriosOcupados', component: ConsultoriosOcupadosComponent},
=======
{path: 'PrincipalCliente', component: PrincipalClienteComponent},
>>>>>>> ec4042b1d7c857c835c905a50336478920085b4d
{path: 'PrincipalEspecialista', component: PrincipalEspecialistaComponent},
{path: 'PrincipalRecepcionista', component: PrincipalRecepcionistaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
