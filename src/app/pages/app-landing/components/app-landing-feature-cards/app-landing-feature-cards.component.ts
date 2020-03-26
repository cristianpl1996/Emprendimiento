import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing-feature-cards',
  templateUrl: './app-landing-feature-cards.component.html',
  styleUrls: ['./app-landing-feature-cards.component.scss']
})
export class AppLandingFeatureCardsComponent implements OnInit {
  elements: object[] = [
    {
      icon: 'star',
      title: 'Diseño de Calidad'
    },
    {
      icon: 'camera',
      title: 'Herramientas Manuales'
    },
    {
      icon: 'sun',
      title: 'Contenido Creativo'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
