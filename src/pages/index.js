import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Review from "../../components/Review/Review";
import Blog from "../../components/Blog/Blog";
import About from "../../components/About/About";
import Footer from "../../components/Footer";
import Navber from "../../components/Navber/Navber";
import Newsletter from "../../components/Newsletter/Newsletter";





const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
      <title>Organization Manager</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navber></Navber>
      <About />
      <Review />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
