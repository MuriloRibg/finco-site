import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { VerificacaoComponent } from './verificacao/verificacao.component';
import { CriarSenhaComponent } from './criar-senha/criar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    EsqueciSenhaComponent,
    VerificacaoComponent,
    CriarSenhaComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
