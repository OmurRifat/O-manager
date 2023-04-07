import "@/styles/globals.css";
import Navber from "../../components/Navber/Navber";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <Navber />
      <Component {...pageProps} />
    </div>
  );
}
