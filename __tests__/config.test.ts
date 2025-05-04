import { defaultConfig } from '../src/config';
import { FeatureFlagConfig } from '../src/types/config.types';

describe('defaultConfig', () => {
  it('has development environment by default', () => {
    expect(defaultConfig.env).toBe('development');
  });

  it('initializes flags as an empty array', () => {
    expect(Array.isArray(defaultConfig.flags)).toBe(true);
    expect((defaultConfig as FeatureFlagConfig).flags).toHaveLength(0);
  });
});
