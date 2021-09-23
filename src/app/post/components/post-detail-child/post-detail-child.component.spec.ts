import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailChildComponent } from './post-detail-child.component';

describe('PostDetailChildComponent', () => {
  let component: PostDetailChildComponent;
  let fixture: ComponentFixture<PostDetailChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
