import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from 'projects/comment-manager/src/view-model/post';

@Injectable({
    providedIn: 'any',
})
export class PostDetailResolverService implements Resolve<Observable<Post>> {
    constructor(private httpClient: HttpClient) {}

    resolve(route: ActivatedRouteSnapshot) {
        const postId = route.params.id;
        return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`).pipe(
            catchError(({ error }) => {
                throw error;
            }),
        );
    }
}
