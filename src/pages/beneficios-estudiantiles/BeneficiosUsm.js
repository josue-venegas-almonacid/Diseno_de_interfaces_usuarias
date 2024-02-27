import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";

export const BeneficiosUsm = () => {
  useEffect(() => {
    document.title = `Becas y créditos - Beneficios USM - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="https://noticias.usm.cl/wp-content//uploads/2019/09/Sede-Vin%CC%83a-del-Mar-1.jpg" />
      <PageTitle>Becas y créditos</PageTitle>
      <PageContent>
        <div className="text-2xl text-usm-blue border-b-2 py-2 border-gray-400">
          Beneficios USM
        </div>
        <div className="grid grid-cols-5 gap-y-4 py-4 gap-x-10">
          <CuadroMostrarInfo
            titulo="Beca de Alimentación"
            body="Consiste en un beneficio para el estudiantado perteneciente a los 
            primeros deciles socioeconómicos, y que no cuenten con Beca de Alimentación de Educación Superior JUNAEB (BAES). 
            Dependiendo del Campus o Sede, puede incluir almuerzo y/o cena."
          />

          <img
            className="h-40"
            alt="Alimentacion"
            src="https://www.usm.cl/assets/img/minuta.w700.jpg"
          ></img>

          <CuadroMostrarInfo
            titulo="Beca para Estudiantes Padres y Madres"
            body="Consiste en una subvención orientada a favorecer a estudiantes con hijos (as) y 
            en condición socioeconómica deficitaria, ayudándoles a desarrollar con tranquilidad y equidad su vida universitaria."
          />
          <CuadroMostrarInfo
            titulo="Beca de matrícula"
            body="Consiste en la exención de pago del 60% del arancel básico de matrícula para el estudiantado que pertenece a los deciles 1 y 2; 
            la exención del 50% es para estudiantes pertenecientes a los deciles 3 y 4, y de una exención del 20% para quienes pertenecen al decil 5"
          />
          <img
            className="h-52"
            alt="Hoja"
            src="https://www.exalumnos.usm.cl/wp-content/uploads/2020/08/contrato-1.png"
          ></img>
          <CuadroMostrarInfo
            titulo="Beca de mantención Federico Santa María"
            body="Consiste en la entrega al estudiante beneficiado, de un monto mensual en dinero, durante los meses de abril a diciembre, destinado a apoyar los gastos asociados a su actividad estudiantil. 
            Para esta beca no se necesita postular, sino que se asigna de acuerdo a los antecedentes académicos y socioeconómicos del estudiantado."
          />
          <div className="py-4 col-span-4">
            <div className="py-4 col-span-3">
              <div className="text-lg border-b-2 font-bold">
                Beca de residencia/movilidad
              </div>
              <div className="py-2">
                Consiste en un aporte monetario mensual destinado a cubrir parte
                de los gastos de hospedaje o de traslado, cuyo monto varía de
                acuerdo a la modalidad de la beca otorgada. Su asignación está
                sujeta a la evaluación de la situación socioeconómica de cada
                estudiante y a los límites presupuestarios de la institución.
                Este beneficio se proporcionará en dos modalidades excluyentes:
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              <div>
                <div className="font-semibold">Hospedaje</div>Para estudiantes
                provenientes de zonas muy distantes a su Campus o Sede de
                estudio, que hace necesario por motivos académicos, cambiar de
                domicilio a un lugar más cercano a la Universidad.
              </div>
              <div>
                <div className="font-semibold">Traslado</div> Para aquellos con
                procedencia en zonas relativamente distantes de su Campus o
                Sede, permitiendo su traslado diario para asistir a sus
                actividades académicas y retornar posteriormente a su domicilio.
              </div>
            </div>
          </div>
          <img
            className="h-64"
            alt="Edificio"
            src="https://cdn-icons-png.flaticon.com/512/2500/2500791.png"
          ></img>
          <CuadroMostrarInfo
            titulo="Fondo Solidario de Crédito Universitario USM"
            body="Si cuentas con una situación socioeconómica deficitaria y recibes ayuda estudiantil del 
            Ministerio de Educación por el 100% del arancel de referencia, el Fondo Solidario de Crédito Universitario de la USM te 
            otorgará crédito por la diferencia entre dicho financiamiento y el arancel real."
          />
          <CuadroMostrarInfo
            titulo="Subsidio BAES"
            body="Subsidio otorgado a estudiantes que poseen el beneficio de la Beca de Alimentación de 
            Educación Superior de la JUNAEB (BAES), consistente en una subvención que 
            cubre la diferencia entre el precio del menú único del casino USM y el valor establecido por JUNAEB. 
            En otras palabras, al pagar el almuerzo en la USM con tarjeta BAES, sólo se cobrará el precio establecido por JUNAEB, 
            puesto que la diferencia entre el precio real del almuerzo y lo que se cancela, lo subvenciona la USM."
          />
          <img className="52" src="../BAES.png" alt="BAES"></img>
          <CuadroMostrarInfo
            titulo="Subsidio de la TNE"
            body="La JUNAEB, entidad gubernamental que gestiona la TNE (pase escolar) cobra $2.700 pesos y $1.100 pesos 
            por cada TNE nueva o revalidación, respetivamente, a los estudiantes del sistema de educación superior. 
            Sin embargo, la UTFSM exime de dicho pago a los estudiantes de pregrado en jornada diurna, transformándose en un beneficio casi universal de transporte."
          />
          <img
            alt="TNE"
            src="http://destudiantil.ubiobio.cl/dde_concepcion2/wp-content/uploads/2019/05/tne-grafica-01-300x300.png"
          ></img>
        </div>
      </PageContent>
    </>
  );
};

const CuadroMostrarInfo = (props) => {
  return (
    <>
      <div className="py-4 col-span-4">
        <div className="py-4 col-span-3">
          <div className="text-lg border-b-2 font-bold">{props.titulo}</div>
          <div className="py-2">{props.body}</div>
        </div>
      </div>
    </>
  );
};
