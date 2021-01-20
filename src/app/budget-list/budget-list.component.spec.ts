import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugdetListComponent } from './budget-list.component';

describe('BugdetListComponent', () => {
  let component: BugdetListComponent;
  let fixture: ComponentFixture<BugdetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugdetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugdetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
