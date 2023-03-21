export const metadata = {
  title: "Next.js Truffle box"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
