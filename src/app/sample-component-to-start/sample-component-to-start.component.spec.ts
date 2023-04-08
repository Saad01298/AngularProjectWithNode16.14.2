import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponentToStartComponent } from './sample-component-to-start.component';

describe('SampleComponentToStartComponent', () => {
  let component: SampleComponentToStartComponent;
  let fixture: ComponentFixture<SampleComponentToStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleComponentToStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleComponentToStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
