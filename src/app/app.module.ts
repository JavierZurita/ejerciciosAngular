import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhoiswhoComponent } from './pages/whoiswho/whoiswho.component';
import { TreasureComponent } from './pages/treasure/treasure.component';
import { WhackamoleComponent } from './pages/whackamole/whackamole.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './pages/whoiswho/person/person.component';
import { QuestionComponent } from './pages/whoiswho/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhoiswhoComponent,
    TreasureComponent,
    WhackamoleComponent,
    PersonComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
