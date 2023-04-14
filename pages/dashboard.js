import Head from "next/head";
import DeleteAccount from "../components/DeleteAcount";

const Dashboard = () => {
    return (
        <div className="md:px-5 md:py-30 w-full max-w-2xl mx-auto pt-20">
            <Head>
                <title>GoatVote</title>
            </Head>
            <h1 className="text-start font-semibold text-5xl mb-10 md:mb-20 text-black">Setting</h1>
            <DeleteAccount />
        </div>
    );
}
 
export default Dashboard;