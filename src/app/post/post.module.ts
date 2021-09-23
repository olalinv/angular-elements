import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './services/api.service';
import { PostService } from './services/post.service';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostDetailChildComponent } from './components/post-detail-child/post-detail-child.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    PostDetailComponent,
    PostDetailChildComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterTestingModule,
    PostRoutingModule
  ],
  exports: [
    PostDetailComponent,
    PostDetailChildComponent
  ],
  providers: [
    ApiService,
    PostService
  ]
})
export class PostModule { }
