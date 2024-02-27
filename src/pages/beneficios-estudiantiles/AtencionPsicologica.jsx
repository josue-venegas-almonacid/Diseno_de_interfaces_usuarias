import { useEffect } from "react";
import { PageContent } from "../../components/principales/PageContent";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";

export const AtencionPsicologica = () => {
  useEffect(() => {
    document.title = `Servicios médicos - Atención psicológica - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg" />
      <PageTitle>Servicios médicos</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">
          Atención psicológica
        </h1>
        <p className="py-4">
          Orientada a acompañar el proceso de la comunidad estudiantil durante
          su formación académica.
        </p>

        <div className="py-4">
          <div className="py-2 border-b-2 text-xl">
            Las prestaciones de atención psicológica incluyen:
          </div>
          <div className="pt-4 pl-4">
            <li>Psicoeducacion </li>
            <li>Higiene de sueño </li>
            <li>Acompañamiento en proceso de duelo </li>
            <li>Orientación vocacional </li>
            <li>Redacción o informes de proceso </li>
            <li>Informes de evaluación para congelamientos </li>
            <li>Psicoterapia breve </li>
            <li>Derivaciones necesarias para casos que lo ameriten </li>
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
