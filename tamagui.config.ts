import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui } from 'tamagui'

const appConfig = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts:{}
})

export type AppConfig = typeof appConfig

export default appConfig