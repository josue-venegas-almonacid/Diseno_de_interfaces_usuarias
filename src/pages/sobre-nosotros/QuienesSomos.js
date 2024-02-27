import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageContent } from "../../components/principales/PageContent";
import { PageBanner } from "../../components/principales/PageBanner";
import organigrama from "../../assets/organigrama.png";

export const QuienesSomos = () => {
  useEffect(() => {
    document.title = `Sobre nosotros - Quiénes somos - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="https://www.epicentrochile.com/wp-content/uploads/2017/06/demo1.jpg" />
      <PageTitle>Quiénes Somos</PageTitle>
      <PageContent>
        <div className="space-y-2">
          <p>
            La Dirección de Relaciones Estudiantiles contribuye a la formación
            integral de la comunidad estudiantil de todos los Campus y Sedes de
            la USM. Está a cargo de proveer apoyo psicosocial, asistencial y de
            fomento, con el objetivo de favorecer la formación de profesionales
            durante su vida universitaria, especialmente atendiendo al legado
            testamentario de nuestro fundador.
          </p>
          <p>
            Según se aprecia en organigrama, la Dirección de Relaciones
            Estudiantiles está dirigida por doña Teresita Arenas, esta dirección
            depende de la Vicerrectoría Académica, a cargo de don Eugenio
            González, mediante la Dirección General de Docencia, a cargo de doña
            Catherine Tessini. A su vez, esta dirección tiene representación en
            todos los emplazamientos USM:
          </p>
          <ol className="list-decimal pl-6">
            <li>
              Sede Concepción: Ximena Bustos, Jefa de Bienestar Estudiantil.
            </li>
            <li>
              Campus Santiago San Joaquín: Rodrigo Pérez, Subdirector de
              Relaciones Estudiantiles.
            </li>
            <li>
              Campus Santiago Vitacura: Rodrigo Pérez, Subdirector de Relaciones
              Estudiantiles.
            </li>
            <li>
              Sede Viña del Mar: Claudia Oyarce, Jefa de Bienestar Estudiantil.
            </li>
            <li>
              Campus Casa Central Valparaíso: Paulina Pereda, Jefa de Relaciones
              Estudiantiles.
            </li>
          </ol>
          <div className="flex justify-center">
            <img src={organigrama} alt="Organigrama" />
          </div>
        </div>
      </PageContent>
    </>
  );
};
