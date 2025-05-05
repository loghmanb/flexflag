import { FlexFlag } from './flexflag.types';

export interface FeatureFlagConfig {
    env: 'development' | 'production'
    flags: FlexFlag[]
}
