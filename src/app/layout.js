import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Carlos DeJesus",
  description: "Multimedia artist reel and resume.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas font-sans text-white antialiased">
        <div className="relative min-h-screen">
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
