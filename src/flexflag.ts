import { FlexFlag } from './types/flexflag.types'

export function isFlagEnabled(flag: FlexFlag): boolean {
  return flag.enabled
}
