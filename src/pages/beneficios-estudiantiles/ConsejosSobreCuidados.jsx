import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";
import { Card } from "../../components/Card";

export const ConsejosSobreCuidados = () => {
  useEffect(() => {
    document.title = `Servicios dentales - Consejos sobre cuidados - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg" />
      <PageTitle>Servicios dentales</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">
          Consejos sobre cuidados
        </h1>
        <div className="grid grid-cols-4">
          <div className="py-4 col-span-4 md:col-span-3">
            <p className="text-justify">
              Para presentar una boca saludable, no sólo debemos preocuparnos de
              los dientes, sino que además, debemos colocar especial énfasis en
              todos los elementos que los rodean.
              <br />
              <br />
              Los dientes están formados por 4 tejidos: esmalte, dentina,
              cemento y pulpa. Por lo tanto, es importante cuidar la boca de las
              enfermedades que pueden desarrollarse:
            </p>

            <div className="py-4 px-4 grid grid-cols-3 gap-4">
              <Card
                title="Caries"
                content="Producen la pérdida de los tejidos del diente por la acción de los ácidos producidos 
              por las bacterias que destruyen al esmalte, dentina y pulpa, produciendo un daño irreversible en el diente."
              />

              <Card
                title="Enfermedad Periodontal"
                content="Ocasionan la inflamación y destrucción de las encías, pérdida del hueso alveolar, movilidad dentaria y formación de úlceras."
              />

              <Card
                title="Enfermedades de Transmisión Sexual"
                content="El herpes, la gonorrea, la sífilis e incluso el VIH, pueden transmitirse por vía oral."
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-1 px-4 flex justify-center items-center">
            <img
              className="w-full h-auto"
              alt="Dibujo con las partes del diente"
              src="/partes-dientes.png"
            ></img>
          </div>
        </div>

        <div className="py-4">
          <div className="py-2 border-b-2 text-xl">
            Para prevenir lo anterior, debemos:
          </div>
          <div className="pt-4 pl-4">
            <li>Usar diariamente cepillo y seda dental</li>
            <li>Cambiar tu cepillo cada dos meses</li>
            <li>Evitar el consumo de dulces entre comidas</li>
            <li>Evitar el cigarrillo</li>
            <li>Asistir periódicamente al dentista</li>
          </div>
        </div>
      </PageContent>
    </>
  );
};
