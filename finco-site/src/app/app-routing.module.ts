import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EsqueciSenhaComponent } from "./login/esqueci-senha/esqueci-senha.component";
import { LoginComponent } from "./login/login/login.component";
import { VerificacaoComponent } from "./login/verificacao/verificacao.component";
import { CriarSenhaComponent } from "./login/criar-senha/criar-senha.component";
import { CertoComponent } from "./login/certo/certo.component";
import { CriarContaComponent } from "./login/criar-conta/criar-conta.component";
import { HomeComponent } from "./home/home.component";
import { CriarProjetoComponent } from "./home/criar-projeto/criar-projeto.component";
import { SubcategoriaComponent } from "./home/subcategoria/subcategoria.component";
import { LocalProjetoComponent } from "./home/local-projeto/local-projeto.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
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
  {
    path: "criar-conta",
    component: CriarContaComponent
  },

  {
    path: "criarProjeto",
    component: CriarProjetoComponent
  },

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "subcategoria",
    component: SubcategoriaComponent
  },
  {
    path: "localProjeto",
    component: LocalProjetoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
