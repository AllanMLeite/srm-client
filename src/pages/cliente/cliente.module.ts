import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { ClienteComponent } from './cliente.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';

@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
