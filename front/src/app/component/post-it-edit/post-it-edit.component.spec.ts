import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItEditComponent } from './post-it-edit.component';

describe('PostItEditComponent', () => {
  let component: PostItEditComponent;
  let fixture: ComponentFixture<PostItEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostItEditComponent ]
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
