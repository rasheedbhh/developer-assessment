import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './components/public/conversation/conversation.component';
import { LoginComponent } from './components/public/login/login.component';
import { MatchesComponent } from './components/public/matches/matches.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  {'path' : '', component:PublicComponent,
    children: [
        {'path': '', component:MatchesComponent },
        {'path' : 'chat/:id', component:ConversationComponent},
        {'path': 'login', component:LoginComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
