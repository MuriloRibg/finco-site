import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent {

  constructor(private router: Router){}

  mudarTela() : void{
    this.router.navigate(['/verificacao']);
  }

  mudarTelaLogin() : void{
    this.router.navigate(['/login']);
  }
}
