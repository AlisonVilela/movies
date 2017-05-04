import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ FavoritesService ]
    });
  });

  it('should create the Favorites Service', inject([FavoritesService], (service: FavoritesService) => {
    expect(service).toBeTruthy();
  }));
});
