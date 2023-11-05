/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { ViveroListComponent } from './vivero-list.component';
import { Plants } from '../plants';
import { ViveroService } from '../vivero.service';


describe('ViveroListComponent', () => {
  let component: ViveroListComponent;
  let fixture: ComponentFixture<ViveroListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ViveroListComponent ],
      providers: [ViveroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViveroListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Plants(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.plants.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have 1 table <table> element', () => {
    expect(debug.queryAll(By.css('table')))
  });

  it('Should have 4 headers <th> element', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(4)
  });

  it('Should have 3 registers or 4 <tr> element', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });
});
