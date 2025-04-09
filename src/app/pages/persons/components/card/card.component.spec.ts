import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { IPerson } from '../../../../shared/interfaces/person.interface';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: (key: string) => '123' } },
            params: of({ id: '123' })
          }
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.person = {
      id: 1,
      nome: 'Maria Silva',
      idade: 30,
      sexo: 'FEMININO',
      vivo: true,
      urlFoto: 'https://via.placeholder.com/150',
      ultimaOcorrencia: {
        dtDesaparecimento: new Date(),
        dataLocalizacao: new Date(),
        encontradoVivo: false,
        localDesaparecimentoConcat: 'São Paulo, SP',
        ocoId: 123,
        ocorrenciaEntrevDesapDTO: {
          informacao: 'teste',
          vestimentasDesaparecido: 'teste'
        }
      }
    };

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // (opcional) Exemplo de teste visual do template:
  it('should render the person name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Maria Silva');
  });
});
