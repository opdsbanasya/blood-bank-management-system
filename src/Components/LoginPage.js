import { Link } from "react-router-dom";

const Donor = () => {
    return (
        <div className="min-h-screen w-[80%] mx-auto py-10">
            <h2 className="text-2xl font-semibold">Donor</h2>
            <form className="flex flex-col w-1/2 px-20 mx-auto bg-zinc-200 pt-8 pb-10 gap-8 rounded-lg">
                <h3 className="w-fit mx-auto text-lg underline">Login</h3>
                <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="text" placeholder="Username" />
                <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="password" placeholder="Password" />
                <input type="submit" className="py-2 px-4 bg-red-600 rounded-md resize-none text-white w-fit mx-auto"/>
                <p className="text-sm">Do have not account? <Link to="/register" className="text-blue-900 underline">Sign up</Link></p>
            </form>
        </div>
    );
}

export default Donor;
