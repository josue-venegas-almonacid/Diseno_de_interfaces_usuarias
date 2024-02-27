import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";
import { Button } from "../../components/Button";

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export const Boletines = () => {

  useEffect(() => {
    document.title = `Boletines - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/fotos-sede-vina-septiembre-2017-4.jpg"/>
      <PageTitle>Boletines</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">2020</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-6">
          {meses.map((mes) => (
            <Button href="#">{mes}</Button>
          ))}
        </div>

        <h1 className="text-2xl text-usm-blue border-b-2">2019</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-6">
          {meses.map((mes) => (
            <Button href="#">{mes}</Button>
          ))}
        </div>

        <h1 className="text-2xl text-usm-blue border-b-2">2018</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-6">
          {meses.map((mes) => (
            <Button href="#">{mes}</Button>
          ))}
        </div>

        <nav className="px-4 relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            &lt;&lt;
          </a>
          <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            1
          </a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            2
          </a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            3
          </a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            ...
          </a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            8
          </a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            9
          </a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            10
          </a>
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            &gt;&gt;
          </a>
        </nav>
      </PageContent>
      
    </>
  );
};