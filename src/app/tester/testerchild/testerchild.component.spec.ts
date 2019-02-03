import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterchildComponent } from './testerchild.component';

describe('TesterchildComponent', () => {
  let component: TesterchildComponent;
  let fixture: ComponentFixture<TesterchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
