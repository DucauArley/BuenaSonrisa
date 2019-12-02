import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { ListaTurnosComponent } from './componentes/lista-turnos/lista-turnos.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { PrincipalEspecialistaComponent } from './componentes/principal-especialista/principal-especialista.component';
import { PrincipalRecepcionistaComponent } from './componentes/principal-recepcionista/principal-recepcionista.component';
import {ConsultoriosOcupadosComponent} from './componentes/consultorios-ocupados/consultorios-ocupados.component';

const routes: Routes = [{path: '' , component: LoginComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal', component: PrincipalComponent},
{path: 'Registrar', component: RegistrarComponent},
{path: 'ListaTurnos', component: ListaTurnosComponent},
{path: 'PrincipalCliente', component: PrincipalClienteComponent},
{path: 'ConsultoriosOcupados', component: ConsultoriosOcupadosComponent},
{path: 'PrincipalCliente', component: PrincipalClienteComponent},
{path: 'PrincipalEspecialista', component: PrincipalEspecialistaComponent},
{path: 'PrincipalRecepcionista', component: PrincipalRecepcionistaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
