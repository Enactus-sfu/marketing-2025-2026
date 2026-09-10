import { DM_Sans, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Web fallback for Impact on platforms that do not ship it (Android, Linux).
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata = {
  metadataBase: new URL("https://www.enactussfu.ca"),
  title: {
    default: "Enactus SFU",
    template: "%s | Enactus SFU",
  },
  description:
    "Enactus SFU empowers students to create entrepreneurial projects that make a positive impact on the community. Join us to innovate and lead!",
  openGraph: {
    siteName: "Enactus SFU",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
