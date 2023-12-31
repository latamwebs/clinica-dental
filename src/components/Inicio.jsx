import '../styles/inicio.css'
import dental from "../assets/dental2.avif"
import dental3 from "../assets/dental3.avif"
import dental5 from "../assets/dental5.avif"
import dental7 from "../assets/dental7.avif"

export const Inicio = () => {
    return(
        <div className="bg-transparent h-4/5 drop-shadow-lg flex grow mx-1 mt-4 inicio-bg p-2">
            <div className="flex flex-col lg:flex-row w-full">
                <section className="my-4 h-48 sm:h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-2">
                    <h1 className="font-medium text-2xl md:text-3xl animate-fade">Más de <span className='text-danube-800/80 font-semibold'>15 años</span> de experiencia</h1>
                    <a href="https://wa.me/50687651876" className="text-white bg-danube-600 hover:bg-danube-900 hover:text-white px-3 py-2 rounded-md text-md font-medium animate-fade animate-delay-[1000ms]">Contáctanos <i className="fa-brands fa-whatsapp fa-xl"></i></a>
                </section>
                <section className="mt-4 lg:mt-0 h-max lg:h-full lg:w-1/2 flex items-center justify-center rounded-lg">
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="w-24 h-40 sm:h-56 sm:w-36 rounded-xl overflow-hidden flex self-end justify-self-end animate-fade-down">
                            <img src={dental} className="object-cover" />
                        </div>
                        <div className="w-46 h-24 sm:h-36 sm:w-56 rounded-xl sm:flex self-end overflow-hidden animate-fade-left">
                            <img src={dental3} className="object-cover" />
                        </div>
                        <div className="w-46 h-24 sm:h-36 sm:w-56 rounded-xl overflow-hidden animate-fade-right">
                            <img src={dental5} className="object-cover" />
                        </div>
                        <div className="w-24 h-40 sm:h-56 sm:w-36 rounded-xl flex overflow-hidden animate-fade-up">
                            <img src={dental7} className="object-cover" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}