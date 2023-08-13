import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDTO } from '../dto/RequestDTO';
import { ResponseDTO } from '../dto/ResponseDTO';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SimuladorService {
  constructor(private http: HttpClient) {}

  getSimulacao(request: RequestDTO): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(`${environment.api}/simular`, request);
  }
}
