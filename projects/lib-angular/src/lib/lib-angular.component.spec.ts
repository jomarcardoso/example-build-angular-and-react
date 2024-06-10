import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibAngularComponent } from './lib-angular.component';

describe('LibAngularComponent', () => {
  let component: LibAngularComponent;
  let fixture: ComponentFixture<LibAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
