import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tooltip',
  templateUrl: './ngx-tooltip-ui.component.html',
  styleUrls: ['./ngx-tooltip-ui.component.scss']
})
export class TooltipComponent {
  @Input() content = '';
  @Input() position: { top: string; left: string } | null = null;
  @Input() backgroundColor = '#000';
  @Input() color = '#fff';
  @Input() borderStyle = '1px solid transparent';
  @Input() positionClass = 'top';
  @Input() icon: string | null = null;
  visible = false;

  showTooltip() {
    this.visible = true;
  }

  hideTooltip() {
    this.visible = false;
  }
}
