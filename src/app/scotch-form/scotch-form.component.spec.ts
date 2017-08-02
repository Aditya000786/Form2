import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScotchFormComponent } from './scotch-form.component';

describe('ScotchFormComponent', () => {
  let component: ScotchFormComponent;
  let fixture: ComponentFixture<ScotchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScotchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScotchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
