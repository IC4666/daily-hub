import { signal, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './components/route-animations/route-animations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  animations: [routeAnimations],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('DailyHub');
  prepareRoute = (outlet: RouterOutlet) => outlet?.activatedRouteData?.['animation'];
}
