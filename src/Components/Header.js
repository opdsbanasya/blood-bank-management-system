import {useState} from "react";

const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <header className="w-full h-[12vh] bg-red-600 flex items-center justify-start gap-12 px-10 text-white">
            <h1 className="w-[10%] text-2xl font-semibold">e-Blood</h1>
            <nav className="h-full w-10/12 flex items-center justify-between">
                <ul className=" h-full flex items-center justify-start gap-10">
                    <li className="text-lg">Donation Camp</li>
                    <li className="text-lg">About us</li>
                    <li className="text-lg">Contact us</li>
                </ul>
                <div className="flex items-center gap-10">
                    <div className="space-x-2">
                        <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-sm" type="text" placeholder="Enter to search" />
                        <button className="px-4 py-2 bg-white text-black rounded-lg font-[300] text-sm">Search</button>
                    </div>
                    <div>
                        <h4 className="text-lg relative cursor-pointer" 
                        onClick={()=> setShowLogin(!showLogin)}
                        >Login</h4>
                        <div className={`mt-4 absolute z-10 bg-white text-black overflow-hidden rounded-md ${showLogin === true ? "block" : "hidden"} `}>
                            <h4 className="hover:bg-zinc-100 px-4 py-2 cursor-pointer">Donor</h4>
                            <h4 className="hover:bg-zinc-100 px-4 py-2 cursor-pointer">Patient</h4>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
