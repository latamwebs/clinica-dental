"use client";

export const Contacto = () => {
  return (
    <div className="relative isolate overflow-hidden bg-danube-50 py-8 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg anim">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Suscribete a nuestro boletín
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-900">
              Recibe consejos expertos para el cuidado dental y entérate primero
              de nuestras promociones y descuentos especiales
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-danube-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 anim">
            <div className="flex flex-col">
              <a
                href="https://wa.me/50687651876"
                target="_blank"
                className="lg:items-center lg:text-center sm:items-start sm:text-start">
                <i className="fa-brands fa-whatsapp text-5xl text-green-800 hover:text-green-400 animate-bounce"></i>
              </a>
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
              <dt className="mt-4 font-semibold text-gray-900 text-xl">
                Contactanos por WhatsApp
              </dt>
              <dd className="mt-2 leading-7 text-gray-900">
                Nuestros médicos están listos para atenderle, contáctanos y
                solicitar una consulta!
              </dd>
            </div>
            <div className="flex flex-col">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="lg:items-center lg:text-center sm:items-start sm:text-start">
                <i className="fa-brands fa-instagram text-5xl text-pink-800 hover:text-pink-400 animate-bounce"></i>
              </a>
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
              <dt className="mt-4 font-semibold text-gray-900 text-xl">
                Déjanos un mensaje en Instagram
              </dt>
              <dd className="mt-2 leading-7 text-gray-900">
                Subimos consejos, actualizaciones y promociones,{" "}
                <span className="font-bold text-danube-600">
                  tu salud es nuestra{" "}
                  <span className="italic text-danube-900">Prioridad!</span>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};
