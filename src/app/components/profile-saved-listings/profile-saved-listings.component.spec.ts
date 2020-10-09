import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSavedListingsComponent } from './profile-saved-listings.component';

describe('ProfileSavedListingsComponent', () => {
  let component: ProfileSavedListingsComponent;
  let fixture: ComponentFixture<ProfileSavedListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSavedListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSavedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
