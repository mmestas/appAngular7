import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberbossAddonsComponent } from './memberboss-addons.component';

describe('MemberbossAddonsComponent', () => {
  let component: MemberbossAddonsComponent;
  let fixture: ComponentFixture<MemberbossAddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberbossAddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberbossAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
