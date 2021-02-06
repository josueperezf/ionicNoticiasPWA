import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/servicios/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  opciones= {
    allowSlidePrev: false,
    allowSlideNext: false,
  }
  constructor(public dataLocalService:DataLocalService) {}

}
