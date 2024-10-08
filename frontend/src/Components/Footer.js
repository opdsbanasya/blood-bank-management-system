import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <section className="w-[90%] p-10 mx-auto my-10 rounded-xl bg-red-600 mb-2 flex items-center justify-between text-white">
            <div className="">
                <h1 className="text-2xl  font-semibold">e-Blood</h1>
                <p className="">22, Jai Tower <br /> Jagatpura, Jaipur <br /> Rajasthan - 302017</p>
            </div>
            <div>
                <img className="h-[40vh]" src="https://img.icons8.com/?size=1600&id=115622&format=png&color=000000" />
            </div>
            <div>
                <h2 className="w-[20%] text-2xl text-center font-semibold mb-2">Contact</h2>
                <h3 text-xl>+91 96926 34963</h3>
                <h3 text-xl>help@e.blood</h3>
                <div className="flex gap-5 mt-3 text-xl">
                    <FaFacebook className=" cursor-pointer text-2xl"/>
                    <FaInstagram className=" cursor-pointer text-2xl"/>
                    <FaXTwitter className=" cursor-pointer text-2xl"/>
                    <FaYoutube className=" cursor-pointer text-2xl"/>
                </div>
            </div>
        </section>
    );
}

export default Footer;
