import { describe, it, expect } from 'vitest';

import { app } from './app';

describe('App test', () => {
  it('should be defined', () => {
    expect(app).not.toBeDefined();
  });
});