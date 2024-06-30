import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptComponent } from './descript.component';

describe('DescriptComponent', () => {
  let component: DescriptComponent;
  let fixture: ComponentFixture<DescriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptComponent]
    });
    fixture = TestBed.createComponent(DescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
