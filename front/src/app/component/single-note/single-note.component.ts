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

  private postITInternal: PostItDto;

  @Input()
  set postItNote(val: PostItDto) {
    this.postITInternal = val;
    this.internalVal = val.content;
  }

  internalVal: string;

  @HostBinding("class.single-note-view")
  @Input()
  singleNoteView: boolean;

  even: boolean = Math.floor(Math.random() * 2) % 2 > 0;

  @Output() onEditing = new EventEmitter<boolean>();

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick() {
    if (!this.singleNoteView) {
      this.router.navigateByUrl(`/${this.postITInternal.id}`);
    }
  }

  onEdit(val: any) {
    this.postITInternal.content = val.innerText;
    this.onEditing.next(true);
  }
}
