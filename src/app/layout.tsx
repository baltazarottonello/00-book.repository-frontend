import CommonHead from "./components/CommonHead";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CommonHead />
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
