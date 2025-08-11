import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { GlassEffectComponent } from '../glass-effect/glass-effect.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, GlassEffectComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 @Input() title = "";

 toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('expanded');
    }
 }
}
