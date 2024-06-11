import React from "react";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { createRoot } from "react-dom/client";
import { App } from "./app.react";
import { AccordionComponent } from "@lib/angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [AccordionComponent],
  standalone: true,
})
export class AppComponent implements AfterViewInit {
  @ViewChild("reactRoot")
  reactRootRef?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    if (!this.reactRootRef) {
      return;
    }

    const root = createRoot(this.reactRootRef.nativeElement);

    // I need this log and I don't know why
    console.log(React);

    root.render(<App />);
  }
}
