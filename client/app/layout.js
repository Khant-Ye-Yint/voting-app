import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Votign App',
  description: 'Onling Voting App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center items-center">
          <div className="container flex flex-col justify-between items-center min-h-screen">
            <Navbar />
            <div className="w-full flex-1 my-5">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
