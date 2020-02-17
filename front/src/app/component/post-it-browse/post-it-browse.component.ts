import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

import { takeUntil } from 'rxjs/operators';

import { PostItService } from 'src/app/services/post-it.service';
import { PostItRepo } from 'src/app/repositories/post-it.repo';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-post-it-browse',
  templateUrl: './post-it-browse.component.html',
  styleUrls: ['./post-it-browse.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.3s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class PostItBrowseComponent extends BaseComponent implements OnInit {

  notes: PostItRepo[];

  constructor(
    private router: Router,
    private service: PostItService) {
    super();
  }

  ngOnInit() {
    this.service.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => this.notes = x);
  }

  onAdd() {
    this.service.create()
      .pipe(takeUntil(this.destroy$))
      .subscribe(resp => {
        if (!resp) {
          alert("Ups. Something went wrong!");
        } else {
          this.router.navigateByUrl(`/${resp.id}`);
        }
      });
  }
}
