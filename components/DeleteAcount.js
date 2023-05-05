import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState } from "react";

const Danger = () => {
  const router = useRouter();
  const [showConfirmSignout, setShowConfirmSignout] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleSignoutAccount = async () => {
    try {
      await auth.signOut();
      toast.success("Signed out 🤘", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      router.push("/");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };  

  const handleTerminateAccount = async () => {
    try {
      await auth.currentUser.delete();
      toast.success("Account terminated 🚀", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      router.push("/");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="pt-0">
      {showConfirmSignout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white rounded-lg p-4 z-50 mx-4 md:mx-0">
            <p className="mb-4">Are you sure you want to signout</p>
            <div className="flex justify-end">
              <button className="text-white bg-red-500 py-2 px-4 rounded-lg mr-2" onClick={handleSignoutAccount}>
                Signout
              </button>
              <button className="text-gray-600 bg-gray-300 py-2 px-4 rounded-lg" onClick={() => setShowConfirmSignout(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>        
      )}
      {showConfirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white rounded-lg p-4 z-50 mx-4 md:mx-0">
            <p className="mb-4">Are you sure you want to terminate your account? This action is irreversible.</p>
            <div className="flex justify-end">
              <button className="text-white bg-red-500 py-2 px-4 rounded-lg mr-2" onClick={handleTerminateAccount}>
                Yes, terminate my account
              </button>
              <button className="text-gray-600 bg-gray-300 py-2 px-4 rounded-lg" onClick={() => setShowConfirmDelete(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}      

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm my-4">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Sign Out Account</h3>
          <p className="text-sm text-muted-foreground">Disconnect from your account and return to the login screen.</p>
        </div>
        <div className="flex items-center p-6 pt-0">
          <button className="inline-flex text-white items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-black text-primary-foreground h-10 py-2 px-4" onClick={() => setShowConfirmSignout(true)}>
            Sign out
          </button>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm my-4">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Delete Account</h3>
          <p className="text-sm text-muted-foreground">Permanently remove your Personal Account and all of its contents from the GoatVote platform. This action is not reversible, so please continue with caution.</p>
        </div>
        <div className="flex items-center p-6 pt-0">
          <button className="inline-flex text-white items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-black text-primary-foreground h-10 py-2 px-4" onClick={() => setShowConfirmDelete(true)}>
            Delete now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Danger;