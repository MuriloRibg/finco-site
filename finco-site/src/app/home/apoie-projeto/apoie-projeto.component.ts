import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from 'src/app/api/projeto/service/projeto.service';

@Component({
  selector: 'app-apoie-projeto',
  templateUrl: './apoie-projeto.component.html',
  styleUrls: ['./apoie-projeto.component.css']
})
export class ApoieProjetoComponent {
  idProjeto!: number;
  form!: FormGroup;
    constructor(
      private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly projetoService: ProjetoService,
  ){}

  mudarTelaProjeto(): void {
    this.router.navigate(["/criarProjeto"]);
  }

  ngOnInit(): void {
    this.getParamsValue();
    this.iniciarFormulario();
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

  iniciarFormulario(): void {
    this.form = this.formBuilder.group({
      Valor: [0, Validators.required],
      codigoSeguranca: ['', Validators.required],
      numeroCartao: ['', Validators.required],
      CPF: ['', Validators.required],
      DataVencimento: [null],
      Nome: ['', Validators.required]
      });
  }
  
  doar(): void {
    if (!this.form.get("Valor")?.value) {
        return;
    }
    this.projetoService.doar(this.idProjeto, Number(this.form.get("Valor")?.value), this.gerarStringAleatoria(20)).subscribe({
      next: _ => {
        this.router.navigate(["/home"]);
      },
      error: e => console.log(e)
    });
   
  }

}
