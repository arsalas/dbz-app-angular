import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionDetailsPageComponent } from './champion-details-page.component';

describe('ChampionDetailsPageComponent', () => {
  let component: ChampionDetailsPageComponent;
  let fixture: ComponentFixture<ChampionDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionDetailsPageComponent]
    });
    fixture = TestBed.createComponent(ChampionDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
