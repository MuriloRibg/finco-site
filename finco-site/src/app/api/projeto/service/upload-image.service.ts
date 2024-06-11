import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProjectImageResponse } from 'src/app/api/projeto/model/response/projeto-image-response';
import { environment } from 'src/environments/environment';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private urlProject =  `${url}/project/`
  constructor(private http: HttpClient) { }

  uploadImage(id: number, image: string | null): Observable<any> {
    const body = { image: image };
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.put(`${this.urlProject}upload-image/${id}`, body as {}, { headers });
  }

  recuperar(id: number) : Observable<DataProjectImageResponse>{
    return this.http.get<DataProjectImageResponse>(`${this.urlProject}${id}/images`);
  }
}
