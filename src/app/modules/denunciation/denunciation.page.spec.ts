import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DenunciationPage } from './denunciation.page';

describe('DenunciationPage', () => {
  let component: DenunciationPage;
  let fixture: ComponentFixture<DenunciationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DenunciationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
