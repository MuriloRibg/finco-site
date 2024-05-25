import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, PipeTransform } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { CreateProjetoRequest } from "src/app/api/projeto/model/request/create-projeto.request";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs";
import { ProjetoService } from "src/app/api/projeto/service/projeto.service";
import { ProjetoFormService } from "src/app/home/projeto/projeto-form.service";
import { DatePipe } from "@angular/common";
import * as moment from "moment";

@Component({
  selector: "app-projeto",
  templateUrl: "./projeto.component.html",
  styleUrls: ["./projeto.component.css"]
})
export class ProjetoComponent implements OnInit, PipeTransform {
  objeto!: any;
  form!: FormGroup;
  request: CreateProjetoRequest = new CreateProjetoRequest();

  private readonly datePipe: DatePipe;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly projetoService: ProjetoService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService,
    private readonly projetoFormService: ProjetoFormService
  ) {
    this.datePipe = new DatePipe("pt-BR");
  }

  transform(value: Date, format: string, timezone?: string) {
    return this.datePipe.transform(value, format, timezone);
  }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    var filtros = this.projetoFormService.getFiltro();
    console.log(filtros);
    this.form = this.formBuilder.group({
      Titulo: ["", Validators.required],
      Legenda: [""],
      Categoria: [filtros.Categoria, Validators.required],
      Subcategoria: [filtros.SubCategoria, Validators.required],
      CategoriaSegundaria: [filtros.Categoria2],
      SubcategoriaSegundaria: [filtros.SubCategoria2],
      Local: [filtros.Local, Validators.required],
      Valor: [0, Validators.required],
      DataLancamento: [null],
      DuracaoCampanha: [null]
    });
  }

  enviar(): void {
    this.spinner.show();
    const rolloutDate: Date = this.form.get("DataLancamento")?.value;
    const deadline: Date = this.form.get("DuracaoCampanha")?.value;

    this.request.name = this.form.get("Titulo")?.value;
    this.request.description = this.form.get("Legenda")?.value;
    this.request.category = this.form.get("Categoria")?.value;
    this.request.sub_category_1 = this.form.get("Subcategoria")?.value;
    this.request.sub_category_2 = this.form.get("SubcategoriaSegundaria")?.value;
    this.request.country = this.form.get("Local")?.value;
    this.request.required_value = parseFloat(this.form.get("Valor")?.value);

    debugger;

    const dataInicio = moment(rolloutDate).format("YYYY-MM-DDTHH:mm:ssZ");
    const dataLimite = moment(deadline).format("YYYY-MM-DDTHH:mm:ssZ");

    this.request.rollout_date = dataInicio;
    this.request.deadline = dataLimite;

    this.projetoService
      .inserir(this.request)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: _ => {
          this.toastrService.success("Projeto criado com sucesso.");
        },
        error: e => this.toastrService.error(e.error)
      });
  }
}
