import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";

export const IniciativasEstudiantiles = () => {
  useEffect(() => {
    document.title = `Programas universitarios - Iniciativas estudiantiles - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/iniciativas_estudiantiles.jpg" />
      <PageTitle>Iniciativas estudiantiles</PageTitle>
      <PageContent>
        <p className="py-4">
          El programa de Fomento y Desarrollo Estudiantil, dependiente de la
          Dirección de Relaciones Estudiantiles, trabaja enfocado en 6 líneas de
          acción enfocadas en el apoyo y acompañamiento del estudiantado en el
          proceso formativo en la Universidad, a través de la promoción de
          Iniciativas Estudiantiles y fortalecimiento de los liderazgos de la
          representación estudiantil. Ya sea a través de la gestión de recursos,
          espacios y/o apoyos en presentación de proyectos internos y externos.
        </p>

        <div className="py-4">
          <div className="py-2 border-b-2 text-xl">
            Las líneas de trabajo son:
          </div>
          <div className="pt-4 pl-4">
            <li>Iniciativas Estudiantiles</li>
            <li>
              Programa de Iniciativas Estudiantiles Académicas {"(PIE>A)"}
            </li>
            <li>Fondos Concursables</li>
            <li>Representación Estudiantil</li>
            <li>Jornada de Inserción Mechona (JIM)</li>
            <li>Sala de estar</li>
          </div>
        </div>

        <div className="py-4">
          <div className="py-2 border-b-2 text-xl">
            Listado de iniciativas estudiantiles:
          </div>
          <p>
            <br />
            <strong>Campus Casa Central Valparaíso</strong>
            <br />
          </p>
          <div className="pt-4 pl-4 pb-8">
            <li>Preuniversitario Solidario Santa María (PREUSM)</li>
            <li>Ecosansano</li>
            <li>AD+</li>
            <li>USM Games</li>
          </div>

          <p>
            <strong>Sede Viña del Mar</strong>
            <br />
          </p>
          <div className="pt-4 pb-8 pl-4">
            <li>Ecosansano JMC</li>
          </div>

          <p>
            <strong>Campus Santiago San Joaquín</strong>
            <br />
          </p>
          <div className="pt-4 pb-8 pl-4">
            <li>Ergón</li>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="mt-4 col-span-4 md:col-span-2 flex justify-center items-center">
            <img
              alt=""
              src="/piea.png"
            />
          </div>
          <div className="mt-4 col-span-4 md:col-span-2 flex justify-center items-center">
            <img
              alt=""
              src="/iniciativas_estudiantiles2.jpeg"
            />
          </div>
        </div>
      </PageContent>
    </>
  );
};

const CuadroMostrarInfo = (props) => {
  return (
    <div className="border-b-2 border-usm-blue w-80  h-14 place-self-center grid place-items-center text-center">
      {props.info}
    </div>
  );
};
