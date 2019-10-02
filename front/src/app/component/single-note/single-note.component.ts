import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PostItDto } from 'src/app/dto/postit.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent implements OnInit {

  @Input() postItNote: PostItDto;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener('dblclick') onDoubleClick() {
    this.router.navigateByUrl(`/${this.postItNote.id}`);
  }

}
