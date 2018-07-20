import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCatalogComponent } from './project-catalog.component';

describe('ProjectCatalogComponent', () => {
  let component: ProjectCatalogComponent;
  let fixture: ComponentFixture<ProjectCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
