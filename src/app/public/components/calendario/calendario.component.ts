import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { differenceInDays, startOfMonth, endOfMonth, addDays, format, isToday } from 'date-fns';


@Component({
  selector: 'app-calendario',
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export default class CalendarioComponent {
  groupedDays: any[] = [];

  ngOnInit() {
    this.generateGroupedCalendar(new Date());
  }

  generateGroupedCalendar(date: Date) {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    let current = start;
    const days: any[] = [];

    // Generar información diaria con fase lunar
    while (current <= end) {
      const day = {
        date: format(current, 'yyyy-MM-dd'),
        phase: this.getLunarPhase(current),
        isToday: isToday(current) // Verificar si el día es el actual
      };
      days.push(day);
      current = addDays(current, 1);
    }

    // Agrupar días por rango
    this.groupedDays = this.groupDaysWithActivities(days);
  }

  getLunarPhase(date: Date): string {
    const newMoon = new Date('2023-11-13');
    const daysSinceNewMoon = differenceInDays(date, newMoon) % 29.53;

    if (daysSinceNewMoon < 1) return '🌑 Nueva';
    if (daysSinceNewMoon < 7.38) return '🌒 Creciente';
    if (daysSinceNewMoon < 14.76) return '🌕 Llena';
    if (daysSinceNewMoon < 22.14) return '🌘 Menguante';
    return '🌑 Nueva';
  }

  groupDaysWithActivities(days: any[]): any[] {
    const ranges = [
      { start: 1, end: 5, activity: 'Sembrar tubérculos y raíces' },
      { start: 6, end: 10, activity: 'Abonar y sembrar frutos' },
      { start: 11, end: 15, activity: 'Recolectar frutos' },
      { start: 16, end: 20, activity: 'Podar y preparar el terreno' },
      { start: 21, end: 25, activity: 'Sembrar raíces' },
      { start: 26, end: 31, activity: 'Control de plagas' }
    ];

    return ranges.map(range => {
      const filteredDays = days.filter(day => {
        const dayOfMonth = parseInt(format(new Date(day.date), 'd'), 10);
        return dayOfMonth >= range.start && dayOfMonth <= range.end;
      });
      return { range: `${range.start} al ${range.end}`, activity: range.activity, days: filteredDays };
    });
  }
}
