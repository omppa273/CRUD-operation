import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchNamesComponent } from './batch-names.component';

describe('BatchNamesComponent', () => {
  let component: BatchNamesComponent;
  let fixture: ComponentFixture<BatchNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchNamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
