import { Component, Input, HostListener, HostBinding, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../base.component';
import { PostItDto } from 'src/app/dto/dto';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent extends BaseComponent implements OnInit {

  @Input() postItNote: PostItDto;

  @HostBinding("class.single-note-view")
  @Input()
  singleNoteView: boolean;

  @Output() onEditing = new EventEmitter<boolean>();

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  @HostListener('click') 
  onClick() {
    if (!this.singleNoteView) {
      this.router.navigateByUrl(`/${this.postItNote.id}`);
    }
  }
}
