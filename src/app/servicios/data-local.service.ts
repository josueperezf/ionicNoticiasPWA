import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article[]=[];
  constructor(
    private storage: Storage,
    private toastService:ToastService
    ) {
    this.getFavoritos();
  }

  guardarNoticia(noticia: Article) {
    const existe = this.noticias.find((noti)=> noti.title=== noticia.title);
    if(!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos',this.noticias);
      this.toastService.presentToast('Se agregó a favoritos');
    }
  }
  borrarNoticia(noticia: Article) {
    this.noticias =  this.noticias.filter((noti)=> noti.title !== noticia.title);
    this.toastService.presentToast('Se eliminó de favoritos');
    this.storage.set('favoritos',this.noticias);
  }
  async getFavoritos() {
    const favoritos = await this.storage.get('favoritos');
    if(favoritos){
      this.noticias = favoritos;
    }
  }
}
