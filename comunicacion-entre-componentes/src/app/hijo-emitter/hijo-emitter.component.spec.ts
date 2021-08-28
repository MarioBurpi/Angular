import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoEmitterComponent } from './hijo-emitter.component';

describe('HijoEmitterComponent', () => {
  let component: HijoEmitterComponent;
  let fixture: ComponentFixture<HijoEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
