import { ReactNode } from "react";

export const metadata = {
  title: "Backyard Botanical",
  description: "Discover Florida native plants and butterflies.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/butterflies">Butterflies</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
