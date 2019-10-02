import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItBrowseComponent } from './post-it-browse.component';

describe('PostItBrowseComponent', () => {
  let component: PostItBrowseComponent;
  let fixture: ComponentFixture<PostItBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostItBrowseComponent ]
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
