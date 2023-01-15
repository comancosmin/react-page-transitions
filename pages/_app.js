import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="py-24 px-12 lg:px-24 font-latoBold">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
