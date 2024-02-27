import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";
import { Card } from "../../components/Card";

export const SeguroDeAccidentes = () => {

  useEffect(() => {
    document.title = `Servicios médicos - Seguro escolar de accidentes - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="https://noticias.usm.cl/wp-content//uploads/2019/09/Sede-Vin%CC%83a-del-Mar-1.jpg"/>
      <PageTitle>Servicios médicos</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">Seguro escolar de accidentes (D.S 313 de 1972)</h1>
        <div className="py-4 px-20">
          <div className="py-4 px-4 grid grid-cols-2 gap-4">
            <Card 
              title="¿A quiénes protege el Seguro?"
              content="Protege a estudiantes regulares de Establecimientos Fiscales, Municipales, Particulares, Subvencionados, Particulares No Subvencionados, 
              del Nivel de Transición de la Educación Parvularia, de Enseñanza Básica, Media, Normal, Técnica Agrícola, Comercial, Industrial, Universitaria e 
              Institutos Profesionales dependientes del Estado o reconocidos por éste."
            />

            <Card 
              title="¿De qué protege?"
              content=" De los accidentes que sufran estudiantes con ocasión de sus estudios o en la realización de su Práctica Educacional o en el trayecto directo, 
              de ida o regreso entre su casa y el Establecimiento Educacional o el lugar donde realice su Práctica Profesional."
            />
          </div>
        </div>
      </PageContent>
    </>
  );
};