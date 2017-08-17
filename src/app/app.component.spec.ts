import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokemonService } from './pokemon.service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  var fixture = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pokedex');
  }));


  it('should be # 151 pokemones', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.getPokemones();

    setTimeout(() => {
      expect(app.pokemones.length).toEqual(151);
      done();
    }, 1000);
  });

  it('should be # 151 pokemones', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.getPokemones();

    setTimeout(() => {
      expect(app.pokemones.length).toEqual(152);
      done();
    }, 1000);
  });
});
