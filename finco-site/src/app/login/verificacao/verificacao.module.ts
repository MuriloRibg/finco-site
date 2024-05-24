import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VerificacaoComponent } from "src/app/login/verificacao/verificacao.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [VerificacaoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]),
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  exports: [VerificacaoComponent]
})
export class VerificacaoModule {}
