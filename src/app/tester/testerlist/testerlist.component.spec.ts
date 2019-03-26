import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterlistComponent } from './testerlist.component';

describe('TesterlistComponent', () => {
  let component: TesterlistComponent;
  let fixture: ComponentFixture<TesterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
