import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailComponent } from './pages/detail/detail.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class PostsModule { }
