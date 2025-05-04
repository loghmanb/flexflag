import { isFlagEnabled } from '../src/flexflag';
import { FlexFlag } from '../src/types/flexflag.types';

describe('isFlagEnabled()', () => {
  it('returns true when enabled is true', () => {
    const flag: FlexFlag = { key: 'test-flag', enabled: true };
    expect(isFlagEnabled(flag)).toBe(true);
  });

  it('returns false when enabled is false', () => {
    const flag: FlexFlag = { key: 'test-flag', enabled: false };
    expect(isFlagEnabled(flag)).toBe(false);
  });
});
