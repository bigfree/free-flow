import { AppVersionMiddleware } from './app-version.middleware';

describe('AppVersionMiddleware', () => {
  it('should be defined', () => {
    expect(new AppVersionMiddleware()).toBeDefined();
  });
});
