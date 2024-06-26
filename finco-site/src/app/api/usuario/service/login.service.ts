import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { environment } from "src/environments/environment";
import { LoginRequest } from "src/app/api/usuario/models/request/login-request";
import { LoginResponse } from "src/app/api/usuario/models/response/login-response";
import { TokenService } from "src/app/core/token/token.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private readonly url = `${environment.api}/login`;

  constructor(private readonly http: HttpClient, private readonly tokenService: TokenService) {}

  login(request: LoginRequest){
    return this.http
      .post<LoginResponse>(this.url, request as {}, { observe: "response" })
      .pipe(tap(resp => this.tokenService.setToken(resp.body?.data.token ?? "")));
  }
}
