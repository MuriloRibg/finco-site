import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginRequest } from 'src/app/api/login/models/request/login-request';
import { LoginResponse } from 'src/app/api/login/models/response/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly url = `${environment.api}/login`

  constructor(private readonly http: HttpClient) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, request);
  }
}
