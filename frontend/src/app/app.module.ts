import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {'path': '', component:MatchesComponent },
  {'path' : 'chat', component:ConversationComponent} 
]
@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}), 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
