import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampPage1Component } from './samp-page1.component';

describe('SampPage1Component', () => {
  let component: SampPage1Component;
  let fixture: ComponentFixture<SampPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
