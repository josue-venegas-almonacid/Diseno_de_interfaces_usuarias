import { useEffect } from "react";
import FadeIn from "react-fade-in";

export const Home = () => {
  useEffect(() => {
    document.title = `Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <BackgroundFixed imgBackground="https://www.rree.usm.cl/wp-content/uploads/2019/01/CASA-CENTRAL-FOTO-NUEVA.jpg">
        <PageContent>
          <div className="w-full">
            <h1 className="text-5xl text-white">Relaciones </h1>
            <h1 className="text-5xl text-white">Estudiantiles UTFSM</h1>
          </div>
          <div className="pt-4 w-1/2">
            <h1 className="text-xl text-white text-justify">
              Contribuyendo a la formación integral de nuestros estudiantes a
              través de apoyo psicosocial, asistencial y de fomento.
            </h1>
          </div>
        </PageContent>
      </BackgroundFixed>
      <PageContent>
        <div className="p-4 bg-color-white">
          <h1 className="text-4xl text-center text-usm-blue">Servicios</h1>
        </div>
        <div className="flex space-x-5 py-10 px-12 place-content-center">
          <Card title="Servicios médicos">
            Velamos por el bienestar de nuestros alumnos por lo que brindamos
            servicios dentales, médicos y psicológicos de manera gratuita.
          </Card>
          <Card title="Proveer información">
            Proveemos información acerca de la comunidad estudiantil y noticias
            relacionadas a la universidad, fomentando la participación e
            inclusión de los alumnos en diversas actividades.
          </Card>
          <Card title="Becas y créditos">
            Facilitamos a nuestros alumnos la información y requisitos para
            acceder a becas y créditos ofrecidos tanto por la universidad, como
            por el gobierno.
          </Card>
        </div>
      </PageContent>
    </>
  );
};

const BackgroundFixed = ({ imgBackground, children }) => {
  return (
    <>
      <div className="min-h-full">
        <div className=" h-5/6 flex flex-col">
          <div
            className="relative flex items-start py-20 px-12 justify-left h-full
            bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${imgBackground})`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title, children }) => {
  return (
    <>
      <div className="border border-usm-blue p-4 rounded-lg shadow-md">
        <div className="px-4">
          <div className="text-lg border-b-2 py-2">{title}</div>
          <div className="py-2">{children}</div>
        </div>
      </div>
    </>
  );
};

const PageContent = ({ children, useGrid }) => {
  return (
    <FadeIn>
      <div
        className={`px-8 py-8 text-gray-700 ${
          useGrid === true ? "grid grid-cols-2" : ""
        }`}
      >
        {children}
      </div>
    </FadeIn>
  );
};
