import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="fixed bg-white py-2 px-10 md:px-20 w-full mx-auto z-50 border-b-2 border-gray-200 font-semibold">
      <div className="items-center flex justify-between gap-10 py-2">

        <div className="text-sm md:text-base font-semibold hover:cursor">       
          <Link href="/" legacyBehavior>       
            <a className="text-black font-mono transition-colors duration-200 hover:text-slate-500">GoatVote</a>        
          </Link>      
        </div>

        <div className="flex gap-4 justify-center items-center">
        
          <div className="text-sm md:text-base">
            <Link href="/ranking" legacyBehavior>
              <a className="text-black transition-colors duration-200 hover:text-slate-500">Ranking</a>
            </Link>
          </div>

          <div className="flex items-center gap-10">
            {!user && (
              <Link href={"/auth/Login"} legacyBehavior>
                <a className="text-black transition-colors duration-200 hover:text-slate-500">
                  Join Now
                </a>
              </Link>
            )}
            {user && (
              <div className="flex items-center gap-6">
                <Link href="/rules" legacyBehavior>
                  <a className="text-black transition-colors duration-200 hover:text-slate-500">
                    Vote
                  </a>
                </Link>
                <Link href="/dashboard">
                  <img
                    className="w-8 h-8 rounded-full cursor-pointer"
                    src={user.photoURL}
                  />
                </Link>
              </div>
            )}
          </div>  

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;