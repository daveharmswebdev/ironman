import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWayComponent } from './ngrx-way.component';

describe('NgrxWayComponent', () => {
  let component: NgrxWayComponent;
  let fixture: ComponentFixture<NgrxWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
