import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { ListaTurnosComponent } from './componentes/lista-turnos/lista-turnos.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { EstadisticasTurnosComponent } from './componentes/estadisticas-turnos/estadisticas-turnos.component';
import { ConsultoriosOcupadosComponent } from './componentes/consultorios-ocupados/consultorios-ocupados.component';
import { PrincipalEspecialistaComponent } from './componentes/principal-especialista/principal-especialista.component';
import { EstadisticasEmpleadosComponent } from './componentes/estadisticas-empleados/estadisticas-empleados.component';
import { PrincipalRecepcionistaComponent } from './componentes/principal-recepcionista/principal-recepcionista.component';
import { EstadisticasEspecialidadesComponent } from './componentes/estadisticas-especialidades/estadisticas-especialidades.component';

const routes: Routes = [{path: '' , component: LoginComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal', component: PrincipalComponent},
{path: 'Registrar', component: RegistrarComponent},
{path: 'PrincipalCliente', component: PrincipalClienteComponent},
{path: 'ListaTurnos/:tipo/:user', component: ListaTurnosComponent},
{path: 'EstadisticasTurnos', component: EstadisticasTurnosComponent},
{path: 'ConsultoriosOcupados', component: ConsultoriosOcupadosComponent},
{path: 'PrincipalEspecialista', component: PrincipalEspecialistaComponent},
{path: 'EstadisticasEmpleados', component: EstadisticasEmpleadosComponent},
{path: 'PrincipalRecepcionista', component: PrincipalRecepcionistaComponent},
{path: 'EstadisticasEspecialidades', component: EstadisticasEspecialidadesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
