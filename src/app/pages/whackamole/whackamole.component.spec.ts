import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackamoleComponent } from './whackamole.component';

describe('WhackamoleComponent', () => {
  let component: WhackamoleComponent;
  let fixture: ComponentFixture<WhackamoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhackamoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhackamoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
