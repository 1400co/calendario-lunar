import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  imports: [CommonModule],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.scss'
})
export default class BeneficiosComponent {
  plantasBeneficiosas = [
    {
      clima: 'Frío',
      planta: 'Caléndula',
      insectos: ['Mariquitas', 'Crisopas'],
      plagas: ['Pulgones', 'Trips', 'Mosca blanca']
    },
    {
      clima: 'Frío',
      planta: 'Romero Silvestre',
      insectos: ['Avispas parasitoides', 'Sírfidos'],
      plagas: ['Pulgones', 'Orugas', 'Mosca de la fruta']
    },
    {
      clima: 'Caliente',
      planta: 'Albahaca Morada',
      insectos: ['Sírfidos', 'Crisopas'],
      plagas: ['Pulgones', 'Mosca blanca']
    },
    {
      clima: 'Caliente',
      planta: 'Maracuyá Silvestre',
      insectos: ['Avispas depredadoras', 'Abejas sin aguijón'],
      plagas: ['Orugas', 'Escamas']
    }
  ];
}
