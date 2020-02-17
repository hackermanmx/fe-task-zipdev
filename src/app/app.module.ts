import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import {CommonService} from './services/common.service';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import {FocusMonitor, HighContrastModeDetector} from '@angular/cdk/a11y';
import {Platform} from '@angular/cdk/platform';
import {AutofillMonitor} from '@angular/cdk/text-field';
import {ContentObserver} from '@angular/cdk/observers';
import {MatIconRegistry} from '@angular/material/icon';
import {UniqueSelectionDispatcher} from '@angular/cdk/collections';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantCardComponent } from './partials/restaurant-card/restaurant-card.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    RestaurantsComponent,
    RestaurantCardComponent
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatChipsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonService,
    HighContrastModeDetector,
    Platform,
    FocusMonitor,
    AutofillMonitor,
    ContentObserver,
    MatIconRegistry,
    UniqueSelectionDispatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
