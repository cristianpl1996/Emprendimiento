import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-about-solutions',
  templateUrl: './about-solutions.component.html',
  styleUrls: ['./about-solutions.component.scss']
})
export class AboutSolutionsComponent implements OnInit {
  features: object[] = [
    {
      icon: 'box',
      title: 'Tecnologias Innovadoras',
      description:
        'Integracion con tecnologias de realidad aumentada.'
    },
    {
      icon: 'settings',
      title: 'Actualizaciones Gratuitas',
      description:
        'Obtendrá actualizaciones gratuitas de por vida a medida que mejoramos o agregamos nuevas funciones.'
    },
    {
      icon: 'award',
      title: 'Contacto con Proveedores',
      description:
        // tslint:disable-next-line: max-line-length
        'En caso de que necesite un medicamento, lo cubrimos con nuestro servicio al contactar con el proveedor de manera rápida y de alta calidad.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
