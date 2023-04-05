import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoiswhoComponent } from './pages/whoiswho/whoiswho.component';
import { TreasureComponent } from './pages/treasure/treasure.component';
import { WhackamoleComponent } from './pages/whackamole/whackamole.component';

const routes: Routes = [
  {
    path: "", component: WhoiswhoComponent
  },{
    path: "whackamole", component: WhackamoleComponent
  },{
    path: "treasure", component: TreasureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
