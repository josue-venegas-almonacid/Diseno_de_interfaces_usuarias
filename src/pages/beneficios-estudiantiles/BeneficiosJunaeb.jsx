import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";
import { Button } from "../../components/Button";

export const BeneficiosJunaeb = () => {
  useEffect(() => {
    document.title = `Becas y créditos - Beneficios JUNAEB - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg" />
      <PageTitle>Becas y créditos</PageTitle>
      <PageContent>
        <div className="text-2xl text-usm-blue border-b-2 py-2 border-gray-400">
          {" "}
          Beneficios JUNAEB{" "}
        </div>
        <div className="grid grid-cols-3 gap-4 py-10 px-20 justify-items-center">
          <Button href="https://www.junaeb.cl/beca-de-mantencion-para-la-educacion-superior">
            Beca de mantención (BEMES)
          </Button>
          <Button href="https://www.junaeb.cl/beca-baes">
            Beca de alimentación (BAES)
          </Button>
          <Button href="https://www.junaeb.cl/becas-educacion-superior/beca-indigena-e-s-postulacion">
            Beca indígena
          </Button>
          <Button href="https://www.junaeb.cl/becas-educacion-superior/beca-de-integracion-territorial-postulacion-e-s">
            Beca integración territorial
          </Button>
          <Button href="https://www.junaeb.cl/beca-chaiten-renovacion-e-s">
            Beca Chaitén
          </Button>
          <Button href="https://www.junaeb.cl/becas-educacion-superior/beca-presidente-de-la-republica-renovacion-e-s">
            Beca presidente de la república
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-x-10 py-8">
          <div className="text-lg border-b-2 font-bold col-span-3">
            Tarjeta nacional estudiantil (TNE)
          </div>

          <div className="py-2 col-span-3">
            La Tarjeta Nacional Estudiantil, es un documento público, personal e
            intransferible, que acredita tu calidad de alumna (o) regular de un
            nivel educacional y que te permite acceder a la tarifa rebajada en
            los pasajes de los servicios públicos de locomoción colectiva. La
            pueden obtener estudiantes que cursen desde 5º Básico a 4º Medio y
            estudiantes de Educación Superior que sean acreditados como alumno
            regular de un establecimiento o institución reconocido por el
            Ministerio de Educación.
          </div>
          <img
            alt="Joven dentro de una TNE"
            className="h-60 w-80"
            src="/tne-2019.jpeg"
          ></img>
        </div>
      </PageContent>
    </>
  );
};
