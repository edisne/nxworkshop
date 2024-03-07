import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Widget } from '@nxworkshp/api-interfaces';

@Component({
  selector: 'nxworkshp-widgets-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './widgets-list.component.html',
  styleUrl: './widgets-list.component.css',
})
export class WidgetsListComponent {
  @Input() widgets: Widget[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
