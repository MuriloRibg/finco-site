import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CriarSenhaComponent } from "src/app/login/criar-senha/criar-senha.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [CriarSenhaComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  exports: [CriarSenhaComponent]
})
export class CriarSenhaModule {}
