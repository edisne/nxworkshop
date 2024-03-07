import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WidgetsComponent } from 'apps/client/src/app/widgets/widgets.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, WidgetsComponent],
  selector: 'nxworkshp-root',
  template: `HOME<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'client';
}
