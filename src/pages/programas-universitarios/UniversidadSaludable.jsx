import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";

export const UniversidadSaludable = () => {

  useEffect(() => {
    document.title = `Programas universitarios - Universidad saludable - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/iniciativas_estudiantiles.jpg"/>
      <PageTitle>Universidad saludable</PageTitle>
      <PageContent>
        <div className="grid grid-cols-4 space-x-4">
          <p className="text-justify py-4 col-span-4 md:col-span-2">
          Punto de Encuentro es un programa dependiente de la Dirección de Relaciones Estudiantiles de la Universidad Técnica Federico Santa María, que acompaña a estudiantes en su proceso de formación universitaria, fomentando el crecimiento personal y académico, a través de la promoción de calidad de vida en esta etapa de su vida universitaria.<br/><br/>
          Inicia sus acciones el año 2000 en Campus Casa Central Valparaíso y Sede Viña, ampliándose luego a otros Campus y Sedes de la Universidad, fortaleciendo en cada estudiante recursos personales y sociales que les permitirán enfrentar su vida universitaria de forma saludable, además de reflexionar sobre su responsabilidad como profesionales en el desarrollo de la calidad de vida en sus futuros contextos laborales.<br/><br/>
          El objetivo central es facilitar el desarrollo del estudiantado durante su proceso formativo en la Universidad, a través de la promoción de un estilo de vida saludable y el fortalecimiento de habilidades transversales complementarias a los conocimientos y competencias técnicas de sus carreras.
          </p>

          <div className="col-span-4 md:col-span-2 flex justify-center items-center">
              <iframe title="YouTube video" className="p-4" width="100%" height="500" src="https://www.youtube.com/embed/aKyOxkNRrLY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </PageContent>
    </>
  );
};
