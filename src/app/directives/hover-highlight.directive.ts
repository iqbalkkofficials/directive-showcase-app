import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  @Input() highlightColor: string = '';
  @Input() textColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor, this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null,null);
  }

  private highlight(color: string | null, textColor: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
  }
}
