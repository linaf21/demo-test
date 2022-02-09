import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    console.log('beforeEach');
  });

  afterEach(async () =>{
    console.log('afterEach');
  })

  beforeAll(async ()=>{
    console.log('beforeAll');
  })

  afterAll(async () =>{
    console.log('afterAll');
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo-test app is running!');
  });

  it('El valor de myVar debe ser Hola Mundo', ()=>{
    const appComponent = TestBed.createComponent(AppComponent).componentInstance;
    const valor = appComponent.myVar;
    expect(valor).toEqual('Hola Mundo')
  })

  it('El valor de saludo debe contener Lina', ()=>{
    const appComponent = TestBed.createComponent(AppComponent).componentInstance;
    const valor = appComponent.saludo;
    expect(valor).toContain('Lina')
  })

  it('El debe sumar 4 mas 2 y retornar 6', ()=>{
    const appComponent = TestBed.createComponent(AppComponent).componentInstance;
    const resultado = appComponent.sumar(4,2);
    expect(resultado).toEqual(6);
  })

  it('Debe retornar True', ()=>{
    const appComponent = TestBed.createComponent(AppComponent).componentInstance;
    const resultado = appComponent.par(44);
    expect(resultado).toBeTrue();
  })

  it('Debe retornar False', ()=>{
    const appComponent = TestBed.createComponent(AppComponent).componentInstance;
    const resultado = appComponent.par(43);
    expect(resultado).toBeFalsy();
  })
});
