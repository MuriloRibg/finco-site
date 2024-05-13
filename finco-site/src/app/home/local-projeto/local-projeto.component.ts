import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-projeto',
  templateUrl: './local-projeto.component.html',
  styleUrls: ['./local-projeto.component.css']
})
export class LocalProjetoComponent {
  constructor(private readonly router: Router){}

  mudarTela(): void {
    this.router.navigate(["/subcategoria"]);
  }

  mudarProjeto(): void {
    this.router.navigate(["/projeto"]);
  }
}
