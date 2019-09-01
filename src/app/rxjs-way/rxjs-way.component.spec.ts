import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWayComponent } from './rxjs-way.component';

describe('RxjsWayComponent', () => {
  let component: RxjsWayComponent;
  let fixture: ComponentFixture<RxjsWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
