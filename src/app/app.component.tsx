import React from 'react';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { createRoot } from 'react-dom/client';
import { App } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('reactRoot')
  reactRootRef: ElementRef;

  ngAfterViewInit() {
    const root = createRoot(this.reactRootRef.nativeElement);

    // I need this log and I don't know why
    console.log(React);

    root.render(<App />);
  }
}
