import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTableRowComponent } from './history-table-row.component';

describe('HistoryTableRowComponent', () => {
  let component: HistoryTableRowComponent;
  let fixture: ComponentFixture<HistoryTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
