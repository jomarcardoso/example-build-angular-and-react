import { Component, Input } from '@angular/core';
import '../../css/components/accordion.css';

@Component({
  selector: 'app-accordion',
  template: `
    <details class="accordion">
      <summary>{{ title }}</summary>

      <ng-content></ng-content>
    </details>
  `,
  // styleUrls: ['./accordion.css'],
  // styleUrl: '../../css/components/accordion.css',
  standalone: true,
})
export class AccordionComponent {
  @Input()
  title = '';
}
