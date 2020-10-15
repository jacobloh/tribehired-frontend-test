import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'projects/comment-manager/src/view-model/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: Post[];

  constructor(private route: ActivatedRoute, private router: Router) {
    const { posts } = this.route.snapshot.data;
    this.posts = posts;
  }

  gotoDetailPage(id: number): void {
    this.router.navigate(['/posts', id]);
  }

  ngOnInit(): void {}
}
