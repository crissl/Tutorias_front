import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbdAlertCustom } from './confirmar.component';

@NgModule({
  imports: [BrowserModule, ],
  declarations: [NgbdAlertCustom],
  exports: [NgbdAlertCustom],
  bootstrap: [NgbdAlertCustom]
})
export class NgbdAlertCustomModule {}