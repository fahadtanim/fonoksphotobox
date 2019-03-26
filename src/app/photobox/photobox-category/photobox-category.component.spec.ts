import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoboxCategoryComponent } from './photobox-category.component';

describe('PhotoboxCategoryComponent', () => {
  let component: PhotoboxCategoryComponent;
  let fixture: ComponentFixture<PhotoboxCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoboxCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoboxCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
