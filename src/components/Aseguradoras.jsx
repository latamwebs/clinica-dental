import Asprose from "../assets/asprose.png";
import BMI from "../assets/bmi.png";
import Pan from "../assets/pan.png";
import Bluec from "../assets/bluec.png";
import Mafre from "../assets/mafre.png";

export const Aseguradoras = () => {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-10xl">
        <h2 className="text-center text-5xl font tracking font-semibold leading-10 text-gray-600">
          Trabajamos con los mejores seguros médicos
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-64 w-full object-contain lg:col-span-1 ml-8 anim"
            src={Pan}
            alt="Transistor"
          />
          <img
            className="col-span-2 max-h-64 w-full object-contain lg:col-span-1 anim"
            src={Asprose}
            alt="Reform"
          />
          <img
            className="col-span-2 max-h-64 w-full object-contain lg:col-span-1 anim"
            src={Mafre}
            alt="Tuple"
          />
          <img
            className="col-span-2 max-h-64 w-full object-contain sm:col-start-2 lg:col-span-1 anim"
            src={Bluec}
            alt="SavvyCal"
          />
          <img
            className="col-span-2 col-start-2 max-h-64 w-full object-contain sm:col-start-auto lg:col-span-1 mx-3 anim"
            src={BMI}
            alt="Statamic"
          />
        </div>
      </div>
    </div>
  );
};
