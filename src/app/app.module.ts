import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { AnteprimaBaseComponent } from './anteprima-base/anteprima-base.component';
import { AnteprimaModeratoComponent } from './anteprima-moderato/anteprima-moderato.component';
import { HttpClientModule } from '@angular/common/http';
import { InitialsPipe } from './pipes/initials/initials.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { DetailsPostDialogComponent } from './detailsDialog/details-post-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AnteprimaBaseComponent,
    AnteprimaModeratoComponent,
    FilterPipe,
    InitialsPipe,
    DetailsPostDialogComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatDialogModule,MatButtonModule,MatIconModule,
    AppRoutingModule, MatRadioModule, HttpClientModule,
    MatListModule, MatDividerModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
