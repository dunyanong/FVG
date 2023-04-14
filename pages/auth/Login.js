import { AiOutlineGoogle } from "react-icons/ai";
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Head from "next/head";

const Login = () => {
  const route = useRouter();
  //Sign in with google
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const displayErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/rules");
  
      toast.success("Signed in 🤙 ", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        console.log("Popup request cancelled by user");
      }
      else {
        console.error(error.message);
      }
    }    
  };

  useEffect(() => {
    if (!route || !route.push) return;
    
    if (user) {
      route.push("/rules");
    }
  }, [user]);

  return (
    <div className="w-full max-w-3xl mx-auto">
    <Head>
      <title>GoatVote</title>
    </Head>
    <div className="mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2xl font-semibold tracking-tight">Welcome!</h2>
      <div className="text-sm text-slate-500">
        <h3 className="py-4">Enter your email to sign in to your account</h3>
        <button
          onClick={GoogleLogin}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100 bg-slate-900 text-white hover:bg-slate-700 h-10 py-2 px-4"
        >
          <AiOutlineGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
    </div>
  );
}
 
export default Login;