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
      <PageBanner src="http://www.vra.usm.cl/wp-content/uploads/2016/07/USM-bienvenida-2016-18-1600x525.jpg" />
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
              src="https://www.rree.usm.cl/wp-content/uploads/2016/02/21082014-_DSC2813.jpg"
            />
          </div>
          <div className="mt-4 col-span-4 md:col-span-2 flex justify-center items-center">
            <img
              alt=""
              src="https://www.rree.usm.cl/wp-content/uploads/2016/02/INICIATIVA.jpg"
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
