import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './pages/list/list.component';
import { PostsResolverService } from './resolvers/posts-resolver.service';
import { DetailComponent } from './pages/detail/detail.component';
import { PostDetailResolverService } from './resolvers/post-detail-resolver.service';
import { PostCommentResolverService } from './resolvers/post-comment-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        resolve: {
            posts: PostsResolverService,
        }
    },
    {
        path: 'posts/:id',
        component: DetailComponent,
        resolve: {
            details: PostDetailResolverService,
            comments: PostCommentResolverService,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {}
