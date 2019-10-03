import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';

import { tap, takeUntil } from 'rxjs/operators';

import { PostItDto } from 'src/app/dto/postit.interface';
import { PostItService } from 'src/app/services/post-it.service';
import { fadeIn } from 'src/app/util/animations';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-post-it-edit',
  templateUrl: './post-it-edit.component.html',
  styleUrls: ['./post-it-edit.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', useAnimation(fadeIn, { params: { time: '1s' } }))])
  ]
})
export class PostItEditComponent extends BaseComponent implements OnInit {
  postItNote: PostItDto;
  isModified: boolean;

  constructor(
    private service: PostItService,
    private route: ActivatedRoute,
    private router: Router) {
    super();
  }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if (isNaN(id)) {
      this.backToMainView();
    } else {

      this.service.get(Number.parseInt(id))
        .pipe(tap(p => {
          if (!p) this.backToMainView(); // back to main view if no record found
        }),
          takeUntil(this.destroy$))
        .subscribe(p => this.postItNote = p);
    }
  }

  private backToMainView() {
    this.router.navigateByUrl('/');
  }

  onDelete() {
    this.service.delete(this.postItNote.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(_ => this.backToMainView());
  }

  onSave() {
    this.service.save(this.postItNote)
      .pipe(takeUntil(this.destroy$))
      .subscribe(resp => {
        if (resp) {
          this.backToMainView();
        } else {
          alert("Ups. Something went wrong!");
        }
      });
  }
}
