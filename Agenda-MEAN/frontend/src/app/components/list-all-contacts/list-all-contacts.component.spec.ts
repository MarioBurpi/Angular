import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllContactsComponent } from './list-all-contacts.component';

describe('ListAllContactsComponent', () => {
  let component: ListAllContactsComponent;
  let fixture: ComponentFixture<ListAllContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
