import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  enteredValue = '';
  newPost = 'n c';
  onAddpost() {
    // alert('Post Added');
    // this.newPost = 'user post';
    // this.newPost = postData.value;
    this.newPost = this.enteredValue;
  }
}
