import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberModalComponent } from './subscriber-modal.component';

describe('SubscriberModalComponent', () => {
  let component: SubscriberModalComponent;
  let fixture: ComponentFixture<SubscriberModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
