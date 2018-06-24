import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppProvider } from './app.provider';
import { FormsModule } from '@angular/forms';
import { MaskService } from '../service/MaskService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AppProvider, MaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
