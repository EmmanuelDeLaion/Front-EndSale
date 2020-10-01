import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './inicio-sesion-carpeta/iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from './inicio-sesion-carpeta/recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './inicio-sesion-carpeta/registro/registro.component';
import { PrincipalComponent } from './pagina-principal-carpeta/principal/principal.component';
import { DetallesProductoComponent } from './pagina-principal-carpeta/detalles-producto/detalles-producto.component';
import { PerfilPrincipalComponent } from './perfil-carpeta/perfil-principal/perfil-principal.component';
import { PublicacionesComponent } from './perfil-carpeta/publicaciones/publicaciones.component';
import { CertificadosComponent } from './perfil-carpeta/certificados/certificados.component';
import { RedContactosComponent } from './perfil-carpeta/red-contactos/red-contactos.component';
import { ReportesComponent } from './perfil-carpeta/reportes/reportes.component';
import { CurriculumVitaeComponent } from './perfil-carpeta/curriculum-vitae/curriculum-vitae.component';
import { NavbarGeneralComponent } from './compartido-general-carpeta/navbar-general/navbar-general.component';
import { FooterGeneralComponent } from './compartido-general-carpeta/footer-general/footer-general.component';
 

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RecuperarContrasenaComponent,
    RegistroComponent,
    PrincipalComponent,
    DetallesProductoComponent,
    PerfilPrincipalComponent,
    PublicacionesComponent,
    CertificadosComponent,
    RedContactosComponent,
    ReportesComponent,
    CurriculumVitaeComponent,
    NavbarGeneralComponent,
    FooterGeneralComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
