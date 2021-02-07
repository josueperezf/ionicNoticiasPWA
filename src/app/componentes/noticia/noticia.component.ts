import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../servicios/data-local.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() public noticia;
  @Input() public i;
  @Input() public enFavoritos = false;
  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocalService:DataLocalService,
    private platform: Platform
    ) { }

  ngOnInit() {}

  abrirNoticia() {
    const url = this.noticia.url;
    console.log(this.noticia.url);
    const browser = this.iab.create(url, '_system');
  }
  async  lanzarMenu() {
    // la siguiente variable es para determinar si la noticia se debe agregar o quitar de favorito si esta en el tab de favorito 'tab3'
    let borrarGuardarFavorito;
    if(this.enFavoritos) {
      borrarGuardarFavorito = {
        text: 'Borrar de Favorito',
        icon: 'trash',
        cssClass:'action-dark',
        handler: () => {
          this.dataLocalService.borrarNoticia(this.noticia);
        }
      }
    } else {
      borrarGuardarFavorito = {
        text: 'Favorito',
        icon: 'star',
        cssClass:'action-dark',
        handler: () => {
          this.dataLocalService.guardarNoticia(this.noticia);
        }
      }
    }
    const actionSheet = await this.actionSheetController.create({

      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass:'action-dark',
        handler: () => {
          this.compartir();
        }
      },
      borrarGuardarFavorito,
      {
        text: 'Cancelar',
        icon: 'close',
        cssClass:'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  compartir() {
    if ( this.platform.is('cordova') ) {
      this.socialSharing.share(
        this.noticia.title,
        this.noticia.source.name,
        '',
        this.noticia.url
      );
    } else {

      if (navigator['share'] ) {

        navigator['share']({
            title: this.noticia.title,
            text: this.noticia.description,
            url: this.noticia.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('No se pudo compartir porque no se soporta');
      }

    }
  }
}
