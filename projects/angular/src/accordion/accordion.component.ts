import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrls: ['../../../scss/components/accordion.scss'],
})
export class AccordionComponent {
  @Input()
  title = '';
}
