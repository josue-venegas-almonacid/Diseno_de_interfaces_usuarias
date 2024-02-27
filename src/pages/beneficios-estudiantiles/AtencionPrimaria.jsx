import { useEffect } from "react";
import { PageContent } from "../../components/principales/PageContent";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";

export const AtencionPrimaria = () => {

  useEffect(() => {
    document.title = `Servicios médicos - Atención primaria - Relaciones Estudiantiles UTFSM`;
  });

  return(
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg"/>
      <PageTitle>Servicios médicos</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">Atención primaria</h1>
        <div className="grid grid-cols-4 space-x-4">
          <p className="text-justify py-4 col-span-4 md:col-span-2">
              El servicio médico Sansanito cuenta con dos médicos generales, especializadas en medicina preventiva. 
              Además, una de ellas tiene el título de matrona, por lo que desarrolla el área de anticoncepción, consultas y derivaciones ginecológicas. <br></br><br></br>
              Se atiende a estudiantes que llegan por consulta espontánea, además de estudiantes que tienen preocupación por su salud y que quieran realizar prevención. 
              Para ello, contamos con un arsenal farmacológico básico y una red de especialistas a los cuales podemos derivar los casos que así lo ameriten.
          </p>

          <div className="col-span-4 md:col-span-2 flex justify-center items-center">
              <iframe title="YouTube video" className="p-4" width="100%" height="500" src="https://www.youtube.com/embed/iws9A8Wv4Jo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </PageContent>
    </>
  )
}
