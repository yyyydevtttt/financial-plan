import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowTableComponent } from './flow-table.component';

describe('FlowTableComponent', () => {
  let component: FlowTableComponent;
  let fixture: ComponentFixture<FlowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
