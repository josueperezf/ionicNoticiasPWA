import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey,
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // la siguientes 3 lineas es para la paginacion
  headLinesPagina = 0;
  categoriaActual = '';
  categoriaPagina = 0;
  constructor(private http: HttpClient ) { }

  // la siguiente es una funciono generica de typescript, la <T> es para decir que va a recibir un tipo y que el return que va a emitir es del mismo de quien llama a esta funcion
  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, {headers});
  }
  getTopHeadLines() {
    // return this.http.get<RespuestaTopHeadLines>('http://newsapi.org/v2/top-headlines?country=ve&apiKey=a127756bb1ee4632a6298936d13c9b25');
    this.headLinesPagina++;
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=ve&page=${this.headLinesPagina}`);
  }

  getTopHeadLinesCategoria(categoria: string) {
    if(categoria === this.categoriaActual){
      this.categoriaPagina++;
    } else {
      this.categoriaPagina = 1;
      this.categoriaActual = categoria;
    }
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=ve&category=${categoria}&page=${this.categoriaPagina}`);
  }
}
