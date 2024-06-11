import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CriarProjetoComponent } from "src/app/home/criar-projeto/criar-projeto.component";
import { HomeComponent } from "src/app/home/home.component";
import { SubcategoriaComponent } from "src/app/home/subcategoria/subcategoria.component";
import { LocalProjetoComponent } from "src/app/home/local-projeto/local-projeto.component";
import { ProjetoComponent } from "src/app/home/projeto/projeto.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "src/app/core/auth/request.interceptor";
import { InicioComponent } from "./inicio/inicio.component";
import { SharedModule } from "src/app/shared/shared.module";
import { VisualizarProjetoComponent } from './visualizar-projeto/visualizar-projeto.component';
import { ApoieProjetoComponent } from './apoie-projeto/apoie-projeto.component';

@NgModule({
  declarations: [
    HomeComponent,
    CriarProjetoComponent,
    SubcategoriaComponent,
    LocalProjetoComponent,
    ProjetoComponent,
    InicioComponent,
    VisualizarProjetoComponent,
    ApoieProjetoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot(),
    ToastrModule.forRoot(),
    SharedModule
  ],
  exports: [HomeComponent, CriarProjetoComponent, SubcategoriaComponent, LocalProjetoComponent, ProjetoComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class HomeModule {}
