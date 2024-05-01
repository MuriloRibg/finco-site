import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-senha',
  templateUrl: './criar-senha.component.html',
  styleUrls: ['./criar-senha.component.css']
})
export class CriarSenhaComponent {
  constructor(private router: Router){}

  mudarTelaVerificacao() : void{
    this.router.navigate(['/verificacao']);
  }
}
