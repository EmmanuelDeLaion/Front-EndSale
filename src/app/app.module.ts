import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './components/inicio-sesion-carpeta/iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from './components/inicio-sesion-carpeta/recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './components/inicio-sesion-carpeta/registro/registro.component';
import { PrincipalComponent } from './components/pagina-principal-carpeta/principal/principal.component';
import { DetallesProductoComponent } from './components/pagina-principal-carpeta/detalles-producto/detalles-producto.component';
import { PerfilPrincipalComponent } from './components/perfil-carpeta/perfil-principal/perfil-principal.component';
import { PublicacionesComponent } from './components/perfil-carpeta/publicaciones/publicaciones.component';
import { CertificadosComponent } from './components/perfil-carpeta/certificados/certificados.component';
import { RedContactosComponent } from './components/perfil-carpeta/red-contactos/red-contactos.component';
import { ReportesComponent } from './components/perfil-carpeta/reportes/reportes.component';
import { CurriculumVitaeComponent } from './components/perfil-carpeta/curriculum-vitae/curriculum-vitae.component';
import { NavbarGeneralComponent } from './components/compartido-general-carpeta/navbar-general/navbar-general.component';
import { FooterGeneralComponent } from './components/compartido-general-carpeta/footer-general/footer-general.component';
import { HomeComponent } from './components/home/home.component';
 

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
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
