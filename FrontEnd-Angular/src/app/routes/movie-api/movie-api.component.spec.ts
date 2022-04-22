import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieApiComponent } from './movie-api.component';

describe('MovieApiComponent', () => {
  let component: MovieApiComponent;
  let fixture: ComponentFixture<MovieApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});