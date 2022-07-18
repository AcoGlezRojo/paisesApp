import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  params = new HttpParams().set(
    'fields', 'name,capital,cca2,population,flag,flags'
  );

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${environment.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });

  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${environment.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });

  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${environment.apiURL}/region/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params })
      .pipe(
        tap(console.log)
      );

  }

  buscarPaisPorId(id: string): Observable<Country> {
    const url = `${environment.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);

  }

}
