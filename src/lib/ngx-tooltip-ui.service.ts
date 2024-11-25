import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private tooltipData: any;

  setTooltip(data: any) {
    this.tooltipData = data;
  }

  getTooltip() {
    return this.tooltipData;
  }
}
