import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarSenhaComponent } from 'src/app/login/criar-senha/criar-senha.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CriarSenhaComponent],
  imports: [CommonModule, RouterModule.forRoot([])],
  exports: [CriarSenhaComponent],
})
export class CriarSenhaModule {}
