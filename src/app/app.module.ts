import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaskService } from '../service/MaskService';
import { GenericProvider } from '../provider/generic.provider';
import { ClienteProvider } from '../provider/cliente.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GenericProvider,
              ClienteProvider, 
              MaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
