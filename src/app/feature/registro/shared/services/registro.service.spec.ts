import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegistroService } from './registro.service';
import { Registro } from '../model/registro';

describe('RegistroService', () => {
  let service: RegistroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistroService]
    });
    service = TestBed.inject(RegistroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get registros', () => {
    service.getAll().subscribe(response => {
      expect(response).toEqual([]);
    });
    const req = httpMock.expectOne(`/api/registros`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should add registro', () => {
    const registro: Registro = {
      tipo: 'IN',
      concepto: '',
      descripcion: '',
      cuanto: 2000,
      cuando: 'Ayer',
      icono: '',
    }
    service.add(registro).subscribe(response => {
      expect(response.valor).toBeInstanceOf(Number);
    });
    const req = httpMock.expectOne(`/api/registros`);
    expect(req.request.method).toBe('POST');
    req.flush({valor: 1});
  });
});
