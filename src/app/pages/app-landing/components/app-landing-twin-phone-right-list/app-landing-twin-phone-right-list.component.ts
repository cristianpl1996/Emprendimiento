import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing-twin-phone-right-list',
  templateUrl: './app-landing-twin-phone-right-list.component.html',
  styleUrls: ['./app-landing-twin-phone-right-list.component.scss']
})
export class AppLandingTwinPhoneRightListComponent implements OnInit {
  boxes: object[] = [
    // tslint:disable-next-line: max-line-length
    { icon: 'book', title: 'Contactos con proveedores', description: 'Realiza pedidos de medicamentos con tus proveedores.' },
    { icon: 'box', title: 'Detalles de medicamentos', description: 'Caracteristicas de medicamentos en tiempo real.' },
    { icon: 'star', title: 'Estado de medicamentos', description: 'Estados de medicamentos en tiempo real.' },
    { icon: 'calendar', title: 'Recordatorios', description: 'Gestion de agendas y recordatorios.' }
  ];
  constructor() {}

  ngOnInit() {}
}
