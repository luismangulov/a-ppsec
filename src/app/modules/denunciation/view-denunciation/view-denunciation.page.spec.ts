import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDenunciationPage } from './view-denunciation.page';

describe('ViewDenunciationPage', () => {
  let component: ViewDenunciationPage;
  let fixture: ComponentFixture<ViewDenunciationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewDenunciationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
