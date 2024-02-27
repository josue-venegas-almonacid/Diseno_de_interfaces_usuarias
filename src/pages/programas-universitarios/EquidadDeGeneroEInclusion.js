import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";

export const EquidadDeGeneroEInclusion = () => {

  useEffect(() => {
    document.title = `Programas universitarios - Equidad de género e inclusión - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="http://www.vra.usm.cl/wp-content/uploads/2016/07/USM-bienvenida-2016-18-1600x525.jpg"/>
      <PageTitle>Equidad de género e inclusión</PageTitle>
      <PageContent>
        <p className="py-4 text-justify">
          La Unidad de Equidad de Género e Inclusión se crea a fines del año 2018 con la incorporación de una encargada institucional de Equidad de Género e Inclusión y espera consolidarse en 2019 con encargadas locales  en cada campus y sede.<br/><br/>
          En esta unidad se desarrollarán diversas iniciativas relacionadas a la temática, además de brindar apoyo en algunas áreas relacionadas al <strong>Protocolo para la Prevención y Sanción de Conductas de Acoso Sexual, Discriminación y Violencia de Género</strong>, que fue promulgado el 2018 por Decreto de Rectoría 200/2018.<br/><br/>
          Por otra parte, desde el año 2014, la Dirección de Relaciones Estudiantiles comienza a trabajar en el tema de la Inclusión de estudiantes en situación de discapacidad.<br/><br/>
          Durante el año 2017 el Programa de Inclusión fortalece su participación en la Comisión de Inclusión del Consejo de Rectores de las Universidades de Valparaíso (CRUV), aportando desde la participación activa en las reuniones de coordinación entre las instituciones, hasta la ejecución del plan de trabajo consensuado entre las Universidades participantes.
          En el contexto de promoción y difusión de la temática a la comunidad universitaria, durante marzo de 2019 se están realizando talleres relativos a la prevención de violencia de género a estudiantes  y se proyectan asesorías a funcionarios y equipos docentes.
        </p>
      </PageContent>
    </>
  );
};
