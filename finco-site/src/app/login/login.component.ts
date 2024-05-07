import { TokenService } from "../core/token/token.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";
import { LoginRequest } from "src/app/api/login/models/request/login-request";
import { LoginService } from "src/app/api/login/service/login.service";

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
    private readonly tokenService: TokenService,
    private readonly spinner: NgxSpinnerService
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
    this.request.user = userName;
    this.request.password = password;

    this.loginService
      .login(this.request)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: resp => console.log("sucesso"),
        error: e => console.log(e)
      });
  }

  mudarTela(): void {
    this.router.navigate(["/esqueci-senha"]);
  }

  mudarTelaCriarConta(): void {
    this.router.navigate(["/criar-conta"]);
  }
}
