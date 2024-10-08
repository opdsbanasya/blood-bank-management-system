import { SERVICES_DATA } from "../mocks/constantData";


const Services = () =>{
    return (
        <section className="w-[70%] min-h-screen mx-auto py-10 px-5">
            <h2 className="text-3xl">Our best services</h2>
            {SERVICES_DATA.map(service => {
                return <article key={service.id} className={`py-8 flex items-center gap-10 ${service.reverse == true && "flex-row-reverse"}`}>
                    <div className=" w-1/2 overflow-hidden">
                        <img src={service.img} alt={service.name} className="w-full object-cover hover:scale-105 transition-all"/>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-8xl font-bold text-zinc-200">0{service.id}</h3>
                        <h3 className="text-4xl font-semibold cursor-pointer hover:text-blue-800">{service.name}</h3>
                        <p className="tracking-wider">{service.description}</p>
                    </div>
                </article>
            })}
            
        </section>
    )
}

export default Services;