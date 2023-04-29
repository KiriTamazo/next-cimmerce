import Navbar from "./components/Navbar/Navbar";
import ProgressBar from "./components/Navbar/ProgressBar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
