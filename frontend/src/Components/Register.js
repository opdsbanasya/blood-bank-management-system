import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen w-[80%] mx-auto py-10">
            <h2 className="text-2xl font-semibold">Donor</h2>
            <form className="flex flex-col w-1/2 px-20 mx-auto bg-zinc-200 pt-7 pb-10 gap-5 rounded-lg">
                <h3 className="w-fit mx-auto text-lg underline">Register</h3>
                <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="text" placeholder="Name" />
                <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="email" placeholder="Email" />
                <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="number" placeholder="Phone number" />
                <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="password" placeholder="Password" />
                <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="password" placeholder="Confirm Password" />
                <input type="submit" className="py-2 px-4 bg-red-600 rounded-md resize-none text-white w-fit mx-auto"/>
                <p className="text-sm">Already have an account? <Link to="/donorlogin" className="text-blue-900 underline">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;
