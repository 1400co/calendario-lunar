import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  imports: [CommonModule],
  templateUrl: './recomendaciones.component.html',
  styleUrl: './recomendaciones.component.scss'
})
export default class RecomendacionesComponent {
  climaFrio = [
    { nombre: 'Papa', descripcion: 'Cultivo básico para climas fríos, requiere suelos bien drenados y ricos en nutrientes.', icono: '🌱' },
    { nombre: 'Cebolla', descripcion: 'Resistente a bajas temperaturas, ideal para altiplanos.', icono: '🧅' },
    { nombre: 'Zanahoria', descripcion: 'Crece bien en climas frescos con suelos arenosos y bien aireados.', icono: '🥕' },
    { nombre: 'Repollo', descripcion: 'Vegetal de hoja que prospera en temperaturas bajas y con buena humedad.', icono: '🥬' },
    { nombre: 'Espinaca', descripcion: 'Rápida de cultivar, se adapta bien a temperaturas frías y días cortos.', icono: '🌿' }
  ];

  climaCaliente = [
    { nombre: 'Maíz', descripcion: 'Se adapta a temperaturas altas y suelos fértiles, ideal para zonas tropicales.', icono: '🌽' },
    { nombre: 'Yuca', descripcion: 'Cultivo resistente al calor y la sequía, se adapta a suelos arenosos.', icono: '🌿' },
    { nombre: 'Frijol', descripcion: 'Fijador natural de nitrógeno, ideal para suelos pobres en nutrientes.', icono: '🫘' },
    { nombre: 'Plátano', descripcion: 'Requiere climas cálidos y húmedos, clave en la dieta de zonas tropicales.', icono: '🍌' },
    { nombre: 'Tomate', descripcion: 'Crece bien en climas cálidos con riego constante y suelos ricos.', icono: '🍅' }
  ];
}
