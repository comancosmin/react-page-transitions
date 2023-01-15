import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Page Transitions</title>
        <meta name="description" content="React Page Transitions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="my-60 p-1">
          <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
            First Page
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2022</h2>
          </div>
          <div>
            <h3>This is some content 1.</h3>
            <h3>This is some content 2.</h3>
            <h3>This is some content 3.</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
