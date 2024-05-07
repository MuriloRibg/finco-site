import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login/login.module";
import { AppRoutingModule } from "./app-routing.module";
import { VerificacaoModule } from "src/app/login/verificacao/verificacao.module";
import { CriarSenhaModule } from "src/app/login/criar-senha/criar-senha.module";
import { EsqueciSenhaModule } from "src/app/login/esqueci-senha/esqueci-senha.module";
import { CriarContaModule } from "src/app/login/criar-conta/criar-conta.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    VerificacaoModule,
    CriarSenhaModule,
    EsqueciSenhaModule,
    CriarContaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
