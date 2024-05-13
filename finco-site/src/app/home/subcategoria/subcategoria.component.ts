import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css']
})
export class SubcategoriaComponent {
  constructor(private readonly router: Router){}

  mudarTelaCriarProjeto(): void {
    this.router.navigate(["/criarProjeto"]);
  }

  mudarTelaLocalProjeto(): void {
    this.router.navigate(["/localProjeto"]);
  }
}
