import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDenunciationPage } from './create-denunciation.page';

describe('CreateDenunciationPage', () => {
  let component: CreateDenunciationPage;
  let fixture: ComponentFixture<CreateDenunciationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateDenunciationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
