import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RecuperarSenhaRequest } from "src/app/api/usuario/models/request/recuperar-senha-request";
import { NgxSpinnerService } from "ngx-spinner";
import { RecoverService } from "src/app/api/usuario/service/recorver.service";
import { finalize } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-esqueci-senha",
  templateUrl: "./esqueci-senha.component.html",
  styleUrls: ["./esqueci-senha.component.css"]
})
export class EsqueciSenhaComponent implements OnInit {
  formEsqueciSenha!: FormGroup;
  request: RecuperarSenhaRequest = new RecuperarSenhaRequest();

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly ngxSpinnerService: NgxSpinnerService,
    private readonly recoverService: RecoverService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.formEsqueciSenha = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  enviarEmail(): void {
    this.ngxSpinnerService.show();

    let email = this.formEsqueciSenha.get("email")?.value;
    this.request.Email = email;

    this.recoverService
      .recuperarSenha(this.request)
      .pipe(finalize(() => this.ngxSpinnerService.hide()))
      .subscribe({
        next: resp => {
          this.mudarTela();
          window.localStorage.setItem("email", email);
        },
        error: e => {
          console.log(e);
          this.toastrService.error(e.error);
        }
      });
  }

  mudarTela(): void {
    this.router.navigate(["/verificacao"]);
  }

  mudarTelaLogin(): void {
    this.router.navigate(["/login"]);
  }
}
