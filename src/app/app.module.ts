import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellModule } from './shell/shell.module';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    ShellModule,
    SharedModule,
    NgbDropdownModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
