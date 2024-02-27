import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";

const noticias = [
  {
    src: "https://www.rree.usm.cl/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-03-at-11.39.04-800x400.jpeg",
    href: "https://www.rree.usm.cl/2021/estudiantes-becados-usm-reciben-capacitacion-en-materias-de-equidad-de-genero-e-inclusion/",
    date: "07/12/2021",
    title: "Estudiantes Becados USM reciben capacitación en materias de Equidad de Género e Inclusión",
    summary: `En el marco de las actividades que lleva adelante la Dirección de Relaciones Estudiantiles a través de sus diversos programas dirigidos a nuestro estudiantado y en especial, en Sede Viña del Mar,  durante noviembre la Unidad de Equidad de Género e Inclusión realizó el ciclo de talleres “Taller Madres y Padres Viña del Mar 2021”.`,
  },
  {
    src: "https://www.rree.usm.cl/wp-content/uploads/2021/11/Captura-de-pantalla-37-editada-800x400.png",
    href: "https://www.rree.usm.cl/2021/con-exito-finaliza-segundo-torneo-escolar-de-debate-online-organizado-por-la-usm/",
    date: "16/11/2021",
    title: "Con éxito finaliza segundo Torneo Escolar de Debate Online organizado por la USM",
    summary: `La jornada comenzó con el debate por el tercer lugar, entre el Colegio Santa Úrsula y Trewhela’s School, los cuales se enfrentaron a una temática que les hacía ponerse en la piel de una científica, la que había realizado un gran descubrimiento relacionado con la especie humana, pero que solo tenía una posibilidad para probarlo.`,
  },
  {
    src: "https://www.rree.usm.cl/wp-content/uploads/2021/11/49278437313_c33d3e252b_o-800x400.jpg",
    href: "https://www.rree.usm.cl/2021/usm-incorpora-distincion-de-genero-femenino-en-titulos-y-grados/",
    date: "04/11/2021",
    title: "USM incorpora distinción de género femenino en títulos y grados",
    summary: `Con el fin de continuar los avances en materia de equidad de género e inclusión, la Universidad Técnica Federico Santa María aprobó la incorporación de la distinción de género femenino en los títulos y grados que entrega en cada uno de sus programas de pre y postgrado.`,
  },
  {
    src: "https://www.rree.usm.cl/wp-content/uploads/2021/04/inclusion-bienvenida-800x400.png",
    href: "https://www.rree.usm.cl/2021/programa-de-inclusion-usm-realiza-taller-de-preparacion-para-la-vida-universitaria/",
    date: "02/11/2021",
    title: "Programa de Inclusión USM realiza taller de preparación para la vida universitaria",
    summary: `La instancia fue efectuada por las Sedes Concepción y Viña del Mar, y se orientó al estudiantado de primer año que ingresa al programa. En el marco de la realización de actividades orientadas al estudiantado de nuestra Casa de Estudios.`,
  },
]


export const Noticias = () => {

  useEffect(() => {
    document.title = `Noticias - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="https://noticias.usm.cl/wp-content//uploads/2020/10/Fotos-Sede-Vin%CC%83a-Septiembre-2017-4.jpg"/>
      <PageTitle>Noticias</PageTitle>
      <PageContent>
        <h1 className="text-2xl text-usm-blue border-b-2">2021</h1>
        <div className="py-4 px-4 gap-4 grid grid-cols-2">
          {noticias.map((noticia) => (
            <Noticia
              src = {noticia.src}
              date = {noticia.date}
              title = {noticia.title}
              summary = {noticia.summary}
              href = {noticia.href}
            />
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

const Noticia = (props) => {
  return(
    <a href={props.href} target="_blank">
      <div className="border border-usm-blue p-4 space-x-4 rounded-lg shadow-md grid grid-cols-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
        <div>
          <img alt="Imagen de la noticia" className="object-cover h-full w-auto" src={props.src}/>
        </div>
        <div className="col-start-2 col-end-3">
          <p className="text-xs italic">
            {props.date}
          </p>
          <h1 className="text-md font-semibold border-b-2 py-2 text-usm-blue">
            {props.title}
          </h1>
          <p className="text-xs py-2 text-justify">
            {props.summary}
          </p>
        </div>
      </div>
    </a>
  )
}