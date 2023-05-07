import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main
          style={{
            position: "relative",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
