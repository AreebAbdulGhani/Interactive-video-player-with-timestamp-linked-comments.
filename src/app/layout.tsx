import "./globals.css";

export const metadata = {
  title: "Interactive Video Player",
  description: "A stunning video player with timestamp-linked comments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
