import { useEffect } from "react";
import { PageContent } from "../../components/principales/PageContent";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";

export const PrimerosAuxilios = () => {
  useEffect(() => {
    document.title = `Servicios médicos - Atención de primeros auxilios - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="https://noticias.usm.cl/wp-content//uploads/2019/09/Sede-Vin%CC%83a-del-Mar-1.jpg" />
      <PageTitle>Servicios médicos</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">
          Atención de primeros auxilios
        </h1>
        <p className="text-justify py-4">
          Atención de primera demanda. Contamos con dos TENS que están presentes
          de 8:30 a 20:30 horas, en horario continuado, atentos frente a
          cualquier emergencia. <br />
          <br />
          Realizamos las primeras evaluaciones y correspondientes derivaciones a
          profesionales, dentro o fuera de nuestro servicio.
        </p>

        <div className="py-4">
          <div className="py-2 border-b-2 text-xl">
            Las prestaciones de primeros auxilios incluyen:
          </div>
          <div className="pt-4 pl-4">
            <li>Control de glicemia por hemoglucotest</li>
            <li>Control de signos vitales</li>
            <li>Curaciones simples</li>
            <li>Entrega de medicamentos contra receta médica</li>
            <li>Evaluación de signos y síntomas</li>
            <li>Extracción de puntos</li>
            <li>Inmovilizaciones con vendas o férulas digitales</li>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="mt-4 col-span-4 md:col-span-2 flex justify-center items-center">
            <iframe
              title="YouTube video"
              className="p-4"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/VMejBw-zvGc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-4 col-span-4 md:col-span-2 flex justify-center items-center">
            <iframe
              title="YouTube video"
              className="p-4"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/EHoXbNGCN78"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </PageContent>
    </>
  );
};

const CuadroMostrarInfo = (props) => {
  return (
    <>
      <div className="border-b-2 border-usm-blue w-80  h-14 place-self-center grid place-items-center text-center">
        {props.info}
      </div>
    </>
  );
};
