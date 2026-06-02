import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Aqar Hub 360",
    description: "Real Estate Platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>

                <Navbar />

                {children}

                <Footer />

            </body>
        </html>
    );
}