import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CriarContaComponent } from "src/app/login/criar-conta/criar-conta.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from "src/app/shared/shared.module";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha";
import { environment } from "src/environments/environment";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [CriarContaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ToastrModule.forRoot(), 
  ],
  exports: [CriarContaComponent],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.keySite
      } as RecaptchaSettings
    }
  ]
})
export class CriarContaModule {}
