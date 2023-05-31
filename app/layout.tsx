import './globals.css'
import { Inter } from 'next/font/google'
import { NextTamaguiProvider } from './register'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ma-OAuth',
  description: 'Generated Access Token for Akkoma / Pleroma / Mastodon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  )
}
