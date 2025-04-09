import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpServiceBase } from './http-service-base.service';

// mock da função inject do Angular
jest.mock('@angular/core', () => {
  const actual = jest.requireActual('@angular/core');
  return {
    ...actual,
    inject: () => mockHttpClient
  };
});

const mockHttpClient: jest.Mocked<HttpClient> = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
} as any;

describe('HttpServiceBase', () => {
  let service: HttpServiceBase<any>;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new HttpServiceBase<any>('pessoas'); // instanciado manualmente
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should call http.get with the correct URL', () => {
      const testUrl = 'estatistico';
      const expectedResponse = { data: 'test' };

      mockHttpClient.get.mockReturnValue(of(expectedResponse));

      service.get(testUrl).subscribe((response) => {
        expect(response).toEqual(expectedResponse);
      });

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        expect.stringContaining('pessoas/estatistico'),
        expect.any(Object)
      );
    });
  });

  describe('post', () => {
    it('should throw not implemented error', () => {
      expect(() => service.post('algum-url', {})).toThrow('Method not implemented.');
    });
  });

  describe('put', () => {
    it('should throw not implemented error', () => {
      expect(() => service.put('algum-url', {})).toThrow('Method not implemented.');
    });
  });

  describe('delete', () => {
    it('should throw not implemented error', () => {
      expect(() => service.delete('algum-url')).toThrow('Method not implemented.');
    });
  });
});
