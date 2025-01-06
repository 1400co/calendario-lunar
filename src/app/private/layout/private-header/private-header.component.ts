import { Component } from '@angular/core';

@Component({
    selector: 'app-private-header',
    imports: [],
    templateUrl: './private-header.component.html',
    styleUrl: './private-header.component.scss'
})
export default class PrivateHeaderComponent {
  isToggled = false;

  toggleSidebar() {
    this.isToggled = !this.isToggled;
    const wrapper = document.getElementById('wrapper');
    if (wrapper) {
      if (this.isToggled) {
        wrapper.classList.add('toggled');
      } else {
        wrapper.classList.remove('toggled');
      }
    }
  }
}
