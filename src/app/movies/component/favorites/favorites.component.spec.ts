import { TestBed, async } from '@angular/core/testing';

import { MoviesModule } from './../../movies.module';

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MoviesModule ],
      declarations: [
        FavoritesComponent
      ]
    }).compileComponents();
  }));

  it('should create the Favorites', async(() => {
    const fixture = TestBed.createComponent(FavoritesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
