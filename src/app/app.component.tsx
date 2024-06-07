import React from 'react';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import '../libs/css/index.css';

@Component({
  selector: 'app-root',
  template: `<h1>Jomar says welcome!</h1>
    <p>Here a paragraph rendered by Angular.</p>

    <app-accordion title="an angular accordion"> I'm happy </app-accordion>

    <div #reactRoot></div> `,
  // styleUrl: '../libs/css/index.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('reactRoot')
  reactRootRef: ElementRef;

  ngAfterViewInit() {
    const root = createRoot(this.reactRootRef.nativeElement);

    root.render(<App />);
  }
}
