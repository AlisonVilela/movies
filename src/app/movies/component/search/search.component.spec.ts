import { TestBed, async } from '@angular/core/testing';

import { MoviesModule } from './../../movies.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MoviesModule ],
      declarations: [
        SearchComponent
      ]
    }).compileComponents();
  }));

  it('should create the Search', async(() => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
