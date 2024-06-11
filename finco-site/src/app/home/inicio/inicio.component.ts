import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs";
import { DataProjectsResponse, ProjetoResponse } from "src/app/api/projeto/model/response/projeto.response";
import { ProjetoService } from "src/app/api/projeto/service/projeto.service";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  response!: ProjetoResponse[];

  constructor(
    private readonly projetoService: ProjetoService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.spinner.show();
    this.projetoService
      .listar()
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe({
        next: (response: DataProjectsResponse) => {
          this.response = response.data.projects;
        },
        error: e => this.toastrService.error(e.error)
      });
  }

  getQuantidadeDiasCriacao(data: Date | string | null): Number {
    if (data === null || data === undefined) return 0;
    const diaConsulta = new Date(data);
    const diaAtual: Date = new Date();
    const diferenca = diaAtual.getTime() - diaConsulta.getTime();
    const dias = Math.round(diferenca / (1000 * 60 * 60 * 24));
    console.log(dias);
    return dias;
  }

  trackTipo(index: number) {
    return index
  }

  getPorcentagemValorNecessario(valor: number, valorTotal: number): Number {
    if (valor == null || valorTotal == null) return 0;
    return (valor / valorTotal) * 100;
  }

  irParaVisualizacao(id: number){
    this.router.navigate(["/visualizar-projeto"], {
      queryParams:{
        idProjeto: id
      }
    });
  }
}
