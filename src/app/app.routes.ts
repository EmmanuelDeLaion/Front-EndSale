import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/inicio-sesion-carpeta/iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from './components/inicio-sesion-carpeta/recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './components/inicio-sesion-carpeta/registro/registro.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];