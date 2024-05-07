import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { VerificacaoModule } from 'src/app/verificacao/verificacao.module';
import { CriarSenhaModule } from 'src/app/criar-senha/criar-senha.module';
import { EsqueciSenhaModule } from 'src/app/esqueci-senha/esqueci-senha.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    VerificacaoModule,
    CriarSenhaModule,
    EsqueciSenhaModule,
    AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
