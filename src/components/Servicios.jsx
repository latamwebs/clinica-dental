import React from "react";
import clean from "../assets/clean.svg";
import muelita from "../assets/muelita.svg";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const Servicios = () => {
  return (
    <div className="bg-danube-300 bg-lazyload">
      <h2 className="text-center text-5xl font-bold mt-6 pt-8 pb-4">
        Qué hacemos <span className="text-danube-800">por tus dientes</span>
      </h2>
      <p className="text-center text-2xl font-medium text-blue-gray-900">
        Somos una clinica privada dedicada a ofrecer una atención dental de
        calidad en odontología estética, restauradora y general.
      </p>

      <Card className="mt-6 w-96">
        <CardBody>
          <img src={clean} alt="clean" className="mb-4 h-1/2 w-1/5"></img>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Cuidados dentales generales
          </Typography>
          <Typography>
            El dolor de muelas puede deberse a varios problemas. Un examen puede
            ayudar a determinarlo.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};
