import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../services/post/post.service';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/user/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsPostDialogComponent } from '../detailsDialog/details-post-dialog.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-anteprima-moderato',
  templateUrl: './anteprima-moderato.component.html',
  styleUrls: ['./anteprima-moderato.component.scss']
})
export class AnteprimaModeratoComponent implements OnInit {
  postList: Array<Post> = new Array
  postList2: Array<Post> = new Array
  userList: Array<User> = new Array
  constructor(private readonly postService: PostService,
    private readonly dialog: MatDialog,
    private readonly userService: UsersService) { }


  ngOnInit(): void {
    const observable = forkJoin(
      { posts: this.postService.getPosts(), users: this.userService.getUsers() })
    observable.subscribe({
      next: (item) => {
        this.userList = item.users
        this.postList = item.posts;
        console.log(this.postList)
        this.postList2 = item.posts;
        console.log(this.postList2)
      },
      error: (error: string) => { console.log(error); }
    });
  }
  openDialog(item: Post, user: User) {
    this.dialog.open(DetailsPostDialogComponent, {
      panelClass: 'details-screen-dialog',
      hasBackdrop: true,
      data: {
        selectedPost: item,
        selectedUser: user,
        btnPrimary: "Ok", btnSecondary: "Chiudi"
      }
    });
  }
  deletePost(item: Post) {
    let itemList = new Set(this.postList2)
    itemList.delete(item)
    this.postList2 = [...itemList];
  }
}
