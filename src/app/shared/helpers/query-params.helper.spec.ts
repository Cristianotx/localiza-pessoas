import { buildQueryParams } from './query-params.helper';

describe('buildQueryParams', () => {
  it('should build a query string with simple key-value pairs', () => {
    const params = { nome: 'João', idade: 30 };
    const result = buildQueryParams(params);
    expect(result).toBe('nome=Jo%C3%A3o&idade=30');
  });

  it('should skip undefined, null, empty string and empty array', () => {
    const params = {
      nome: '',
      cidade: undefined,
      estado: null,
      interesses: [],
      idade: 25
    };
    const result = buildQueryParams(params);
    expect(result).toBe('idade=25');
  });

  it('should include boolean values', () => {
    const params = {
      ativo: true,
      bloqueado: false
    };
    const result = buildQueryParams(params);
    expect(result).toBe('ativo=true&bloqueado=false');
  });

  it('should append array values correctly', () => {
    const params = {
      categorias: ['livros', 'filmes'],
      idade: 20
    };
    const result = buildQueryParams(params);
    expect(result).toBe('categorias=livros&categorias=filmes&idade=20');
  });

  it('should ignore invalid array values and keep valid ones', () => {
    const params = {
      tags: [],
      filtros: ['A', 'B'],
      status: ''
    };
    const result = buildQueryParams(params);
    expect(result).toBe('filtros=A&filtros=B');
  });

  it('should return an empty string if all fields are skipped', () => {
    const params = {
      nome: '',
      ativo: null,
      tags: [],
      something: undefined
    };
    const result = buildQueryParams(params);
    expect(result).toBe('');
  });
});
