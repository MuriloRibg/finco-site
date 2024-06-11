import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apoie-projeto',
  templateUrl: './apoie-projeto.component.html',
  styleUrls: ['./apoie-projeto.component.css']
})
export class ApoieProjetoComponent {
  idProjeto!: number;
  constructor(private readonly router: Router,
    private readonly route: ActivatedRoute,
  ){}

  mudarTelaProjeto(): void {
    this.router.navigate(["/criarProjeto"]);
  }

  ngOnInit(): void {
    this.getParamsValue();
  }

  getParamsValue() {
    this.route.queryParams.subscribe(p => (this.idProjeto = p["idProjeto"]));
  }
  
  mudarTelaVizualizarProjeto(){
    this.router.navigate(["/visualizar-projeto"], {
      queryParams:{
        idProjeto: this.idProjeto
      }
    });
  }

  
  mudarTelaHome(): void {
    this.router.navigate(["/home"]);
  }

}
