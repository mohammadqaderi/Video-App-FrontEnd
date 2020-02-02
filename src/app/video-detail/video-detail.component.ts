import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: "video-detail",
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  constructor() {}
// tslint:disable-next-line: no-output-rename
 @Output('updateVideoEvent') updateVideoEvent = new EventEmitter();
// tslint:disable-next-line: no-output-rename
 @Output('deleteVideoEvent')  deleteVideoEvent = new EventEmitter();
  @Input() video: Video;
  editTitle: boolean = false;
  onTitleClick() {
    this.editTitle = true;
  }
  ngOnChanges() {
    this.editTitle = false;
  }
  ngOnInit() {}

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }
}
