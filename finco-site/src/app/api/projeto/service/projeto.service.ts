import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateProjetoRequest } from "src/app/api/projeto/model/request/create-projeto.request";
import { DataProjectsResponse } from "src/app/api/projeto/model/response/projeto.response";
import { environment } from "src/environments/environment";

const url = environment.api;

@Injectable({
  providedIn: "root"
})
export class ProjetoService {
  constructor(private readonly httpClient: HttpClient) {}

  listar(): Observable<DataProjectsResponse> {
    return this.httpClient.get<DataProjectsResponse>(`${url}/project/list`);
  }

  inserir(request: CreateProjetoRequest): Observable<any> {
    return this.httpClient.post<any>(url + "/project/create", request as {});
  }
}
