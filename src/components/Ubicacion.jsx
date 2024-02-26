export const Ubicacion = () => {
  return (
    <div className="bg-danube-900">
      <div className="mx-auto max-w-7xl lg:py-32 sm:py-2 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-danube-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 xl:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true">
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:py-12 lg:text-left md:py-8 sm:py-5 anim">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Puedes encontrar nuestra ubicación
              <br />
              en Google Maps
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-balance">
              Confirma con nuestro personal el horario de atención al
              siguiente numero de contacto:
            </p>
              <a href="https://wa.me/50687651876" className="mt-10 flex items-center justify-center gap-x-3 lg:justify-start">
                <i className="fa-brands fa-whatsapp text-5xl  rounded-full py-2 px-0  text-white hover:animate-bounce "></i>
                <p className="text-2xl font-bold text-white">
                  8765-1876
                </p>
              </a>
          </div>
          <div className="relative mt-10 mb-10 lg:mt-10 w-full h-80 anim">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5168465159777!2d-84.06236101954758!3d9.899944314719248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e30730ae52eb%3A0xb8b846e37f889b4a!2sClinica%20Dental%20Dra.%20Carmiol!5e0!3m2!1sen!2scr!4v1703709255672!5m2!1sen!2scr"
              className="h-full w-full rounded-xl"
              title="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
