import "../styles/contact.css"

export const Contacto = () => {
    const intersectionObserver = new IntersectionObserver((entries)=>{
        if(entries[0].intersectionRatio <= 0) return;
        //Load animations here
        const contact1 = document.querySelector('.contact1');
        const contact2 = document.querySelector('.contact2');
        console.log({contact2})
        if(contact1.classList.contains("animate-fade-up")) return;
        contact1.classList.add("animate-fade-up");
        contact2.classList.add("animate-fade-up");
        contact2.classList.add("animate-delay-[500ms]");
    })
    window.onload = function(){
        const elem = document.querySelector('.contact1');
        intersectionObserver.observe(elem);
    }
    return (
    <div className="h-max rounded-xl m-1 drop-shadow-md p-3 w-dvw" id="contacto">
        <div className="flex flex-col lg:flex-row justify-center gap-2">
            <div className="lg:w-1/2 justify-center items-center flex-col contact1">
                <div>
                    <h2 className="text-2xl font-semibold justify-start">Ubicación</h2>
                </div>
                <div className="max-h-80 w-full rounded-xl overflow-hidden drop-shadow-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5168465159777!2d-84.06236101954758!3d9.899944314719248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e30730ae52eb%3A0xb8b846e37f889b4a!2sClinica%20Dental%20Dra.%20Carmiol!5e0!3m2!1sen!2scr!4v1703709255672!5m2!1sen!2scr" className="border-0 h-64" style={{width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="lg:w-1/2 flex-col items-center gap-2 contact2">
                <h2 className="text-2xl font-semibold">Horario</h2>
                <div className="basis-1/2 mb-2">
                    <div className="banner50up-bg overflow-hidden rounded-xl p-3 drop-shadow-md text-lg">
                        <p className="font-medium">Lunes-Sábado: 9:00am-7:00pm</p>
                    </div>
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold">
                        Contacto
                    </h2>
                    <div className="banner50up-bg overflow-hidden rounded-xl p-3 drop-shadow-md font-medium text-lg">
                        <p>2219-4610</p>
                        <p>8765-1876</p>
                        <a href="mailto:dra.carmiol@gmail.com" className="font-medium text-danube-800 hover:text-danube-800/75">dra.carmiol@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}