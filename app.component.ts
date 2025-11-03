import { signal, Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './components/route-animations/route-animations.component';
import Lenis from 'lenis';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  animations: [routeAnimations],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = signal('DailyHub');
  prepareRoute = (outlet: RouterOutlet) => outlet?.activatedRouteData?.['animation'];

  // for smooth scrolling effect
   ngAfterViewInit() {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}
