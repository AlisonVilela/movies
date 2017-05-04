import { TestBed, async } from '@angular/core/testing';

import { MoviesModule } from './../../movies.module';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MoviesModule ],
      declarations: [
        DetailComponent
      ]
    }).compileComponents();
  }));

  it('should create the Detail', async(() => {
    const fixture = TestBed.createComponent(DetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
