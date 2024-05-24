import { RecoverService } from "src/app/api/usuario/service/recorver.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { VerificarCodigoRequest } from "src/app/api/usuario/models/request/verificar-codigo-request";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs";

@Component({
  selector: "app-verificacao",
  templateUrl: "./verificacao.component.html",
  styleUrls: ["./verificacao.component.css"]
})
export class VerificacaoComponent {
  formCodigo!: FormGroup;
  email?: string | null | undefined;

  request: VerificarCodigoRequest = new VerificarCodigoRequest();

  @ViewChild("pinContainer") pinContainer!: ElementRef;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly recoverService: RecoverService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.email = window.localStorage.getItem("email");
    this.iniciarFormulario();
    this.iniciarPinContainer();
  }

  iniciarFormulario(): void {
    this.formCodigo = this.formBuilder.group({
      primeiroNumero: [null, Validators.required],
      segundoNumero: [null, Validators.required],
      terceiroNumero: [null, Validators.required],
      quartoNumero: [null, Validators.required]
    });
  }

  salvarCodigo(): void {
    this.spinner.show();

    let primeiroNumero = this.formCodigo.get("primeiroNumero")?.value;
    let segundoNumero = this.formCodigo.get("segundoNumero")?.value;
    let terceiroNumero = this.formCodigo.get("terceiroNumero")?.value;
    let quartoNumero = this.formCodigo.get("quartoNumero")?.value;

    let codigo = `${primeiroNumero}${segundoNumero}${terceiroNumero}${quartoNumero}`;

    this.request.Email = this.email || "";
    this.request.Code = parseInt(codigo);

    this.recoverService
      .verificarCodigo(this.request)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: resp => {
          if(resp){
            window.localStorage.setItem("pin", codigo);
            this.mudarTela();
          }
        },
        error: e => {
          this.toastrService.error(e.error);
        }
      });
  }

  private iniciarPinContainer() {
    this.pinContainer.nativeElement.addEventListener("keyup", (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;

      const maxLength = parseInt(target.getAttribute("maxlength") || "0", 10);
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        let next = target;
        while ((next = next.nextElementSibling as HTMLInputElement)) {
          if (next == null) break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
        }
      }

      if (myLength === 0) {
        let next = target;
        while ((next = next.previousElementSibling as HTMLInputElement)) {
          if (next == null) break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
        }
      }
    });

    this.pinContainer.nativeElement.addEventListener("keydown", (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = "";
    });
  }

  mudarTela(): void {
    this.router.navigate(["/criar-senha"]);
  }

  mudarTelaEsqueciSenha(): void {
    this.router.navigate(["/esqueci-senha"]);
  }
}
