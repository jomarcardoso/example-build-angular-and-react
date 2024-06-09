import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.html',
  styleUrls: ['../../scss/components/accordion.scss'],
  standalone: true,
})
export class AccordionComponent {
  @Input()
  title = '';
}
