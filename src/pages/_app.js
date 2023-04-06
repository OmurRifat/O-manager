import "@/styles/globals.css";
import Navber from "../../components/Navber/Navber";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navber />
      <Component {...pageProps} />
    </div>
  );
}
