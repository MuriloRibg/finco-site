import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { VerificacaoComponent } from './verificacao/verificacao.component';
import { CriarSenhaComponent } from './criar-senha/criar-senha.component';
import { CertoComponent } from './certo/certo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    VerificacaoComponent,
    CriarSenhaComponent,
    CertoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
