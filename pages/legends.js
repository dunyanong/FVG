import Head from "next/head";
import { useState, useEffect } from 'react';
import { auth, db } from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { playerData } from '../data/data';
import Select from 'react-select';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  getDoc
} from "firebase/firestore";
import PlayerCard from '../components\/PlayerCard';
import Link from "next/link";
import { useRouter } from 'next/router';

const Legends = () => {
    const router = useRouter();
  
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
        <div className="grid items-center justify-center gap-6 pt-20 md:pt-10 md:pb-12 lg:pt-8 lg:pb-10">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">Legendary Footballers ⚽</h1>
            <p className="text-xl text-slate-600">Click the players for more info regading their team and individual info</p>
          </div>
  
          <hr className="py-8 border-slate-200" />
  
          <div className="grid gap-10 sm:grid-cols-2">
            {playerData.map((player) => (
              <Link key={player.legendId} href={{ pathname: `votingtime/${player.legendId}` }}>
                <PlayerCard key={player.legendId} player={player} />            
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}


export default Legends;