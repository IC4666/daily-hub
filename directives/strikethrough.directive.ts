import { Directive, ElementRef, Renderer2, input, OnChanges, SimpleChanges, inject } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]',
  standalone: true
})
export class StrikethroughDirective implements OnChanges {
  isChecked = input(false);
  private el = inject(ElementRef);
  private ren = inject(Renderer2);
  
  private updateStyle() {
    if (this.isChecked()) {
      this.ren.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
      this.ren.setStyle(this.el.nativeElement, 'color', 'var(--primary-clr)');
    }
    else {
      this.ren.setStyle(this.el.nativeElement, 'text-decoration', 'none');
      this.ren.setStyle(this.el.nativeElement, 'color', 'inherit');
    }
  }

    ngOnChanges(changes: SimpleChanges) {
    this.updateStyle();
  }
}


// import { Directive, ElementRef, HostListener, Renderer2,input } from '@angular/core';

// @Directive({
//   selector: '[appStrikethrough]',
//   standalone: true
// })
// export class StrikethroughDirective {
//   isChecked = input(false);
  
//   constructor(private el: ElementRef, private ren: Renderer2) {
    
//   }

//   @HostListener('change') onChange() {
//     if(this.isChecked()){
//       this.ren.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
//       this.ren.setStyle(this.el.nativeElement, 'color', 'gray');
//     }
//     else{
//       this.ren.setStyle(this.el.nativeElement, 'text-decoration', 'none');
//       this.ren.setStyle(this.el.nativeElement, 'color', 'inherit');
//     }
//   }

//     @HostListener('load') onload() {
//     if(this.isChecked()){
//       this.ren.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
//       this.ren.setStyle(this.el.nativeElement, 'color', 'red');
//     }
//     else{
//       this.ren.setStyle(this.el.nativeElement, 'text-decoration', 'none');
//       this.ren.setStyle(this.el.nativeElement, 'color', 'blue');
//     }
//   }


// }
