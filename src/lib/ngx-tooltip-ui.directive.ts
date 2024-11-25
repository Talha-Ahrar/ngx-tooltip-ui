import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef
} from '@angular/core';
import { TooltipComponent } from './tooltip/ngx-tooltip-ui.component';

@Directive({
  selector: '[ngxTooltip]'
})
export class TooltipDirective {
  @Input('ngxTooltip') tooltipContent = '';
  @Input() tooltipPosition = 'top';
  @Input() tooltipColor = '#fff';
  @Input() tooltipBackground = '#000';
  @Input() tooltipBorder = '1px solid transparent';
  @Input() tooltipIcon: string | null = null;

  private tooltipRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (this.tooltipRef) return;

    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    this.tooltipRef = this.vcr.createComponent(factory);

    const rect = this.el.nativeElement.getBoundingClientRect();
    const tooltipPosition = this.calculatePosition(rect);

    this.tooltipRef.instance.content = this.tooltipContent;
    this.tooltipRef.instance.position = tooltipPosition;
    this.tooltipRef.instance.backgroundColor = this.tooltipBackground;
    this.tooltipRef.instance.color = this.tooltipColor;
    this.tooltipRef.instance.borderStyle = this.tooltipBorder;
    this.tooltipRef.instance.positionClass = this.tooltipPosition;
    this.tooltipRef.instance.icon = this.tooltipIcon;
    this.tooltipRef.instance.showTooltip();
  }

  private hideTooltip() {
    if (this.tooltipRef) {
      this.tooltipRef.destroy();
      this.tooltipRef = null;
    }
  }

  private calculatePosition(rect: DOMRect) {
    switch (this.tooltipPosition) {
      case 'top':
        return { top: `${rect.top - 10}px`, left: `${rect.left + rect.width / 2}px` };
      case 'bottom':
        return { top: `${rect.bottom + 10}px`, left: `${rect.left + rect.width / 2}px` };
      case 'left':
        return { top: `${rect.top + rect.height / 2}px`, left: `${rect.left - 10}px` };
      case 'right':
        return { top: `${rect.top + rect.height / 2}px`, left: `${rect.right + 10}px` };
      default:
        return { top: `${rect.top - 10}px`, left: `${rect.left + rect.width / 2}px` };
    }
  }
}
