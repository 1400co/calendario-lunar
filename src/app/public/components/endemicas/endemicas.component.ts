import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-endemicas',
  imports: [CommonModule],
  templateUrl: './endemicas.component.html',
  styleUrl: './endemicas.component.scss'
})
export default class EndemicasComponent {
  plantasEndemicas = [
    {
      clima: 'Frío',
      planta: 'Mortiño',
      descripcion: 'Arbusto ornamental que produce frutos pequeños y flores discretas, ideal para climas fríos.',
      polinizadores: ['Abejas nativas', 'Mariposas']
    },
    {
      clima: 'Frío',
      planta: 'Chuquiragua',
      descripcion: 'Arbusto de flores naranjas brillantes, característico de los páramos.',
      polinizadores: ['Colibríes', 'Abejas']
    },
    {
      clima: 'Frío',
      planta: 'Uva camarona',
      descripcion: 'Arbusto con flores rojas tubulares, muy llamativo y resistente al frío.',
      polinizadores: ['Colibríes']
    },
    {
      clima: 'Frío',
      planta: 'Cabuya',
      descripcion: 'Arbusto ornamental de hojas puntiagudas, ideal para jardines en altiplanos.',
      polinizadores: ['Mariposas', 'Abejas']
    },
    {
      clima: 'Frío',
      planta: 'Hierba de Rata',
      descripcion: 'Arbusto bajo de flores multicolores que cambian de tonalidad según maduran.',
      polinizadores: ['Mariposas', 'Abejas']
    },
    {
      clima: 'Caliente',
      planta: 'Flor de Mayo',
      descripcion: 'Arbusto compacto con flores grandes y rojas, muy ornamental y típico del trópico.',
      polinizadores: ['Colibríes', 'Abejas']
    },
    {
      clima: 'Caliente',
      planta: 'Ixora',
      descripcion: 'Arbusto con racimos de flores rojas, naranjas o amarillas, ideal para climas cálidos.',
      polinizadores: ['Mariposas', 'Abejas']
    },
    {
      clima: 'Caliente',
      planta: 'Cruz de Malta',
      descripcion: 'Arbusto pequeño de flores rojas, ideal como borde ornamental.',
      polinizadores: ['Colibríes']
    },
    {
      clima: 'Caliente',
      planta: 'Duranta',
      descripcion: 'Arbusto de flores pequeñas moradas y frutos decorativos, ideal para climas cálidos.',
      polinizadores: ['Abejas', 'Mariposas']
    },
    {
      clima: 'Caliente',
      planta: 'Cucarda',
      descripcion: 'Arbusto ornamental con flores grandes y vistosas, perfecto para climas cálidos.',
      polinizadores: ['Mariposas', 'Colibríes']
    }
  ];
}
