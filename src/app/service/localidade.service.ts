import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidade } from '../model/Localidade';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LocalidadeService {
  constructor(private http: HttpClient) {}

  getAllLocalidades(): Observable<Localidade[]> {
    return this.http.get<Localidade[]>(`${environment.api}/localidades`);
  }
}
