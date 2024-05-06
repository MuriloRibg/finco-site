import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsqueciSenhaComponent } from 'src/app/esqueci-senha/esqueci-senha.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EsqueciSenhaComponent],
  imports: [CommonModule, RouterModule.forRoot([])],
  exports: [EsqueciSenhaComponent],
})
export class EsqueciSenhaModule {}
