import { Component, Input } from '@angular/core';
import { kebabCase } from '@lib/utils';

kebabCase('Jomar A. Cardoso');

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
