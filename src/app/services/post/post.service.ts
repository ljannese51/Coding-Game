import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../../app/interfaces/post.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(environment.endPointApi + 'posts')
      .pipe();
  }

}
