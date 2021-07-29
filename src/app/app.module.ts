import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ModAuthModule} from "./mod-auth/mod-auth.module";
import {ModSugmeModule} from "./mod-sugme/mod-sugme.module";
import {ModCoreModule} from './mod-core/mod-core.module';
import {ModTipsModule} from './mod-tips/mod-tips.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModSocketnotificationModule} from './mod-socketnotification/mod-socketnotification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModAuthModule,
    ModSugmeModule,
    ModCoreModule,
    ModTipsModule,
    ModSocketnotificationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
