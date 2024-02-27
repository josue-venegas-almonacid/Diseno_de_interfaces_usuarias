import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle.jsx";
import { PageBanner } from "../../components/principales/PageBanner.jsx";
import { PageContent } from "../../components/principales/PageContent.jsx";
import { Card } from '../../components/Card.jsx';


export const AtencionDental = () => {

  useEffect(() => {
    document.title = `Servicios dentales - Atención dental - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg"/>
      <PageTitle>Servicios dentales</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">Atención dental</h1>
        <div className="flex flex-wrap px-20">
          <div className="grid grid-cols-2 py-10 gap-x-10 gap-y-10">
            <Card 
              title="Examen de salud gratuito"
              content="Consiste en una evaluación y revisión del estado de salud bucal actual. Se entregan las indicaciones del procedimiento a seguir en cuanto a tratamiento."
            />
            <Card 
              title="Urgencias"
              content="Se revisan casos de alumnos que presenten alguna dolencia o hayan sufrido algún traumatismo dental."
            />
            <Card 
              title="Destartraje y profilaxis"
              content="Limpieza de todas las piezas dentarias."
            />
            <Card 
              title="Obturaciones de resina (tapaduras estéticas)"
              content="Se realiza con objetivo de reparar un diente que tiene caries, está estrellado, tiene fracturas, etc. La parte afectada será removida y luego rellenada con resina."
            />
            <Card 
              title="Endodoncia de dientes anteriores y premolares (tratamiento conducto)"
              content="Tratamiento radicular o de raíz en caso de que la carie sea muy profunda."
            />
            <Card 
              title="Extracción simple"
              content="Retiro de piezas dentarias. Dicho procedimiento se realiza cuando no son factibles los demás procedimientos de curación del diente."
            />
            <Card 
              title="Extracciones complejas"
              content="Extracciones de las muelas del juicio (previa evaluación)."
            />
          </div>
        </div>
      </PageContent>
    </>
  );
};