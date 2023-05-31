'use client'
import { useServerInsertedHTML } from 'next/navigation';
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'
import '@tamagui/core/reset.css'

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('../public/tamagui.css')
}

export function NextTamaguiProvider({ children }: {
  children: React.ReactNode;
}) {
  useServerInsertedHTML(() => {
    // this first time this runs you'll get the full CSS including all themes
    // after that, it will only return CSS generated since the last call
    return <>{config.getNewCSS()}</>
  })

  return <TamaguiProvider config={config}>{children}</TamaguiProvider>
}