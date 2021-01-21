import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { PayeeListComponent } from './payee-list.component';

describe('PayeeListComponent', () => {
  let component: PayeeListComponent;
  let fixture: ComponentFixture<PayeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeeListComponent ],
      imports:[RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Get list of all payees', () => {
    expect(component).toBeTruthy();
  });
});
