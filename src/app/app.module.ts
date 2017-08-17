import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent }     from './app.component';
import { PokemonService } from './pokemon.service';
import { FormsModule }   from '@angular/forms';


@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ PokemonService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
