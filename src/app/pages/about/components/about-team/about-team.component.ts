import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'dc-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss']
})
export class AboutTeamComponent implements OnInit {
  team: object[] = [
    {
      name: 'Cristian David Patiño',
      position: 'Universidad Tecnologica de Pereira.',
      quote: 'Estudiante Ingenieria Sistemas y Computación.'
    },
    {
      name: 'Sara Yasmin Rincon',
      position: 'Universidad Tecnologica de Pereira.',
      quote: 'Estudiante Ingenieria Sistemas y Computación.'
    },
    {
      name: 'Jorge Luis Sanchez',
      position: 'Universidad Tecnologica de Pereira.',
      quote: 'Estudiante Ingenieria Sistemas y Computación.'
    }
  ];

  public config: SwiperConfigInterface = {
    // a11y: true,
    // direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    // keyboard: true,
    // mousewheel: true,
    // scrollbar: false,
    breakpoints: {
      '576': { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 }
    },
    navigation: true,
    pagination: false
  };

  constructor() {}

  ngOnInit() {}
}
