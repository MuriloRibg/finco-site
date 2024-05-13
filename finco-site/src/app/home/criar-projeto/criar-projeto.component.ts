import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-projeto',
  templateUrl: './criar-projeto.component.html',
  styleUrls: ['./criar-projeto.component.css']
})
export class CriarProjetoComponent {
  constructor(private readonly router: Router){}

  mudarTelaHome(): void {
    this.router.navigate(["/home"]);
  }

  mudaTelaProx(): void {
    this.router.navigate(["/subcategoria"]);
  }
}
