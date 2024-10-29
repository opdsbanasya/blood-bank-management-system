import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <header className="w-full h-[12vh] bg-red-600 flex items-center justify-start gap-12 px-10 text-white">
            <Link to="/" className="w-[10%] text-2xl font-semibold cursor-pointer">e-Blood</Link>
            <nav className="h-full w-10/12 flex items-center justify-between">
                <ul className=" h-full flex items-center justify-start gap-10">
                    <Link to="/services" className="text-lg">Services</Link>
                    <Link to="/about" className="text-lg">About us</Link>
                    <Link to="/contact" className="text-lg">Contact us</Link>
                </ul>
                <div className="flex items-center gap-10">
                    <div className="space-x-2">
                        <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-sm" type="text" placeholder="Enter to search" />
                        <button className="px-4 py-2 bg-white text-black rounded-lg font-[300] text-sm">Search</button>
                    </div>
                    <div>
                        <Link
                            to="/donorlogin"
                            className="text-lg relative cursor-pointer"
                            onClick={() => setShowLogin(!showLogin)}
                        >{/*showLogin ? "" : "sign in"*/} Sign in</Link>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
