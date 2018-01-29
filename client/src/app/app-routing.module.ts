import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'add', pathMatch: 'full', component: AddComponent },
  { path: 'trivia', pathMatch: 'full', component: TriviaComponent },
  { path: '**', redirectTo: "/" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
