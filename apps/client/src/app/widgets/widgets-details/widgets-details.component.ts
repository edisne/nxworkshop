import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget } from '@nxworkshp/api-interfaces';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@nxworkshp/material';

@Component({
  selector: 'nxworkshp-widgets-details',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './widgets-details.component.html',
  styleUrl: './widgets-details.component.css',
})
export class WidgetsDetailsComponent {
  currentWidget: Widget = {} as Widget;
  originalTitle = '';
  @Input() set widget(value: Widget) {
    if (value) this.originalTitle = value.title;
    this.currentWidget = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
