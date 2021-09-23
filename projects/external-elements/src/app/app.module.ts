import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { PostDetailComponent } from 'src/app/post/components/post-detail/post-detail.component';
import { PostModule } from 'src/app/post/post.module';
import 'zone.js';

@NgModule({
  imports: [
    BrowserModule,
    PostModule
  ],
  entryComponents: [
    PostDetailComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(PostDetailComponent, {
      injector: this.injector
    });
    customElements.define('post-detail', element);
  }
}
