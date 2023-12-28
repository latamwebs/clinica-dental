import dental from "../assets/dental2.avif"
import dental3 from "../assets/dental3.avif"
import dental5 from "../assets/dental5.avif"
import dental7 from "../assets/dental7.avif"

export const Inicio = () => {
    return(
        <div className="bg-transparent h-4/5 rounded-lg drop-shadow-lg flex grow overflow-hidden mx-1 my-2">
            <div className="flex flex-col lg:flex-row w-full">
                <section className="relative h-60 sm:h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-danube-800/75 font-medium text-2xl md:text-3xl">Más de 15 años de experiencia</h1>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5168465159777!2d-84.06236101954758!3d9.899944314719248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e30730ae52eb%3A0xb8b846e37f889b4a!2sClinica%20Dental%20Dra.%20Carmiol!5e0!3m2!1sen!2scr!4v1703709255672!5m2!1sen!2scr" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    {/* <h1 className="text-white font-medium">Somos su clínica dental de confianza</h1> */}
                    {/* <h1 className="text-white font-medium">Trabajamos con las aseguradoras más importantes del país</h1> */}
                    <a href="#" className="text-white bg-danube-600 hover:bg-danube-900 hover:text-white px-3 py-2 rounded-md text-md font-medium gap-2">Contáctanos <i className="fa-brands fa-whatsapp fa-xl"></i></a>
                </section>
                <section className="relative h-max lg:h-full lg:w-1/2 flex items-center justify-center rounded-lg">
                    {/* <img src={dental} className="rounded-lg"/> */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="w-24 h-40 sm:h-56 sm:w-36 rounded-xl overflow-hidden flex self-end justify-self-end">
                            <img src={dental} className="object-cover" />
                        </div>
                        <div className="w-46 h-24 sm:h-36 sm:w-56 rounded-xl bg-danube-200 sm:flex self-end overflow-hidden">
                            <img src={dental3} className="object-cover" />
                        </div>
                        <div className="w-46 h-24 sm:h-36 sm:w-56 rounded-xl bg-danube-300 overflow-hidden">
                            <img src={dental5} className="object-cover" />
                        </div>
                        <div className="w-24 h-40 sm:h-56 sm:w-36 rounded-xl bg-danube-400 flex overflow-hidden">
                            <img src={dental7} className="object-cover" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}