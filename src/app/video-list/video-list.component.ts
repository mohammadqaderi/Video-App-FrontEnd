import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
@Input() videos: Video[];
// tslint:disable-next-line: no-output-rename
@Output('SelectVideo') public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelect(video: Video){
    this.SelectVideo.emit(video);
  }

}
