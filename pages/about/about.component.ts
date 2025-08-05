import { Component } from '@angular/core';
import { GlassEffectComponent } from '../../components/glass-effect/glass-effect.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GlassEffectComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
