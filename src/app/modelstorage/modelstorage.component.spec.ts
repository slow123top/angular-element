import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelstorageComponent } from './modelstorage.component';

describe('ModelstorageComponent', () => {
  let component: ModelstorageComponent;
  let fixture: ComponentFixture<ModelstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
