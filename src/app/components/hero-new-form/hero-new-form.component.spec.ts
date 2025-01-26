import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNewFormComponent } from './hero-new-form.component';

describe('HeroNewFormComponent', () => {
  let component: HeroNewFormComponent;
  let fixture: ComponentFixture<HeroNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroNewFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
