import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { BooksService } from '../services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookFormComponent } from '../book-form/book-form.component';
import { SingleBookComponent } from '../single-book/single-book.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/view/:id', component: SingleBookComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    BookListComponent,
    BookFormComponent,
    SingleBookComponent
  ],
  providers: [AuthService, AuthGuardService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
