import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs";
import { LoginRequest } from "src/app/api/usuario/models/request/login-request";
import { LoginService } from "src/app/api/usuario/service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  request: LoginRequest = new LoginRequest();

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.startForm();
  }

  startForm(): void {
    this.formLogin = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login(): void {
    this.spinner.show();

    const userName = this.formLogin.get("userName")?.value;
    const password = this.formLogin.get("password")?.value;
    this.request.User = userName;
    this.request.Password = password;

    this.loginService
      .login(this.request)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: (resp) => {
          this.toastrService.success("Login realizado com sucesso!", "Sucesso!");
          this.router.navigate(["/home"]);
        },
        error: e => this.toastrService.error(e.error)
      });

      this.router.navigate(["/home"]);
  }

  mudarTela(): void {
    this.router.navigate(["/esqueci-senha"]);
  }

  mudarTelaCriarConta(): void {
    this.router.navigate(["/criar-conta"]);
  }
}
