import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";
import { Button } from "../../components/Button";

export const Documentos = () => {
  useEffect(() => {
    document.title = `Documentos - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="https://noticias.usm.cl/wp-content//uploads/2020/10/Fotos-Sede-Vin%CC%83a-Septiembre-2017-4.jpg" />
      <PageTitle>Documentos</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">2022</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-3">
          <Button href="#">Guía de relaciones estudiantiles</Button>
        </div>

        <h1 className="text-2xl text-usm-blue border-b-2">2019</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-3">
          <Button href="#">Memoria institucional</Button>
          <Button href="#">Guía de inclusión</Button>
          <Button href="#">
            Consejos para la prevención y cuidado de la salud mental en
            situaciones de crisis
          </Button>
        </div>

        <h1 className="text-2xl text-usm-blue border-b-2">2018</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-3">
          <Button href="#">Memoria institucional</Button>
        </div>

        <h1 className="text-2xl text-usm-blue border-b-2">2017</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-3">
          <Button href="#">Memoria institucional</Button>
        </div>

        <h1 className="text-2xl text-usm-blue border-b-2">2016</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-3">
          <Button href="#">Manual de inclusión universitaria</Button>
        </div>

        <h1 className="text-2xl text-usm-blue border-b-2">2015</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-3">
          <Button href="#">
            FDI: "calidad de vida en las comunidades universitarias"
          </Button>
        </div>

        <nav
          className="px-4 relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            &lt;&lt;
          </a>
          <a
            href="#"
            aria-current="page"
            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            1
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            2
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            3
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            ...
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            8
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            9
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            10
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Next</span>
            &gt;&gt;
          </a>
        </nav>
      </PageContent>
    </>
  );
};
