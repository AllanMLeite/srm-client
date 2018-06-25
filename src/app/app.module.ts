import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaskService } from '../service/MaskService';
import { GenericProvider } from '../provider/generic.provider';
import { ClienteProvider } from '../provider/cliente.provider';
import { ClienteComponent } from '../pages/cliente/cliente.component';
import { ClienteModule } from '../pages/cliente/cliente.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ClienteModule
  ],
  providers: [GenericProvider,
              ClienteProvider, 
              MaskService
  ],
  bootstrap: [ClienteComponent]
})
export class AppModule { }
