import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ["100", "300", "400", "500", "700", "900"]
})

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} font-roboto`}>
      <Component {...pageProps} />
    </main>
  );
}
