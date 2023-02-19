import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import instance from './base';

describe('Axis Base', () => {
  let mockAxios: MockAdapter;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
  });

  it('should have baseURL set to https://dummyjson.com', () => {
    expect(instance.defaults.baseURL).toBe('https://dummyjson.com');
  });

  it('should have timeout set to 5000', () => {
    expect(instance.defaults.timeout).toBe(5000);
  });

  it('should have headers set to Content-Type: application/json', () => {
    expect(instance.defaults.headers['Content-Type']).toBe('application/json');
  });
});