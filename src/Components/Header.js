
const Navbar = () => {
    return (
        <header className="w-full h-[12vh] bg-red-600 flex items-center justify-start gap-12 px-10 text-white">
            <h1 className="w-[10%] text-2xl font-bold">e-Blood</h1>
            <nav className="h-full w-10/12 flex items-center justify-between">
                <ul className=" h-full flex items-center justify-start gap-10">
                    <li className="text-lg font-semibold">Donation Camp</li>
                    <li className="text-lg font-semibold">About us</li>
                    <li className="text-lg font-semibold">Contact us</li>
                </ul>
                <div className="flex items-center gap-10">
                    <div className="space-x-2">
                        <input className="px-2 py-1 text-black outline-none rounded-lg" type="text" placeholder="Enter to search" />
                        <button className="px-2 py-1 bg-white text-black rounded-lg">Search</button>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Login</h4>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
