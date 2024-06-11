import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from 'src/app/api/projeto/service/projeto.service';

@Component({
  selector: 'app-apoie-projeto',
  templateUrl: './apoie-projeto.component.html',
  styleUrls: ['./apoie-projeto.component.css']
})
export class ApoieProjetoComponent {
  idProjeto!: number;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly projetoService: ProjetoService,
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

  gerarStringAleatoria(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  doar(): void {
    this.projetoService.doar(this.idProjeto, 100, this.gerarStringAleatoria(20)).subscribe({
      next: _ => {
        this.router.navigate(["/home"]);
      },
      error: e => console.log(e)
    });
   
  }

}
