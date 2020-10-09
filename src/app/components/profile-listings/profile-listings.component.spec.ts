import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListingsComponent } from './profile-listings.component';

describe('ProfileListingsComponent', () => {
  let component: ProfileListingsComponent;
  let fixture: ComponentFixture<ProfileListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
