import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article, RespuestaTopHeadLines } from 'src/app/interfaces/interfaces';
import { NoticiasService } from '../../servicios/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  @ViewChild(IonSegment) ionSegment: IonSegment;
  public categorias = ['business','entertainment','general','health','science','sports','technology'];
  public noticias: Article[] = [];
  constructor(private noticiasService: NoticiasService) {}

  cambioCategoria(event) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }
  loadData(event) {
    this.cargarNoticias(this.ionSegment.value, event);
  }
  cargarNoticias(categoria: string, event?) {
    this.noticiasService.getTopHeadLinesCategoria(categoria )
        .subscribe((respuesta: RespuestaTopHeadLines)=>{
          // console.log(respuesta);
          this.noticias.push(...respuesta.articles);
          if(event) {
            event.target.complete();
            if(respuesta.articles.length == 0 ) {
              event.target.disabled = true;
            }
          }
        });
  }
  ngAfterViewInit() {
    this.ionSegment.value = this.categorias[0];
    this.cargarNoticias(this.categorias[0]);
  }
}
