import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegistroComponent } from './home-registro.component';

describe('HomeRegistroComponent', () => {
  let component: HomeRegistroComponent;
  let fixture: ComponentFixture<HomeRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
