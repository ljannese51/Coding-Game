import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Post } from '../interfaces/post.interface';
import { UsersService } from '../services/user/users.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-anteprima-base',
  templateUrl: './anteprima-base.component.html',
  styleUrls: ['./anteprima-base.component.scss']
})
export class AnteprimaBaseComponent implements OnInit {
  postList: Array<Post> = new Array
  userList: Array<User> = new Array
  constructor(private readonly postService: PostService,private readonly userService:UsersService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((item) => this.postList = item)
    this.userService.getUsers().subscribe((item) => this.userList = item)
  }

}
