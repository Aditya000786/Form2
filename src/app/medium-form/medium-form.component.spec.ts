import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumFormComponent } from './medium-form.component';

describe('MediumFormComponent', () => {
  let component: MediumFormComponent;
  let fixture: ComponentFixture<MediumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
