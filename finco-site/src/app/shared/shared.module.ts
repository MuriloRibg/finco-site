import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmessageComponent } from 'src/app/shared/components/vmessage/vmessage.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { DateFormatPipe } from 'src/app/shared/pipes/data-format.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [VmessageComponent, HeaderComponent, DateFormatPipe, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [VmessageComponent, HeaderComponent, DateFormatPipe, FooterComponent]
})
export class SharedModule { }
