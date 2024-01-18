export const Aseguradoras = () => {
  return (
    <div className="bg-white py-6 sm:py-8" id="seguros">
      <div className="mx-auto max-w-10xl">
        <h2 className="text-center text-5xl font tracking font-semibold leading-10 text-gray-600">
          Contamos con los mejores seguros médicos
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-64 w-full object-contain lg:col-span-1 ml-8"
            src="/src/assets/3.png"
            alt="Transistor"
          />
          <img
            className="col-span-2 max-h-64 w-full object-contain lg:col-span-1"
            src="/src/assets/2.png"
            alt="Reform"
          />
          <img
            className="col-span-2 max-h-64 w-full object-contain lg:col-span-1"
            src="/src/assets/4.png"
            alt="Tuple"
          />
          <img
            className="col-span-2 max-h-64 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/src/assets/5.png"
            alt="SavvyCal"
          />
          <img
            className="col-span-2 col-start-2 max-h-64 w-full object-contain sm:col-start-auto lg:col-span-1 mx-3"
            src="/src/assets/1.png"
            alt="Statamic"
          />
        </div>
      </div>
    </div>
  );
};
