import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { VerificacaoModule } from 'src/app/verificacao/verificacao.module';
import { CriarSenhaModule } from 'src/app/criar-senha/criar-senha.module';
import { EsqueciSenhaModule } from 'src/app/esqueci-senha/esqueci-senha.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    VerificacaoModule,
    CriarSenhaModule,
    EsqueciSenhaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
