import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';

export interface DetailsPostData {
  title: string;
  btnSecondary: string;
  selectedPost: Post;
  selectedUser: User
  btnPrimary: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './details-post-dialog.component.html',
  styleUrls: ['./details-post-dialog.component.scss']
})


export class DetailsPostDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DetailsPostData
  ) {
  }
  ngOnInit() {
  }

}
