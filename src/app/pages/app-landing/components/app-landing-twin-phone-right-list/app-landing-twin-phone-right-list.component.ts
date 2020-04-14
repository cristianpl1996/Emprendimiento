import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing-twin-phone-right-list',
  templateUrl: './app-landing-twin-phone-right-list.component.html',
  styleUrls: ['./app-landing-twin-phone-right-list.component.scss']
})
export class AppLandingTwinPhoneRightListComponent implements OnInit {
  boxes: object[] = [
    // tslint:disable-next-line: max-line-length
    { icon: 'star', title: 'Estado de medicamentos', description: 'Estados de medicamentos en tiempo real para evitar posibles perdidas.' },
    { icon: 'box', title: 'Detalles de medicamentos', description: 'Proporcionamos detalles y caracteristicas de medicamentos en tiempo real.' },
    { icon: 'calendar', title: 'Recordatorios', description: 'Te permitimos la gestion de agendas y recordatorios.' },
    { icon: 'book', title: 'Contactos con proveedores', description: 'Te ofrecemos un medio para realiza pedidos de medicamentos con tus proveedores.' }
  ];
  constructor() {}

  ngOnInit() {}
}
