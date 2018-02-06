import { AdminAuthGuard } from './admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/auth.service';
import { AuthGuardService } from 'app/auth-guard.service';
import { UserService } from './user.service';
import { CreateBlogComponent } from './create-blog/create-blog.component';


export const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'my/blogs', component: MyBlogsComponent},
 { path: 'login', component: LoginComponent},

 { path: 'blogs', component: BlogsComponent , canActivate: [AuthGuardService]},
 { path: 'create', component: CreateBlogComponent , canActivate: [AuthGuardService]},

 { path: 'admin/blogs', component: AdminBlogsComponent, canActivate: [AuthGuardService, AdminAuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogsComponent,
    AdminBlogsComponent,
    MyBlogsComponent,
    LoginComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
