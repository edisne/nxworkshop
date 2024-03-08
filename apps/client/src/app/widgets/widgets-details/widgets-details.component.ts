import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Widget } from '@nxworkshp/api-interfaces';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'nxworkshp-widgets-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
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
