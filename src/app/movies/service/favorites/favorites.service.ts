import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {
  public favorites: string[] = [];

  constructor() {

  }

  setFavorite(favorite) {
    this.favorites.push(favorite);
    return true;
  }

  deleteFavorite(favorite) {
    this.favorites.splice(this.favorites.indexOf(favorite), 1);
    return true;
  }

  isFavorite(favorite) {
    if (this.favorites.indexOf(favorite) > -1) {
      return true;
    } else {
      return false;
    }
  }

  getFavorites() {
    return this.favorites;
  }
}
