import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget } from '@nxworkshp/api-interfaces';
import { MaterialModule } from '@nxworkshp/material';

@Component({
  selector: 'nxworkshp-widgets-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './widgets-list.component.html',
  styleUrl: './widgets-list.component.css',
})
export class WidgetsListComponent {
  @Input() widgets: Widget[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
