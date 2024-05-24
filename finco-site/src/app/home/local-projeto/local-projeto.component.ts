import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjetoFormService } from "src/app/home/projeto/projeto-form.service";

@Component({
  selector: "app-local-projeto",
  templateUrl: "./local-projeto.component.html",
  styleUrls: ["./local-projeto.component.css"]
})
export class LocalProjetoComponent implements OnInit {
  form!: FormGroup;
  objetoProjeto: any;
  novoProjeto: any;

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
      Local: [null, Validators.required]
    });
  }

  enviar(): void {
    this.projetoFormService.setLocal(this.form.get("Local")?.value);
    this.router.navigate(["/projeto"]);
  }

  mudarTela(): void {
    this.router.navigate(["/subcategoria"]);
  }

  mudarProjeto(): void {
    this.router.navigate(["/projeto"]);
  }
}
