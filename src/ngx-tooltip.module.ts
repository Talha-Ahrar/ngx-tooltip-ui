import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './lib/ngx-tooltip-ui.directive';
import { TooltipComponent } from './lib/tooltip/ngx-tooltip-ui.component';

@NgModule({
  declarations: [TooltipDirective, TooltipComponent],
  imports: [CommonModule],
  exports: [TooltipDirective],

})
export class NgxTooltipUiModule {}
