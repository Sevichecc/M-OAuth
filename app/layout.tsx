import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "M-OAuth",
  description:
    "Access token generator for Akkoma, Pleroma, Mastodon, Misskey APIs.",
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
          "grid min-h-screen place-content-center place-items-center bg-background px-2 font-sans antialiased md:px-5 md:pb-10 md:pt-5",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
