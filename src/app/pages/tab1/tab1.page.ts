import { Component, OnInit } from '@angular/core';
import { Article, RespuestaTopHeadLines } from 'src/app/interfaces/interfaces';
import { NoticiasService } from '../../servicios/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: Article[] = [];
  constructor( private noticiasService: NoticiasService) {}
  cargarNoticias(event?) {
    this.noticiasService.getTopHeadLines()
      .subscribe((resp: RespuestaTopHeadLines) => {
        // el hace un push para no querer sobre escribir informacion
        // los ... los usa para que insertar el arreglo completo de articulos, sino cada elemento por separado, para que no quede un array que contiene otro array, sino un array con cada fila de los articulos
        this.noticias.push(...resp.articles);
        // la siguiente seccion es para el infite scroll
        if(event) {
          event.target.complete();
          if(resp.articles.length == 0 ) {
            event.target.disabled = true;
          }
        }
      });
  }
  loadData(event) {
    this.cargarNoticias(event);
  }
  ngOnInit(){
    this.cargarNoticias();
  }
}
