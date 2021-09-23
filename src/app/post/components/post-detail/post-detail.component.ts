import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() public id: string;

  public post: Post;

  constructor(
    public route: ActivatedRoute,
    private postService: PostService
  ) {
    // Params
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
      }
    });
  }

  public ngOnInit(): void {
    this.getPost(this.id);
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.getPost(changes.id.currentValue);
  }

  public getPost = (id: string): void => {
    this.postService.get(id).subscribe((post: Post) => {
      this.post = post;
    }, (error: string) => {
      console.log(error);
    });
  }

}
