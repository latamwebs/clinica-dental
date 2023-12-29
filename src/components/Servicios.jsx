import React from "react";
import clean from "../assets/clean.svg";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const Servicios = () => {
  return (
    <div className="bg-danube-300">
      <h2>Qué hacemos por tus dientes</h2>
      <p>
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
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/1999/xlink"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4">
                {/* SVG path */}
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};
