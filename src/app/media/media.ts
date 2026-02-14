import { Component } from '@angular/core';
import { MediaPicture } from "./media-picture/media-picture";

@Component({
  selector: 'app-media',
  imports: [MediaPicture],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {

}
