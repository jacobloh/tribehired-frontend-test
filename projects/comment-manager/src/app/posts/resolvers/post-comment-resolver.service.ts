import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'projects/comment-manager/src/view-model/comment';

@Injectable({
    providedIn: 'any',
})
export class PostCommentResolverService implements Resolve<Observable<Comment[]>> {
    constructor(private httpClient: HttpClient) {}

    resolve(route: ActivatedRouteSnapshot) {
        const postId = route.params.id;
        return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments', {
            params: {
                postId,
            }
        }).pipe(
            catchError(({ error }) => {
                throw error;
            }),
        );
    }
}
