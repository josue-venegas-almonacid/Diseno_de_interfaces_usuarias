import { useEffect } from "react";
import { PageTitle } from "../../components/principales/PageTitle";
import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";

export const CreditoCae = () => {

  useEffect(() => {
    document.title = `Becas y créditos - Crédito CAE - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg"/>
      <PageTitle>Becas y créditos</PageTitle>
      <PageContent>
      <div className="text-2xl text-usm-blue border-b-2 py-2 border-gray-400"> Crédito con garantía estatal (CAE) </div>
      <div className="py-6">
        Es un beneficio del Estado que se otorga a estudiantes que acrediten mérito académico y 
        que necesitan financiamiento para iniciar o continuar una carrera en instituciones de educación 
        superior acreditadas que formen parte del Sistema de Crédito con Garantía Estatal.
      </div>
      <div className="font-semibold">
        Requisitos académicos para postulación y renovación del Crédito con Garantía Estatal (Crédito CAE)2022 en la USM:
      </div>
      <div className="grid">
      <MostrarInfo 
        titulo="Consideración previa"
        body="Los requisitos expuestos son adicionales y copulativos a los requisitos generales 
        establecidos por la Ley Número 20.027 y sus normas asociadas, publicadas en www.ingresa.cl."
      />
      <div className="col-span-4">
      <div className="font-bold border-b-2 text-lg">1. Alumno cohorte 2022 pregrado-diurno:</div>
      <div className="grid grid-cols-2 gap-4 py-4">
        <div>- Ser alumno regular con asignaturas inscritas en primer año.</div>
        <div>- Contar con un promedio de notas de enseñanza media de 6,0 o superior en escala de 1 a 7.</div>
        <div>- No contar con CRÉDITO CON GARANTÍA ESTATAL (Ley 20.027) como potencial renovante.</div>
        <div>- Estudiantes que hayan cursado enseñanza media en el extranjero deben presentar en la Dirección de Relaciones Estudiantiles de su campus-sede, documentación de convalidación de estudios del MINEDUC y certificado de nota de enseñanza media en escala de 1 a 7.</div>
      </div>
      </div>

      <div className="col-span-4 py-6">
        <div className="font-bold border-b-2 text-lg ">2. Alumno postulantes de cohortes anteriores (ingreso 2021 y anteriores) pregrado-diurno</div>
        <div className="font-bold py-4">2.1. Requisitos generales</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Ser alumno regular, con asignaturas inscritas en pregrado diurno.</div>
          <div>- No contar con CRÉDITO CON GARANTÍA ESTATAL (Ley 20.027) como potencial renovante.</div>
          <div>- Cumplir avance en la UTFSM igual o mayor a 70%, en los últimos dos semestres cursados y concluidos. Dicho porcentaje se establece en función de las asignaturas inscritas versus las asignaturas aprobadas.</div>
          <div>- Los periodos considerados para el avance deben estar dentro de los dos años anteriores al año del proceso postulación al crédito.</div>
        </div>
        <div className="font-bold py-4">2.2. Situaciones especiales</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Tratándose de estudiantes que al momento de la verificación del avance sólo registren un semestre cursado y concluido, el porcentaje de avance se calculará respecto de las asignaturas inscritas en dicho periodo.</div>
          <div>- Estudiantes que hayan cursado enseñanza media en el extranjero deben presentar en la Dirección de Relaciones Estudiantiles de su campus-sede, documentación de convalidación de estudios del MINEDUC y certificado de nota de enseñanza media en escala de 1 a 7.</div>
        </div>
      </div>

      
      <div className="col-span-4 py-6">
        <div className="font-bold border-b-2 text-lg ">3. Alumno renovante CAE pregrado-diurno</div>
        <div className="font-bold py-4">3.1. Requisitos específicos</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Ser alumno regular, con asignaturas inscritas en pregrado diurno.</div>
          <div>- Cumplir con avance en la UTFSM igual o mayor a 70%, en los últimos dos semestres cursados y concluidos. Dicho porcentaje se establece en función de las asignaturas inscritas versus las asignaturas aprobadas.</div>
          <div>- Los periodos considerados para el avance deben estar dentro de los dos años anteriores al año del proceso de renovación del crédito.</div>
        </div>
        <div className="font-bold py-4">3.2. Situaciones especiales</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Tratándose de estudiantes que al momento de la verificación del avance sólo registren un semestre cursado y concluido, el porcentaje de avance se calculará respecto de las asignaturas inscritas en dicho periodo.</div>
          <div>- Alumnos renovantes provenientes de otras instituciones, sin registro de avance en la UTFSM en los dos años anteriores a la asignación-renovación del crédito, se someten a requisitos dispuestos en el numeral 1 (ALUMNO COHORTE 2022 PREGRADO-DIURNO).</div>
          <div>- Alumnos que reingresan a la UTFSM a la misma u otra carrera (en la misma u otra sede), se someten a los requisitos de renovación dispuestos en este numeral 3 (ALUMNO RENOVANTE CAE PREGRADO-DIURNO).</div>
        </div>
      </div>

      <div className="col-span-4 py-6">
        <div className="font-bold border-b-2 text-lg ">4. Postulante al CAE de programas de continuidad (jornada vespertina)</div>
        <div className="font-bold py-4">4.1. Requisitos generales</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Ser alumno regular, con asignaturas inscritas en pregrado vespertino.</div>
          <div>- No contar con CRÉDITO CON GARANTÍA ESTATAL (Ley 20.027) como potencial renovante.</div>
          <div>- Cumplir avance en la UTFSM igual o mayor a 70%, en los últimos dos semestres cursados y concluidos (o trimestres equivalentes al año). Dicho porcentaje se establece en función de las asignaturas inscritas versus las asignaturas aprobadas.</div>
          <div>- Los periodos considerados para el avance deben estar dentro de los dos años anteriores al año del proceso postulación al crédito.</div>
        </div>
        <div className="font-bold py-4">4.2. Situaciones especiales</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Tratándose de estudiantes que al momento de la verificación del avance sólo registren un semestre cursado y concluido (o trimestre), el porcentaje de avance se calculará respecto de las asignaturas inscritas en dicho periodo.</div>
        </div>
      </div>


      <div className="col-span-4 py-6">
        <div className="font-bold border-b-2 text-lg ">5. Renovante del CAE de programas de continuidad (jornada vespertina):</div>
        <div className="font-bold py-4">5.1. Requisitos específicos</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Ser alumno regular, con asignaturas inscritas en pregrado vespertino.</div>
          <div>- Cumplir avance en la UTFSM igual o mayor a 70%, en los últimos dos semestres cursados y concluidos (o trimestres equivalentes al año académico). Dicho porcentaje se establece en función de las asignaturas inscritas versus las asignaturas aprobadas.</div>
          <div>- Los periodos considerados para el cálculo del avance deben estar dentro de los dos años anteriores al año del proceso de renovación del crédito.</div>
        </div>
        <div className="font-bold py-4">5.2. Situaciones especiales</div>
        <div className="grid grid-cols-2 gap-4">
          <div>- Tratándose de estudiantes que al momento de la verificación del avance sólo registren un semestre cursado y concluido (o trimestre), el porcentaje de avance se calculará respecto de las asignaturas inscritas en dicho periodo.</div>
        </div>
      </div>

      <div className="col-span-4 py-6">
        <div className="font-bold border-b-2 text-lg">6. Otros</div>
        <div className="grid grid-cols-2 gap-4  py-4">
          <div>- Conforme al Reglamento de la Ley N° 20.027, para mantener el beneficio de la garantía estatal el alumno deberá conservar la condición socioeconómica que justificó su entrega, lo que se verificará anualmente de acuerdo con el procedimiento establecido en su Reglamento, y durante los años siguientes.</div>
          <div>- Corresponderá a la Vicerrectoría Académica, a través de sus direcciones dependientes, resolver las situaciones excepcionales.</div>
        </div>
      </div>


      

      </div>

      </PageContent>
    </>
  );
};


const MostrarInfo = (props) => {
  return(
    <>
    <div className="py-4 col-span-4">
      <div className="py-4 col-span-3">
            <div className="text-lg border-b-2 font-bold">{props.titulo}</div>
            <div className="py-2">{props.body}</div>
      </div>
    </div>
    </>
  )
}