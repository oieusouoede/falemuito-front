import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDTO } from '../dto/RequestDTO';
import { ResponseDTO } from '../dto/ResponseDTO';
import { Tarifa } from '../model/Tarifa';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class TarifaService {
  constructor(private http: HttpClient) {}

  getAllTarifas(): Observable<Tarifa[]> {
    return this.http.get<Tarifa[]>(`${environment.api}/tarifas`);
  }

  getAllOrigens(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.api}/tarifas/origens`);
  }

  getDestinosPorOrigem(origem: string): Observable<Tarifa[]> {
    return this.http.get<Tarifa[]>(
      `${environment.api}/tarifas/destinos/${origem}`
    );
  }

  getSimulacao(request: RequestDTO): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(`${environment.api}/simular`, request);
  }
}
