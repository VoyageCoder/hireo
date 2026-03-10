import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hireo — Melbourne\'s Trades Workforce Engine',
  description: 'Hireo connects Melbourne\'s construction and trades businesses with qualified, job-ready workers. Fully screened, certified, and ready on day one. We also handle TAFE training and certifications.',
  keywords: 'trades workforce Melbourne, construction workers Melbourne, hire tradies Victoria, White Card training Melbourne, TAFE partnerships, tradie recruitment Melbourne',
  authors: [{ name: 'Hireo Pty Ltd' }],
  metadataBase: new URL('https://hireo.com.au'),
  openGraph: {
    title: 'Hireo — Melbourne\'s Trades Workforce Engine',
    description: 'We find, train, and certify the workers your trades business needs. Melbourne-based. Built for employers.',
    url: 'https://hireo.com.au',
    siteName: 'Hireo',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hireo — Melbourne\'s Trades Workforce Engine',
    description: 'We find, train, and certify the workers your trades business needs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Hireo',
              description: "Melbourne's trades workforce engine — workforce placement, training, and certification for construction and trades businesses.",
              url: 'https://hireo.com.au',
              email: 'hello@hireo.com.au',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Melbourne',
                addressRegion: 'Victoria',
                addressCountry: 'AU',
              },
              areaServed: 'Melbourne, Victoria, Australia',
              serviceType: ['Workforce Placement', 'Trades Training', 'Certification Coordination'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
