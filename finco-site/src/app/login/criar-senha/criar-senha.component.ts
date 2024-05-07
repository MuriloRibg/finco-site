import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ResetarSenhaRequest } from "src/app/api/usuario/models/request/resetar-senha-request";
import { RecoverService } from "src/app/api/usuario/service/recorver.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ResetarSenhaRequest } from "src/app/api/usuario/models/request/resetar-senha-request";
import { RecoverService } from "src/app/api/usuario/service/recorver.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs";

@Component({
  selector: "app-criar-senha",
  templateUrl: "./criar-senha.component.html",
  styleUrls: ["./criar-senha.component.css"]
  selector: "app-criar-senha",
  templateUrl: "./criar-senha.component.html",
  styleUrls: ["./criar-senha.component.css"]
})
export class CriarSenhaComponent implements OnInit {
  form!: FormGroup;
  request: ResetarSenhaRequest = new ResetarSenhaRequest();
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
    this.form = this.formBuilder.group(
      {
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      { validators: this.passwordIgualConfirmPassword }
    );
  }

  resetarSenha(): void {
    this.ngxSpinnerService.show();
    let codigo = window.localStorage.getItem("pin");
    let email = window.localStorage.getItem("email");
    let password = this.form.get("password")?.value;

    this.request.Code = codigo;
    this.request.Email = email;
    this.request.Password = password;

    this.recoverService
      .resetarSenha(this.request)
      .pipe(
        finalize(() => {
          this.ngxSpinnerService.hide();
        })
      )
      .subscribe({
        next: resp => {
          this.mudarCerto();
        },
        error: e => this.toastrService.error(e.error)
      });
  }

  private passwordIgualConfirmPassword(form: FormGroup) {
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    if (confirmPassword != null) {
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ notMatched: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }

  mudarTelaVerificacao(): void {
    this.router.navigate(["/verificacao"]);
  }

  mudarCerto(): void {
    this.router.navigate(["/certo"]);
  mudarCerto(): void {
    this.router.navigate(["/certo"]);
  }
}
