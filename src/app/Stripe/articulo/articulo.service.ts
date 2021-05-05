import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../model/articulo';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  articuloURL = 'http://localhost:9091/SpringMVC/servlet/articulo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Articulo[]> {
    return this.httpClient.get<Articulo[]>('http://localhost:9091/SpringMVC/servlet/articulo/lista', cabecera);
  }

  public detalle(id: number): Observable<Articulo> {
    return this.httpClient.get<Articulo>(this.articuloURL + `detalle/${id}`, cabecera);
  }
}