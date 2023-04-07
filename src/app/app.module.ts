import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhoiswhoComponent } from './pages/whoiswho/whoiswho.component';
import { TreasureComponent } from './pages/treasure/treasure.component';
import { WhackamoleComponent } from './pages/whackamole/whackamole.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './pages/whoiswho/person/person.component';
import { QuestionComponent } from './pages/whoiswho/question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { CurrencyComponent } from './pages/exchange/currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhoiswhoComponent,
    TreasureComponent,
    WhackamoleComponent,
    PersonComponent,
    QuestionComponent,
    ExchangeComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
