import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${environment.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url);

  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${environment.apiURL}/region/${termino}?fields=name,capital,cca2,population,flag,flags`;
    return this.http.get<Country[]>(url);

  }

  buscarPaisPorId(id: string): Observable<Country> {
    const url = `${environment.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);

  }

}
