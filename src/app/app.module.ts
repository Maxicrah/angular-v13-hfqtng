import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IpInfoComponent } from './ipinfo/ipinfo.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { IpInfoService } from './ip-info.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, IpInfoComponent],
  bootstrap: [AppComponent],
  providers: [IpInfoService],
})
export class AppModule {}
