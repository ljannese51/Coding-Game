import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private readonly http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(environment.endPointApi + 'users')
      .pipe();
  }
}
