import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RecuperarSenhaRequest } from "src/app/api/usuario/models/request/recuperar-senha-request";
import { ResetarSenhaRequest } from "src/app/api/usuario/models/request/resetar-senha-request";
import { environment } from "src/environments/environment";

const url = environment.api + "/recover";

@Injectable({
  providedIn: "root"
})
export class RecoverService {
  constructor(private readonly httpCliente: HttpClient) {}

  recuperarSenha(request: RecuperarSenhaRequest): Observable<any> {
    return this.httpCliente.post<any>(url + "/request", request as {});
  }

  resetarSenha(request: ResetarSenhaRequest): Observable<any> {
    return this.httpCliente.post<any>(url + "/code", request as {});
  }
}
