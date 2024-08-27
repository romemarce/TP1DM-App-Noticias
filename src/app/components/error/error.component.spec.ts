import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorComponent } from './error.component';
import { IError } from 'src/types';

describe('Test ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let mockError: IError = {
    isError: true,
    message: "Error"
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Deberia mostrar el componente en pantalla', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de mostrar un mensaje de error', ()=>{
    component.error = mockError
    fixture.detectChanges();

    const compile = fixture.debugElement.nativeElement;
    expect(compile.textContent).toContain(mockError.message)
  })
});
