import dental from "../assets/dental2.avif"

export const Inicio = () => {
    return(
        <div className="bg-danube-50 rounded-lg drop-shadow-lg flex grow overflow-hidden mx-1 my-2">
            <div className="flex flex-col md:flex-row w-full">
                <section className="h-1/2 md:h-full md:w-1/2 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-danube-800/75 font-medium text-2xl">Más de 15 años de experiencia</h1>
                    {/* <h1 className="text-white font-medium">Somos su clínica dental de confianza</h1> */}
                    {/* <h1 className="text-white font-medium">Trabajamos con las aseguradoras más importantes del país</h1> */}
                    <a href="#" className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ver Servicios</a>
                </section>
                <section className="h-1/2 md:h-full md:w-1/2 flex items-center justify-center overflow-hidden">
                    <img src={dental} className="object-cover"/>
                </section>
            </div>
        </div>
    )
}