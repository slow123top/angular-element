import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTourAppComponent } from './hero-tour-app.component';

describe('HeroTourAppComponent', () => {
  let component: HeroTourAppComponent;
  let fixture: ComponentFixture<HeroTourAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTourAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTourAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
