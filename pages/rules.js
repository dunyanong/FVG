import Head from 'next/head'
import { FaCheck } from 'react-icons/fa';

import GOAT from '../public/legend-images/goat.png';
import Image from 'next/image';
import Link from 'next/link';

const Rules = () => {
    return (
      <div>
        <Head>
          <title>FVG</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
    
        <div className="container grid items-center justify-center gap-6 pt-20 md:pt-10 md:pb-12 lg:pt-3 lg:pb-10">

          <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
            <Image src={GOAT} width={250} height={150} alt='goat image'/>
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
              Voting Time!
            </h1>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">How does it work? It is simple!</h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                <li className="flex items-center">
                  <FaCheck className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" />
                  Each user can vote for 1 GOAT and 1 honorable mention.
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" />
                  The GOAT vote counts as 2 points.
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" />
                  The 1 honorable mention vote counts as 1 point.
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" />
                  Once a user has cast their votes, they cannot vote again.
                </li>              
              </ul>
              <div className="flex gap-4 pt-10">
                <Link href="/votingtime" legacyBehavior>
                <a
                  className="inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100 bg-slate-900 text-white hover:bg-slate-700 h-11 px-8 rounded-md"                  
                >
                  Start!
                </a>
                </Link>
              </div>              
            </div>            
          </div>

        </div>
  
      </div>
    );
}
 
export default Rules;