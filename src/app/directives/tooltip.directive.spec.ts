import { TooltipDirective } from './tooltip.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('TooltipDirective', () => {
  let directive: TooltipDirective;
  let elementRef: ElementRef;
  let renderer2: Renderer2;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    renderer2 = jasmine.createSpyObj('Renderer2', ['createElement', 'createText', 'appendChild', 'setStyle', 'removeChild']);
    directive = new TooltipDirective(elementRef, renderer2);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should create tooltip on mouse enter and remove on mouse leave', () => {
    directive.tooltipText = 'Test Tooltip';
    directive.onMouseEnter();
    expect(renderer2.createElement).toHaveBeenCalledWith('span');
    expect(renderer2.createText).toHaveBeenCalledWith('Test Tooltip');
    directive.onMouseLeave();
    expect(renderer2.removeChild).toHaveBeenCalledWith(elementRef.nativeElement, jasmine.anything());
  });
});
