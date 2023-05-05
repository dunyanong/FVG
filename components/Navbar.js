import { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

const audioFiles = ['/music/LaLaLa.wav', '/music/Dreamers.wav', '/music/WakaWaka.wav', '/music/Ozuna.wav','/music/OnTopOfTheWorld.wav', '/music/HayyaHayya.wav', '/music/Ramenez.wav', '/music/TheNights.wav', '/music/WeAreOneOleOla.wav', '/music/WavingFlag.wav'];

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(audioFiles[audioIndex]));
  }, [audioIndex]);

  return (
    <nav className="fixed bg-white py-2 px-10 md:px-20 w-full mx-auto z-50 border-b-2 border-gray-200 font-semibold">
      <div className="items-center flex justify-between gap-10 py-2">
        <div className="text-sm md:text-base font-semibold hover:cursor">
          <Link href="/" legacyBehavior>
            <a className="text-black font-mono transition-colors duration-200 hover:text-slate-500">GoatVote</a>
          </Link>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="text-sm">
            <Link href="/ranking" legacyBehavior>
              <a className="text-black transition-colors duration-200 hover:text-slate-500">Ranking</a>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            {!user && (
              <div className="flex items-center gap-6">
                <button
                  className="text-black text-sm transition-colors duration-200 hover:text-slate-500 flex items-center gap-1"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  music<span className="text-lg">
                    {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                  </span>
                </button>              
                <Link href="/auth/Login" legacyBehavior>
                  <a className="text-black text-sm transition-colors duration-200 hover:text-slate-500">Join Now</a>
                </Link>
              </div>
            )}
            {user && (
              <div className="flex items-center gap-6">
                <button
                  className="text-black text-sm transition-colors duration-200 hover:text-slate-500 flex items-center gap-1"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  music<span className="text-lg">
                    {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                  </span>
                </button>
                <Link href="/dashboard">
                  <img className="w-8 h-8 rounded-full cursor-pointer" src={user.photoURL} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {isPlaying && (
        <div className="fixed bottom-0 left-0 right-0 p-2 bg-white flex justify-center">
          <p className="text-sm font-semibold text-center">Song: {audioFiles[audioIndex].replace(/^\/music\/|\.wav$/g, '')}</p>
          <audio
            autoPlay
            src={audioFiles[audioIndex]}
            onEnded={() => {
              if (audioIndex === audioFiles.length - 1) {
                setAudioIndex(0);
              } else {
                setAudioIndex(audioIndex + 1);
              }
            }}
          />         
        </div>
      )}
    </nav>
  );  
};

export default Navbar;