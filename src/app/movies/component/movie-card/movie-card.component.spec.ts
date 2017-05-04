import { TestBed, async } from '@angular/core/testing';

import { MoviesModule } from './../../movies.module';

import { MovieCardComponent } from './movie-card.component';

describe('FavoritesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MoviesModule ],
      declarations: [
        MovieCardComponent
      ]
    }).compileComponents();
  }));

  it('should create the MovieCard', async(() => {
    const fixture = TestBed.createComponent(MovieCardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
