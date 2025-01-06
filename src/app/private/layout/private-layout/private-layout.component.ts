import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-private-layout',
    imports: [RouterOutlet,  CommonModule],
    templateUrl: './private-layout.component.html',
    styleUrl: './private-layout.component.scss'
})
export default class PrivateLayoutComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
