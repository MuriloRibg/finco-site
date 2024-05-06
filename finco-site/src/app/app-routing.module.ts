import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EsqueciSenhaComponent } from "./esqueci-senha/esqueci-senha.component";
import { LoginComponent } from "./login/login.component";
import { VerificacaoComponent } from "./verificacao/verificacao.component";
import { CriarSenhaComponent } from "./criar-senha/criar-senha.component";
import { CertoComponent } from "./certo/certo.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "esqueci-senha",
    component: EsqueciSenhaComponent
  },

  {
    path: "verificacao",
    component: VerificacaoComponent
  },

  {
    path: "criar-senha",
    component: CriarSenhaComponent
  },
  {
    path: "certo",
    component: CertoComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
