import React from "react";
import Emergency from "../assets/emergencia.png";
import General from "../assets/general.png";
import Restauradora from "../assets/restauradora.png";
import Estetica from "../assets/estetica.png";

export const Servicios = () => {
  return (
    <div className="bg-danube-200 py-24 sm:py-32 bg-lazyload">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Qué hacemos por <span className="text-danube-600">tus dientes</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800 anim">
            Somos una clinica privada dedicada a ofrecer atención odontológica
            de calidad en odontología estética, restauradora y general.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16" id="servicios">
            <div className="relative pl-16 bg-danube-400 rounded-tl-xl rounded-br-xl p-8 anim">
              <dt className="text-base font-semibold leading-7 text-gray-900 ml-5">
                <div className="absolute left-1 top-6 flex h-20 w-20 items-center justify-center rounded-lg">
                  <img src={Emergency} alt="" />
                </div>
                Atención de urgencia
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-700 ml-5">
                El dolor de muelas puede deberse a varios problemas. Un examen
                puede ayudar a determinarlo.
              </dd>
            </div>
            <div className="relative pl-16 anim">
              <dt className="text-base font-semibold leading-7 text-gray-900 ml-5">
                <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-lg bg-danube-600">
                  <img src={General} alt="" />
                </div>
                Cuidados dentales generales
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-700 ml-5">
                El dolor de muelas puede deberse a varios problemas. Un examen
                puede ayudar a determinarlo
              </dd>
            </div>
            <div className="relative pl-16 anim">
              <dt className="text-base font-semibold leading-7 text-gray-900 ml-5">
                <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-lg bg-danube-600">
                  <img src={Estetica} alt="" />
                </div>
                Odontología Restauradora
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-700 ml-5">
                Podemos restaurar su sonrisa, así como la capacidad de hablar y
                comer con prótesis avanzadas.
              </dd>
            </div>
            <div className="relative pl-16 anim">
              <dt className="text-base font-semibold leading-7 text-gray-900 ml-5">
                <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-lg bg-danube-600">
                  <img src={Restauradora} alt="" />
                </div>
                Odontología estética
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-700 ml-5">
                Una sonrisa bonita contribuye a mejorar el estado de ánimo y
                aumenta la autoestima. Nosotros podemos ayudarle a conseguirlo.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
