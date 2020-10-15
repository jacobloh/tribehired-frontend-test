import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment, Post } from 'projects/comment-manager/src/view-model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  details: Post;
  displayedColumns: string[] = ['name', 'email', 'body'];
  dataSource: MatTableDataSource<Comment>;

  constructor(private route: ActivatedRoute, private router: Router) {
    const { details, comments } = this.route.snapshot.data;
    this.details = details;

    this.dataSource = new MatTableDataSource<Comment>(comments);
  }
  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
