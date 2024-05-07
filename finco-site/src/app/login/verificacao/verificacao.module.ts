import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VerificacaoComponent } from "src/app/login/verificacao/verificacao.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [VerificacaoComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot([])],
  exports: [VerificacaoComponent]
})
export class VerificacaoModule {}
