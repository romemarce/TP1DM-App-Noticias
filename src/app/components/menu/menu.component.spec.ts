import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Deberia mostrar el componente por pantalla', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar al menos el item iniciar sesion si no esta logueado', ()=>{
    component.isLoggedIn = false
    component.checkProfileUser();

    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    expect(compile.textContent).toContain('Iniciar Sesión')
  })

  it('Deberia mostrar al menos el item dashboard si esta logueado', ()=>{
    component.isLoggedIn = true // logueado
    component.checkProfileUser();

    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    expect(compile.textContent).toContain('Dashboard')
  })
});
