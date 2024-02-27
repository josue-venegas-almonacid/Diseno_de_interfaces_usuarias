import { useEffect } from "react";
import { PageContent } from "../../components/principales/PageContent";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import Swal from "sweetalert2";

export const Contacto = () => {
  useEffect(() => {
    document.title = `Sobre nosotros - Contacto - Relaciones Estudiantiles UTFSM`;
  });

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire({
      title: "¡Proceso exitoso!",
      text: "Mensaje enviado correctamente",
      icon: "success",
      confirmButtonText: "Cerrar",
      didClose: () => {
        window.location.reload();
      },
    });
  }

  return (
    <>
      <PageBanner src="https://www.epicentrochile.com/wp-content/uploads/2017/06/demo1.jpg" />
      <PageTitle>Contacto</PageTitle>
      <PageContent>
        <p>
          Completa el siguiente formulario con tus consultas o inquietudes.
          Responderemos tan pronto sea posible.
        </p>

        <hr className="mb-4 mt-2" />

        <div className="mx-14 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full border py-3 px-4 mb-3 leading-tight"
                  id="grid-first-name"
                  type="text"
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Correo electrónico
                </label>
                <input
                  className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight"
                  id="grid-email"
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Número de teléfono
                </label>
                <input
                  className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight"
                  id="grid-phone"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-message"
                >
                  Mensaje
                </label>
                <textarea class="appearance-none block w-full h-28 border rounded py-3 px-4 mb-3 leading-tight"></textarea>
              </div>

              <div className="w-full my-10">
                <button className="px-4 py-4 rounded text-center bg-usm-blue text-usm-white">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </PageContent>
    </>
  );
};
