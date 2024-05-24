import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ProjetoFormService } from "src/app/home/projeto/projeto-form.service";

@Component({
  selector: "app-criar-projeto",
  templateUrl: "./criar-projeto.component.html",
  styleUrls: ["./criar-projeto.component.css"]
})
export class CriarProjetoComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private projetoFormService: ProjetoFormService
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.form = this.formBuilder.group({
      Categoria: [null, Validators.required],
      SubCategoria: [null, Validators.required]
    });
  }

  enviar(): void {
    this.projetoFormService.iniciarFiltro();
    this.projetoFormService.setCategoriaSubCategoria(this.form.get("Categoria")?.value, this.form.get("SubCategoria")?.value);
    this.router.navigate(["/subcategoria"]);
  }

  mudarTelaHome(): void {
    this.router.navigate(["/home"]);
  }
}
