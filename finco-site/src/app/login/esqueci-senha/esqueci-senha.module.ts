import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EsqueciSenhaComponent } from "src/app/login/esqueci-senha/esqueci-senha.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [EsqueciSenhaComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgxSpinnerModule, 
    ToastrModule.forRoot(), 
    RouterModule.forRoot([])
  ],
  exports: [EsqueciSenhaComponent]
})
export class EsqueciSenhaModule {}
