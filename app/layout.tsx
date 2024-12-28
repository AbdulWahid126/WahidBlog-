import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Wahid Blog",
  description: "A dynamic blog created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-black via-[#14213d] to-black">
        <header className="bg-white bg-opacity-10 backdrop-blur-md shadow">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-purple-200 transition-colors"
            >
              WahidBlog
            </Link>
          </nav>
        </header>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
