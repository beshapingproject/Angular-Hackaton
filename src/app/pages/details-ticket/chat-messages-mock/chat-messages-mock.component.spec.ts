import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessagesMockComponent } from './chat-messages-mock.component';

describe('ChatMessagesMockComponent', () => {
  let component: ChatMessagesMockComponent;
  let fixture: ComponentFixture<ChatMessagesMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatMessagesMockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessagesMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
