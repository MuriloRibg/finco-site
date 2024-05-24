import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjetoFormService } from "src/app/home/projeto/projeto-form.service";

@Component({
  selector: "app-subcategoria",
  templateUrl: "./subcategoria.component.html",
  styleUrls: ["./subcategoria.component.css"]
})
export class SubcategoriaComponent implements OnInit {
  form!: FormGroup;
  objeto: any;
  objetoSubCategoria: any;

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
      CategoriaSegundaria: ["", Validators.required],
      SubCategoriaSegundaria: ["", Validators.required]
    });
  }

  enviar(): void {
    this.projetoFormService.setCategoriaSubCategoria2(
      this.form.get("CategoriaSegundaria")?.value,
      this.form.get("SubCategoriaSegundaria")?.value
    );
    this.router.navigate(["/localProjeto"]);
  }

  mudarTelaCriarProjeto(): void {
    this.router.navigate(["/criarProjeto"]);
  }

  mudarTelaLocalProjeto(): void {
    this.router.navigate(["/localProjeto"]);
  }
}
