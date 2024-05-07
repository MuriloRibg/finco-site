import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterRequest } from "src/app/api/usuario/models/request/register-request";
import { RegisterResponse } from "src/app/api/usuario/models/response/register-response";
import { environment } from "src/environments/environment";

const url = environment.api + "/register";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private readonly httpClient: HttpClient) {}

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(url, request as {});
  }
}
