import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubSPAComponent } from './git-hub-spa.component';

describe('GitHubSPAComponent', () => {
  let component: GitHubSPAComponent;
  let fixture: ComponentFixture<GitHubSPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubSPAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubSPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
