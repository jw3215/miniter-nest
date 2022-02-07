import { Logger1Middleware } from './logger1.middleware';

describe('Logger1Middleware', () => {
  it('should be defined', () => {
    expect(new Logger1Middleware()).toBeDefined();
  });
});
