import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCharactersComponent } from './title-characters.component';

describe('TitleCharactersComponent', () => {
  let component: TitleCharactersComponent;
  let fixture: ComponentFixture<TitleCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
