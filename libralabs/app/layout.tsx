import './globals.css'

export const metadata = {
  title: 'LibraLabs',
  description: 'Your Digital Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
