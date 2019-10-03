import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SingleNoteComponent } from './single-note.component';

describe('SingleNoteComponent', () => {
  let component: SingleNoteComponent;
  let fixture: ComponentFixture<SingleNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleNoteComponent],
      imports: [RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNoteComponent);
    component = fixture.componentInstance;
    component.postItNote = { id: 10, content: "Lorem ipsum" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
