import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Capital } from '../interfaces/capital.interface';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${environment.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url);

  }

  buscarCapital(termino: string): Observable<Capital[]> {
    const url = `${environment.apiURL}/capital/${termino}`;
    return this.http.get<Capital[]>(url);

  }

  buscarPaisPorId(id: string): Observable<Country> {
    const url = `${environment.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);

  }

}
