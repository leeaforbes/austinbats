import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-picture',
  imports: [],
  templateUrl: './media-picture.html',
  styleUrl: './media-picture.css',
})
export class MediaPicture {
  @Input() src: string = '';
  @Input() description: string = '';
}
