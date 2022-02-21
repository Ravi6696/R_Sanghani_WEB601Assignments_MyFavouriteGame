import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[content-hover-affect]'
})
export class HoverAffectDirective {
  constructor(private ele:ElementRef) { }
  @Input('underlinehovereffect') contentHoverAffect:any;  

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.classList.add(this.contentHoverAffect);
  }

  @HostListener('mouseover') onMouseOver() {
    this.ele.nativeElement.classList.add(this.contentHoverAffect);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.classList.remove(this.contentHoverAffect);
  }
}