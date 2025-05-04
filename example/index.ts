import { isFlagEnabled, defaultConfig } from '../dist/index'
import type { FlexFlag } from '../dist/types/flexflag.types'

// Example usage
const exampleFlag: FlexFlag = {
  key: 'dark-mode',
  enabled: true,
  description: 'Enables dark mode UI'
}

console.log(`Feature "${exampleFlag.key}" is enabled?`, isFlagEnabled(exampleFlag))

// Show config
console.log('Default config:', defaultConfig)
