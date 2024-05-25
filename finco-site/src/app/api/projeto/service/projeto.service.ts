import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProjetoRequest } from 'src/app/api/projeto/model/request/create-projeto.request';
import { ProjetoResponse } from 'src/app/api/projeto/model/response/projeto.response';
import { environment } from 'src/environments/environment';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private readonly httpClient: HttpClient) { }

  listar(): ProjetoResponse[] {
    return [
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
      new ProjetoResponse("Finco site", "Maria Eduarda", new Date(), "Tecnologia"),
    ]
  }

  inserir(request: CreateProjetoRequest): Observable<any> {
    return this.httpClient.post<any>(url + "/project/create", request as {})
  }
}
