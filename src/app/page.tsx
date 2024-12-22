// import Image from 'next/image';
import { Heart } from 'lucide-react';
// import Head from 'next/head';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <p className="text-4xl font-bold"> Huricane Pricelist</p>

        <div className="grid grid-cols-3  sm:grid-cols-3 sm:gap-8">
          <Heart /> <p className="pr-3">For มีนา</p> <Heart />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
