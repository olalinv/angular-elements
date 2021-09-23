import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail-child',
  templateUrl: './post-detail-child.component.html',
  styleUrls: ['./post-detail-child.component.css']
})
export class PostDetailChildComponent implements OnInit {

  @Input() public id: string;

  constructor() { }

  public ngOnInit(): void { }

}
