import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoiswhoComponent } from './pages/whoiswho/whoiswho.component';
import { TreasureComponent } from './pages/treasure/treasure.component';
import { WhackamoleComponent } from './pages/whackamole/whackamole.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';

const routes: Routes = [
  {
    path: "", component: WhoiswhoComponent
  },{
    path: "whackamole", component: WhackamoleComponent
  },{
    path: "treasure", component: TreasureComponent
  },{
    path: "exchange/:curr", component: ExchangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
