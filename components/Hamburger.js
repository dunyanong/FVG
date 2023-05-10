import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

const audioFiles = ['/music/intro.wav', '/music/Dreamers.wav', '/music/WakaWaka.wav', '/music/Ozuna.wav','/music/OnTopOfTheWorld.wav', '/music/HayyaHayya.wav', '/music/Ramenez.wav', '/music/TheNights.wav', '/music/WeAreOneOleOla.wav', '/music/LaLaLa.wav','/music/WavingFlag.wav'];

export const MobileNav = ({ open, setOpen}) => {
  const [user, loading] = useAuthState(auth);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [audio, setAudio] = useState(null);
  
    useEffect(() => {
      setAudio(new Audio(audioFiles[audioIndex]));
    }, [audioIndex]);    
    
    const handleLinkClick = () => {
      setOpen(false);
    };
  
    return (
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
          open ? "-translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out filter z-50`}
      >
        <div className="flex flex-col justify-center items-center mt-28">
          <div className="py-4 hover:underline text-sm md:text-base font-semibold">
            <Link href="/" legacyBehavior>
              <a onClick={handleLinkClick}>Home</a>
            </Link>
          </div>
          <div className="py-4 hover:underline text-sm md:text-base font-semibold">
            <Link href="/chat" legacyBehavior>
              <a onClick={handleLinkClick}>Chat</a>
            </Link>
          </div>          
          <div className="py-4 hover:underline text-sm md:text-base font-semibold">
            <Link href="/ranking" legacyBehavior>
              <a onClick={handleLinkClick}>Ranking</a>
            </Link>
          </div>
  
          <div className="hover:underline text-sm py-4">
          {!user && (
              <div className="flex flex-col justify-center items-center">
                <button
                  className="text-black text-sm transition-colors duration-200 hover:text-slate-500 flex items-center gap-1"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                    <span className="text-lg">
                        {isPlaying ? <p>Pause</p> : <p>Play</p>}
                    </span>
                    
                    <span className="text-lg">
                        {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                    </span>
                </button>              
                <Link href="/auth/Login" legacyBehavior>
                  <a className="py-4 font-semibold">Join Now</a>
                </Link>
              </div>
            )}
            {user && (
              <div className="flex items-center gap-4">
                <button
                  className="text-black text-sm transition-colors duration-200 hover:text-slate-500 flex items-center gap-1"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                    <span className="text-sm">
                        {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                    </span>

                    <span className="text-sm">
                        {isPlaying ? <p>Pause</p> : <p>Play</p>}
                    </span>
                </button>
              </div>
            )}
          </div>
          <div className="py-4 hover:underline text-sm md:text-base font-semibold ">
            {user && (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" legacyBehavior>
                  <a onClick={handleLinkClick}>Your Profile</a>
                </Link>
              </div>
            )}
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
      </div>
    );
  };
  

export const Hamburger = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-11/12 flex justify-end items-center">
                <div className="group z-50 relative w-6 h-6 cursor-pointer m-0 flex-col justify-between items-center flex" onClick={() => setOpen(!open)}>
                    <span className={`h-1 w-full bg-black  rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black  rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black  rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </div>
    );
}