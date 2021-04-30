import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAdministratorComponent } from './forum-administrator.component';

describe('ForumAdministratorComponent', () => {
  let component: ForumAdministratorComponent;
  let fixture: ComponentFixture<ForumAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
