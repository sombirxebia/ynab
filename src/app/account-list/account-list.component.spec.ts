import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { AccountListComponent } from './account-list.component';

describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountListComponent ],
      imports:[RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a form using formbuilder', () => {
    expect(component.createNewAccount instanceof FormGroup).toBeTruthy();
  });
});
