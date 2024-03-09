import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsListComponent } from 'apps/client/src/app/widgets/widgets-list/widgets-list.component';
import { WidgetsDetailsComponent } from 'apps/client/src/app/widgets/widgets-details/widgets-details.component';
import { WidgetsFacade } from '@nxworkshp/core-state';
import { Widget } from '@nxworkshp/api-interfaces';
import { Observable } from 'rxjs';
import { MaterialModule } from '@nxworkshp/material';

@Component({
  selector: 'nxworkshp-widgets',
  standalone: true,
  imports: [
    CommonModule,
    WidgetsListComponent,
    WidgetsDetailsComponent,
    MaterialModule,
  ],
  providers: [WidgetsFacade],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css',
})
export class WidgetsComponent implements OnInit {
  allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidget$;
  // selectedWidget$: Observable<Widget> = new Observable<{
  //   id: '';
  //   title: '';
  //   description: '';
  // }>();

  constructor(private widgetsFacade: WidgetsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.widgetsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectWidget(null);
  }

  selectWidget(widget: Widget | null) {
    this.widgetsFacade.selectWidget(widget?.id || '');
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    this.widgetsFacade.saveWidget(widget);
  }

  deleteWidget(widget: Widget) {
    this.widgetsFacade.deleteWidget(widget);
  }
}
