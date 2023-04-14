import Image from 'next/image';

// images
import Messi from '../public/legend-images/players/messi.png';
import CR7 from '../public/legend-images/players/CR7.png';
import Pele from '../public/legend-images/players/Pele.png';
import Maradona from '../public/legend-images/players/maradona.png';
import JohanCruyff from '../public/legend-images/players/cruyff.png';
import ZinedineZidane from '../public/legend-images/players/zidane.png';
import AlfredoDiStefano from '../public/legend-images/players/alfredo-di-stéfano.png';
import Garrincha from '../public/legend-images/players/garrincha.png';
import R9 from '../public/legend-images/players/R9.png';
import Ronaldinho from '../public/legend-images/players/ronaldinho.png';
import Platini from '../public/legend-images/players/platini.png'
import Beckenbauer from '../public/legend-images/players/beckenbauer.png';
import GeorgeBest from '../public/legend-images/players/george-best.png';
import Iniesta from '../public/legend-images/players/iniesta.png';
import Xavi from '../public/legend-images/players/xavi.png';
import Maldini from '../public/legend-images/players/maldini.png';
import GerdMuller from '../public/legend-images/players/gerd-muller.png';
import Baggio from '../public/legend-images/players/baggio.png';
import Yashin from '../public/legend-images/players/yashin.png';
import Ferenc from '../public/legend-images/players/ferenc-puskás.png'

import Head from "next/head";
import { auth, db } from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";


const VoteTime = () => {
  const [user, loading] = useAuthState(auth);  
  
  return (
    <div>
      <Head>
        <title>Goat Voting</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container grid items-center justify-center gap-6 pt-20 md:pt-10 md:pb-12 lg:pt-8 lg:pb-10">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">Legendary Footballers ⚽</h1>
          <p className="text-xl text-slate-600">Vote for your favourite players!</p>
        </div>
  
        <hr className="my-8 border-slate-200" />
  
        <form className="py-6 bg-white rounded-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Your GOAT 🐐</h2>
            <select name="goat" className="block w-full mt-1 rounded-lg border-gray-300 shadow-sm">
              <option value="" disabled selected>Select your GOAT</option>
              {playerData.map(player => (
                <option key={player.index} value={player.name}>{player.name} ({player.nationality})</option>
              ))}
            </select>
          </div>
  
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Your Honourable mention 🏆</h2>
            <select name="honorable-mention" className="block w-full mt-1 rounded-lg border-gray-black shadow-sm" >
              <option value="" disabled defaultValue>Select your Honourable mention 🥈</option>
              {playerData.map(player => (
                <option key={player.index} value={player.name}>{player.name} ({player.nationality})</option>
              ))}
            </select>
          </div>
  
          <button className="px-4 py-2 text-white bg-black rounded-lg hover:bg-slate-700">
            Vote
          </button>
        </form>
  
        <div className="grid gap-10 sm:grid-cols-2">
          {playerData.map((name, index) => (
            <PlayerCard key={index} name={name} />
          ))}
        </div>
      </div>
    </div>
  );  
}
 
export default VoteTime;

const PlayerCard = ({ name }) => (
  <div className="card">
    <Image src={name.photo} alt={name.name} />
    <h2 className="text-2xl font-extrabold">{name.name}</h2>
    <p className="text-slate-600">{name.nationality}</p>
  </div>
);

const playerData = [
    {
      "name": "Messi",
      "nationality": "Argentina 🇦🇷",
      "photo": Messi,
      "index": 1
    },
    {
      "name": "Cristiano Ronaldo",
      "nationality": "Portugal 🇵🇹",
      "photo": CR7,
      "index": 2
    },
    {
      "name": "Pele",
      "nationality": "Brazil 🇧🇷",
      "photo": Pele,
      "index": 3
    },
    {
      "name": "Maradona",
      "nationality": "Argentina 🇦🇷",
      "photo": Maradona,
      "index": 4
    },
    {
      "name": "Johan Cruyff",
      "nationality": "Netherlands 🇳🇱",
      "photo": JohanCruyff,
      "index": 5
    },
    {
      "name": "Zinedine Zidane",
      "nationality": "France 🇫🇷",
      "photo": ZinedineZidane,
      "index": 6
    },
    {
      "name": "Alfredo Di Stefano",
      "nationality": "Argentina 🇦🇷",
      "photo": AlfredoDiStefano,
      "index": 7
    },
    {
      "name": "Garrincha",
      "nationality": "Brazil 🇧🇷",
      "photo": Garrincha,
      "index": 8
    },
    {
      "name": "Ronaldo Nazario",
      "nationality": "Brazil 🇧🇷",
      "photo": R9,
      "index": 9
    },
    {
      "name": "Ronaldinho",
      "nationality": "Brazil 🇧🇷",
      "photo": Ronaldinho,
      "index": 10
    },
    {
      "name": "Michel Platini",
      "nationality": "France 🇫🇷",
      "photo": Platini,
      "index": 11
    },
    {
      "name": "Franz Beckenbauer",
      "nationality": "Germany 🇩🇪",
      "photo": Beckenbauer,
      "index": 12
    },
    {
      "name": "George Best",
      "nationality": "Northern Ireland 🇬🇧",
      "photo": GeorgeBest,
      "index": 13
    },
    {
      "name": "Andres Iniesta",
      "nationality": "Spain 🇪🇸",
      "photo": Iniesta,
      "index": 14
    },
    {
      "name": "Xavi Hernandez",
      "nationality": "Spain 🇪🇸",
      "photo": Xavi,
      "index": 15
    },
    {
      "name": "Paolo Maldini",
      "nationality": "Italy 🇮🇹",
      "photo": Maldini,
      "index": 16
    },  
    {
      "name": "Gerd Muller",
      "nationality": "Germany 🇩🇪",
      "photo": GerdMuller,
      "index": 17
    },
    {
      "name": "Roberto Baggio",
     "nationality": "Italy 🇮🇹",
      "photo": Baggio,
      "index": 18
    },
    {
      "name": "Lev Yashin",
      "nationality": "Russia 🇷🇺",
      "photo": Yashin,
      "index": 19
    },
    {
      "name": "Ferenc Puskás",
      "nationality": "Netherlands 🇳🇱",
      "photo": Ferenc,
      "index": 20
    }
];