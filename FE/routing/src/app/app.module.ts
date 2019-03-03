import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FollowersComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'followers', component: FollowersComponent },
        { path: 'posts', component: PostsComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
