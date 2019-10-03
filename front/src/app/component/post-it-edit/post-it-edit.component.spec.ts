import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PostItEditComponent } from './post-it-edit.component';
import { SingleNoteComponent } from '../single-note/single-note.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostItEditComponent', () => {
  let component: PostItEditComponent;
  let fixture: ComponentFixture<PostItEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostItEditComponent, SingleNoteComponent],
      imports: [RouterTestingModule, FormsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
