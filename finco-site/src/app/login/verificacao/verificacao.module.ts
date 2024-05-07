import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacaoComponent } from 'src/app/login/verificacao/verificacao.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VerificacaoComponent],
  imports: [CommonModule, RouterModule.forRoot([])],
  exports: [VerificacaoComponent],
})
export class VerificacaoModule {}
