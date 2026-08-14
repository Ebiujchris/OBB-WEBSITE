import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Obudhingiya Bwa Bwamba - Cultural Heritage & Languages",
  description: "Preserving the rich cultural heritage, languages, and traditions of the Bwamba people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        {/* African kente-inspired pattern strip */}
        <div style={{ width: '100%', lineHeight: 0, overflow: 'hidden' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="18"
            style={{ display: 'block' }}
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="kente" x="0" y="0" width="48" height="18" patternUnits="userSpaceOnUse">
                {/* base black */}
                <rect width="48" height="18" fill="#111111" />

                {/* red band */}
                <rect x="0"  y="0" width="10" height="18" fill="#D8232A" />
                {/* yellow band */}
                <rect x="10" y="0" width="10" height="18" fill="#FCD116" />
                {/* green band */}
                <rect x="20" y="0" width="10" height="18" fill="#1F4D3A" />
                {/* black gap */}
                <rect x="30" y="0" width="4"  height="18" fill="#111111" />
                {/* red thin */}
                <rect x="34" y="0" width="3"  height="18" fill="#D8232A" />
                {/* black gap */}
                <rect x="37" y="0" width="2"  height="18" fill="#111111" />
                {/* yellow thin */}
                <rect x="39" y="0" width="3"  height="18" fill="#FCD116" />
                {/* black gap */}
                <rect x="42" y="0" width="2"  height="18" fill="#111111" />
                {/* green thin */}
                <rect x="44" y="0" width="4"  height="18" fill="#1F4D3A" />

                {/* horizontal cross lines for weave effect */}
                <rect x="0"  y="6"  width="48" height="2" fill="rgba(0,0,0,0.25)" />
                <rect x="0"  y="10" width="48" height="2" fill="rgba(255,255,255,0.08)" />

                {/* kente diamond/notch marks */}
                <polygon points="5,0 10,9 5,18 0,9"   fill="rgba(0,0,0,0.2)" />
                <polygon points="25,0 30,9 25,18 20,9" fill="rgba(0,0,0,0.2)" />

                {/* small gold accent squares */}
                <rect x="31" y="7" width="2" height="4" fill="#FCD116" />
                <rect x="43" y="7" width="2" height="4" fill="#D8232A" />
              </pattern>
            </defs>
            <rect width="100%" height="18" fill="url(#kente)" />
          </svg>
        </div>

        {children}

        {/* African kente pattern strip — above footer */}
        <div style={{ width: '100%', lineHeight: 0, overflow: 'hidden' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="18" style={{ display: 'block' }} preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="kente2" x="0" y="0" width="48" height="18" patternUnits="userSpaceOnUse">
                <rect width="48" height="18" fill="#111111" />
                <rect x="0"  y="0" width="10" height="18" fill="#D8232A" />
                <rect x="10" y="0" width="10" height="18" fill="#FCD116" />
                <rect x="20" y="0" width="10" height="18" fill="#1F4D3A" />
                <rect x="30" y="0" width="4"  height="18" fill="#111111" />
                <rect x="34" y="0" width="3"  height="18" fill="#D8232A" />
                <rect x="37" y="0" width="2"  height="18" fill="#111111" />
                <rect x="39" y="0" width="3"  height="18" fill="#FCD116" />
                <rect x="42" y="0" width="2"  height="18" fill="#111111" />
                <rect x="44" y="0" width="4"  height="18" fill="#1F4D3A" />
                <rect x="0"  y="6"  width="48" height="2" fill="rgba(0,0,0,0.25)" />
                <rect x="0"  y="10" width="48" height="2" fill="rgba(255,255,255,0.08)" />
                <polygon points="5,0 10,9 5,18 0,9"   fill="rgba(0,0,0,0.2)" />
                <polygon points="25,0 30,9 25,18 20,9" fill="rgba(0,0,0,0.2)" />
                <rect x="31" y="7" width="2" height="4" fill="#FCD116" />
                <rect x="43" y="7" width="2" height="4" fill="#D8232A" />
              </pattern>
            </defs>
            <rect width="100%" height="18" fill="url(#kente2)" />
          </svg>
        </div>

        <Footer />
      </body>
    </html>
  );
}
