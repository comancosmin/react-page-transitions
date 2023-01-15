import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="height-width">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
