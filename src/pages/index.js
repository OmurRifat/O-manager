import Head from "next/head";
import { Inter } from "next/font/google";
import Review from "../../components/Review/Review";
import Blog from "../../components/Blog/Blog";
import About from "../../components/About/About";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import HeroSection from "../../components/HeroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        {/* this is comment */ }
        <title>Organization Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <About />
      <Review />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
