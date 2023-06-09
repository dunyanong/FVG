import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const SiGooglechat = dynamic(() => import('react-icons/si').then((module) => module.SiGooglechat), { ssr: false });
const SiYoutubemusic = dynamic(() => import('react-icons/si').then((module) => module.SiYoutubemusic), { ssr: false });
const GiVote = dynamic(() => import('react-icons/gi').then((module) => module.GiVote), { ssr: false });
const AiFillGithub = dynamic(() => import('react-icons/ai').then((module) => module.AiFillGithub), { ssr: false });

import LegendaryPlayers from '../public/legend-images/legends.jpg';
import Link from 'next/link';

export default function Home() {
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
      
      <div className='md:px-20 lg:px-20 pb-8 md:py-0 lg:py-0 h-auto'>
        <section className="flex flex-col items-start">
          <div className='md:px-5 lg:px-20 pt-20 pb-8 md:py-10 lg:py-10 h-auto'>
            <Image src={LegendaryPlayers} className='' alt='GOAT Image' priority={true}/>
            <div className="flex flex-col items-start gap-4 pt-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                The G.O.A.T Voting 
              </h1>
              <p className="text-slate-500 sm:text-xl">
                Who&#39;s the Greatest of All Time? Vote for your football legends now!
              </p>
            </div>
            <div className="flex gap-4 pt-6">
              <Link href="auth/Login" legacyBehavior>
                <a
                  className="inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100 bg-slate-900 text-white hover:bg-slate-700 h-11 px-8 rounded-md"              
                >
                  Vote Now
                </a>
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2  disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100 bg-transparent border border-slate-200 hover:bg-slate-100 h-11 px-8 rounded-md"
                href="https://github.com/dunyanong/FGV"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className='md:px-5 lg:px-20 pt-20 pb-8 md:py-10 lg:py-10 h-auto'>
            <div className="mx-auto flex flex-col items-start space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Features</h2>
              <p className="text-start pb-5 text-slate-500">Here are some key features you can expect: </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><GiVote /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Voting</h3>
                    <p className="text-sm text-gray-500">Allows users to vote for their favorite football players, allocating 2 points for the GOAT and 1 point for honorable mention.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><SiYoutubemusic /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Background music</h3>
                    <p className="text-sm text-gray-500">Enhances the user experience with enjoyable and immersive music/audio while browsing the platform.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><SiGooglechat /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Chat</h3>
                    <p className="text-sm text-gray-500">Enables real-time messaging and user interaction, fostering a sense of community for discussing football, sharing opinions, and engaging in voting-related conversations.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><AiFillGithub /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Open source</h3>
                    <p className="text-sm text-gray-500">Project&#39;s codebase is publicly accessible, promoting transparency, collaboration, and innovation by allowing others to access, modify, and distribute the code.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> 

    </div>
  )
}