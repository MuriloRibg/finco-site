import { UploadImageService } from "src/app/api/projeto/service/upload-image.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { catchError, finalize, forkJoin, of, switchMap } from "rxjs";
import { DataProjectResponse, ProjetoResponse } from "src/app/api/projeto/model/response/projeto.response";
import { ProjetoService } from "src/app/api/projeto/service/projeto.service";
import { ProjectImageResponse } from "src/app/api/projeto/model/response/projeto-image-response";

@Component({
  selector: "app-visualizar-projeto",
  templateUrl: "./visualizar-projeto.component.html",
  styleUrls: ["./visualizar-projeto.component.css"]
})
export class VisualizarProjetoComponent implements OnInit {
  idProjeto!: number;
  projeto?: ProjetoResponse;
  images?: ProjectImageResponse[];
  primeiraImagem?: string;
  rewards?: any;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly projetoService: ProjetoService,
    private readonly uploadImageService: UploadImageService,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getParamsValue();
    this.consultarProjeto();
  }

  activeTab: string = 'historia';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  mudarTelaProjeto(): void {
    this.router.navigate(["/criarProjeto"]);
  }

  getParamsValue() {
    this.route.queryParams.subscribe(p => (this.idProjeto = p["idProjeto"]));
  }

  consultarProjeto() {
    this.spinner.show();

    this.projetoService
      .recuperar(this.idProjeto)
      .pipe(
        switchMap(projetoResponse => {
          this.projeto = projetoResponse.data;
          console.log("Projeto:", projetoResponse.data);
          return this.uploadImageService.recuperar(this.idProjeto);
        }),
        catchError(error => {
          console.error("Erro ao recuperar dados do projeto ou imagens", error);
          this.spinner.hide();
          return of(null); // ou alguma lógica de fallback
        }),
        finalize(() => this.spinner.hide())
      )
      .subscribe({
        next: imagensResponse => {
          if (imagensResponse) {
            this.images = imagensResponse.data;
            this.primeiraImagem = imagensResponse.data[0]?.url || "";
            console.log("Imagens:", imagensResponse.data);
          }
        },
        error: error => {
          console.error("Erro na requisição:", error);
        }
      });
  }

  getQuantidadeDiasCriacao(data: Date | string | null | undefined): Number {
    if (data === null || data === undefined) return 0;
    const diaConsulta = new Date(data);
    const diaAtual: Date = new Date();
    const diferenca = diaConsulta.getTime() - diaAtual.getTime();
    const dias = Math.round(diferenca / (1000 * 60 * 60 * 24));
    console.log(dias);
    return dias;
  }

  getPorcentagemValorNecessario(valor: number, valorTotal: number): Number {
    if (valor == null || valorTotal == null) return 0;
    return (valor / valorTotal) * 100;
  }
}
