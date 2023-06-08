import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata = {
  title: "M-OAuth",
  description:
    "Access token generator for Akkoma, Pleroma, Mastodon, Misskey APIs.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16/png',
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: 'M-OAuth',
    description: 'Access token generator for Akkoma, Pleroma, Mastodon, Misskey APIs.',
    url: 'https://moauth.seviche.cc',
    siteName: 'M-OAuth',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "grid min-h-screen place-content-center place-items-center  bg-background px-2 font-sans antialiased md:px-5 md:pb-10 md:pt-5",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
