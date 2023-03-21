import "./globals.css";

export const metadata = {
  title: "Next.js Truffle Box"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
