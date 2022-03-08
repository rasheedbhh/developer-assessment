// Created a public module to initialze the components found in the public folder
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { MatchesComponent } from './matches/matches.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    PublicComponent,
    MatchesComponent,
    ConversationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicModule { }
