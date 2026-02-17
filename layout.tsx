import "./globals.css";

export const metadata = {
  title: "VideoWave",
  description: "Plataforma de vídeos moderna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}