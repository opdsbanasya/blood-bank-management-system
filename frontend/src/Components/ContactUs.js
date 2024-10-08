

const ContactUs = () => {
    return (
        <section className="w-full py-10 px-10">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <div className="py-10">
                <h2 className="text-center text-xl mb-5 underline">Get in touch</h2>
                <form className="w-[50%] mx-auto flex flex-col py-10 gap-5 px-10 bg-zinc-200 rounded-md shadow-lg">
                    <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="text" placeholder="Enter Name" />
                    <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="email" placeholder="Enter email" />
                    <input className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" type="number" placeholder="Enter contact number" />
                    <textarea className="px-4 p-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500" placeholder="Feedback" />
                    <input className="py-2 px-4 bg-red-600 rounded-md resize-none text-white w-fit mx-auto" type="submit" />
                </form>
            </div> 
        </section>

    );
}

export default ContactUs;
