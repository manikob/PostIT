import { Component, OnInit } from '@angular/core';
import { PostItService } from 'src/app/services/post-it.service';
import { PostItRepo } from 'src/app/repositories/post-it.repo';

@Component({
  selector: 'app-post-it-browse',
  templateUrl: './post-it-browse.component.html',
  styleUrls: ['./post-it-browse.component.scss']
})
export class PostItBrowseComponent implements OnInit {

  notes: PostItRepo[];

  constructor(private service: PostItService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(x => this.notes = x);
  }

}
