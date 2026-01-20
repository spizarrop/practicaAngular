import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { MiDirectivaDirective } from './directives/mi-directiva.directive';
import { MiPipePipe } from './pipes/mi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductoCardComponent,
    PadreComponent,
    HijoComponent,
    MiDirectivaDirective,
    MiPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
