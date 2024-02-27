import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";

export const AtencionKinesiologica = () => {

  useEffect(() => {
    document.title = `Servicios médicos - Atención kinesiológica - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg"/>
      <PageTitle>Servicios médicos</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">Atención kinesiológica</h1>
        <div className="grid grid-cols-4 space-x-4">
          <p className="text-justify py-4 col-span-4 md:col-span-2">
          El servicio médico Sansanito cuenta con un programa de kinesiología de gran calidad y constante mejoría, orientado a la prevención y 
          tratamiento integral de patologías del aparato locomotor. <br></br><br></br>

          Esta área cuenta con la mayoría de los insumos requeridos para una rehabilitación en condiciones óptimas 
          (ultrasonido, onda corta, tens, laserterapia, gimnasio terapéutico, entre otras) y está disponible para la atención 
          exclusiva de estudiantes de la USM Campus Casa Central Valparaíso.<br></br><br></br>

          El Servicio Médico Sansanito cuenta con un kinesiólogo a jornada completa, quien trabaja en 
          comunión con el equipo multidisciplinario del servicio, para potenciar la recuperación y pronta reinserción de 
          pacientes a sus actividades estudiantiles y/o deportivas.<br></br><br></br>
          </p>

          <div className="col-span-4 md:col-span-2 flex justify-center items-center">
              <iframe title="YouTube video" className="p-4" width="100%" height="500" src="https://www.youtube.com/embed/NaCj7PuOMuk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </PageContent>
    </>
  );
};