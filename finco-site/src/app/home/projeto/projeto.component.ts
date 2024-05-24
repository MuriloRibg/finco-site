import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { CreateProjetoRequest } from "src/app/api/projeto/model/request/create-projeto.request";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs";
import { ProjetoService } from "src/app/api/projeto/service/projeto.service";
import { ProjetoFormService } from "src/app/home/projeto/projeto-form.service";

@Component({
  selector: "app-projeto",
  templateUrl: "./projeto.component.html",
  styleUrls: ["./projeto.component.css"]
})
export class ProjetoComponent implements OnInit {
  objeto!: any;
  form!: FormGroup;
  request: CreateProjetoRequest = new CreateProjetoRequest();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly projetoService: ProjetoService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService,
    private projetoFormService: ProjetoFormService
  ) {}

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

    this.request.rollout_date = new Date(rolloutDate).toISOString();
    this.request.deadline = new Date(deadline).toISOString();

    console.log(this.request);

    this.projetoService
      .inserir(this.request)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        error: e => this.toastrService.error(e.error)
      });
  }
}
