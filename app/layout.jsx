import "./globals.css";
import Navbar from "././components/Navbar";

export const metadata = {
  title: "FindIt",
  description: "Lost & Found Portal for Campus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
