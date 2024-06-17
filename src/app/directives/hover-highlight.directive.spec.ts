import { HoverHighlightDirective } from './hover-highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('HoverHighlightDirective', () => {
  let directive: HoverHighlightDirective;
  let elementRef: ElementRef;
  let renderer2: Renderer2;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    renderer2 = jasmine.createSpyObj('Renderer2', ['setStyle']);
    directive = new HoverHighlightDirective(elementRef, renderer2);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should highlight element on mouse enter and remove on mouse leave', () => {
    directive.highlightColor = 'blue';
    directive.onMouseEnter();
    expect(renderer2.setStyle).toHaveBeenCalledWith(elementRef.nativeElement, 'backgroundColor', 'blue');
    directive.onMouseLeave();
    expect(renderer2.setStyle).toHaveBeenCalledWith(elementRef.nativeElement, 'backgroundColor', null);
  });
});
