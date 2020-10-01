import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './inicio-sesion-carpeta/iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from './inicio-sesion-carpeta/recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './inicio-sesion-carpeta/registro/registro.component';
import { PrincipalComponent } from './pagina-principal-carpeta/principal/principal.component';
import { DetallesProductoComponent } from './pagina-principal-carpeta/detalles-producto/detalles-producto.component';
 

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RecuperarContrasenaComponent,
    RegistroComponent,
    PrincipalComponent,
    DetallesProductoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
