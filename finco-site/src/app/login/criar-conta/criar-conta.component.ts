import { NgxSpinnerService } from "ngx-spinner";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/api/usuario/service/register.service";
import { RegisterRequest } from "src/app/api/usuario/models/request/register-request";
import { finalize } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-criar-conta",
  templateUrl: "./criar-conta.component.html",
  styleUrls: ["./criar-conta.component.css"]
})
export class CriarContaComponent implements OnInit {
  formCriarConta!: FormGroup;
  request: RegisterRequest = new RegisterRequest();
  token: string | undefined;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly ngxSpinnerService: NgxSpinnerService,
    private readonly registerService: RegisterService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) {
    this.token = undefined;
  }

  ngOnInit(): void {
    this.iniciarFormualario();
  }

  iniciarFormualario(): void {
    this.formCriarConta = this.formBuilder.group(
      {
        userName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        recaptcha: [null, Validators.required]
      },
      { validators: this.passwordIgualConfirmPassword }
    );
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

  criarConta(): void {
    this.ngxSpinnerService.show();

    this.request.Name = this.formCriarConta.get("userName")?.value;
    this.request.Email = this.formCriarConta.get("email")?.value;
    this.request.Password = this.formCriarConta.get("password")?.value;

    this.registerService
      .register(this.request)
      .pipe(
        finalize(() => {
          this.ngxSpinnerService.hide();
        })
      )
      .subscribe({
        next: _ => {
          this.toastrService.success("Usuário criado com sucesso!", "Sucesso!");
          this.formCriarConta.reset();
          this.router.navigate(["/login"]);
        },
        error: e => {
          this.toastrService.error(e.error);
        }
      });
  }
}
