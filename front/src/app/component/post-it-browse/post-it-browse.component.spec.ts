import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PostItBrowseComponent } from './post-it-browse.component';
import { SingleNoteComponent } from '../single-note/single-note.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostItBrowseComponent', () => {
  let component: PostItBrowseComponent;
  let fixture: ComponentFixture<PostItBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostItBrowseComponent, SingleNoteComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
