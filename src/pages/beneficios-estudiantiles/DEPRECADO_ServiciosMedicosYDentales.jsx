/* import { PageBanner } from "../../components/principales/PageBanner";
import { PageContent } from "../../components/principales/PageContent";
import { PageTitle } from "../../components/principales/PageTitle";

export const ServiciosMedicosYDentales = () => {
  return (
    <>
      <PageBanner src="/sede-vina-del-mar-1.jpg"/>
      <PageTitle>Servicios médicos y dentales</PageTitle>
      <PageContent>
      <p className="px-20 py-5">
        La Universidad Técnica Federico Santa María cuenta con un equipo multidisciplinario en el área de la salud, 
        que permite brindar a los estudiantes atención médica primaria, psicológica, dental, kinésica y primeros auxilios.
        Este equipo está conformado por médicos, kinesiólogos, psicólogos, odontólogos y paramédicos, distribuidos en las 
        dependencias del Servicio Médico  y Clínica Dental de nuestra Universidad. <br></br>
        Otorgamos una atención cercana y de alta calidad, con un equipo humano competente y 
        motivado, orientando nuestra atención a mejorar la calidad de vida de nuestros estudiantes.
      </p>
      <div className="py-5 divide-y-2 divide-usm-blue">
      <h1 className="text-3xl ">Servicio médico</h1>
      <div>
      <p className="py-5 px-20">
        El Servicio Médico de la Dirección de Relaciones Estudiantiles, está dispuesto para todos los integrantes de pregrado de nuestra Universidad, 
        que sean estudiantes diurnos, regulares y matriculados. <br></br>
        Estamos para recibir urgencias, realizamos variados tratamientos y en casos de mayor complejidad hacemos las derivaciones correspondientes.
      </p>
      <h1 className="text-2xl text-usm-blue">Atención Primaria</h1>
      <p className="py-5 px-20">
      El Servicio Médico Sansanito, cuenta con dos médicos generales, especializadas en medicina preventiva. 
      Además, una de ellas tiene el título de matrona, por lo que desarrolla el área de anticoncepción, consultas y derivaciones ginecológicas. <br></br><br></br>
      Se atiende a estudiantes que llegan por consulta espontánea, además de estudiantes que tienen preocupación por su salud y que quieran realizar prevención. 
      Para ello, contamos con un arsenal farmacológico básico y una red de especialistas a los cuales podemos derivar los casos que así lo ameriten.
      </p>

      <h1 className="text-2xl text-usm-blue">Atención Psicológica</h1>
      <p className="py-5 px-20">
        Orientada a acompañar el proceso de la comunidad estudiantil durante su formación académica.<br></br><br></br>
        Las prestaciones de atención psicológica incluyen:<br></br><br></br>
        <ul>
          <li type="square">Psicoeducación</li>
          <li type="square">Higiene de sueño</li>
          <li type="square">Acompañamiento en proceso de duelo</li>
          <li type="square">Orientación vocacional</li>
          <li type="square">Redacción o informes de proceso</li>
          <li type="square">Informes de evaluación para congelamientos</li>
          <li type="square">Psicoterapia breve</li>
          <li type="square">Derivaciones necesarias para casos que lo ameriten (psiquiatra, neurólogo (a), entre otros)</li>
      </ul>
    </p>

    <h1 className="text-2xl text-usm-blue">Atención Kinesiológica</h1>
      <p className="py-5 px-20">
      El Servicio Médico Sansanito, cuenta con un programa de kinesiología de gran calidad y constante mejoría, orientado a la prevención y 
      tratamiento integral de patologías del aparato locomotor. <br></br><br></br>

      Esta área cuenta con la mayoría de los insumos requeridos para una rehabilitación en condiciones óptimas 
      (ultrasonido, onda corta, tens, laserterapia, gimnasio terapéutico, entre otras) y está disponible para la atención 
      exclusiva de estudiantes de la USM Campus Casa Central Valparaíso.<br></br><br></br>

      El Servicio Médico Sansanito cuenta con un kinesiólogo a jornada completa, quien trabaja en 
      comunión con el equipo multidisciplinario del servicio, para potenciar la recuperación y pronta reinserción de 
      pacientes a sus actividades estudiantiles y/o deportivas.<br></br><br></br>
      </p>
    
    <h1 className="text-2xl text-usm-blue">Atención de primeros auxilios</h1>
      <p className="py-5 px-20">
      Atención de primera demanda. Contamos con dos TENS que están presentes de 8:30 a 20:30
      horas, en horario continuado, atentos frente a cualquier emergencia. <br></br><br></br>

      Realizamos las primeras evaluaciones y correspondientes derivaciones a profesionales, dentro o
      fuera de nuestro servicio.<br></br><br></br>

      Nuestra atención de primeros auxilios incluye:<br></br><br></br>
      <ul>
          <li type="square">Control de glicemia por hemoglucotest</li>
          <li type="square">Control de signos vitales</li>
          <li type="square">Curaciones</li>
          <li type="square">Entrega de medicamentos contra receta médica</li>
          <li type="square">Evaluación de signos y síntomas/derivación a médico USM</li>
          <li type="square">Extracción de puntos</li>
          <li type="square">Inmovilizaciones con vendas o férulas digitales (RP/Médica)</li>
      </ul>
      </p>

    <h1 className="text-2xl text-usm-blue">Seguro de accidentes</h1>
      <p className="py-5 px-20">
      <p className="text-xl">Seguro Escolar de Accidentes (D.S 313 de 1972) : </p><br></br>

      <p className="text-lg">¿A quiénes protege el Seguro?</p><br></br>

      Protege a estudiantes regulares de Establecimientos Fiscales, Municipales, Particulares, Subvencionados, Particulares No Subvencionados, 
      del Nivel de Transición de la Educación Parvularia, de Enseñanza Básica, Media, Normal, Técnica Agrícola, Comercial, Industrial, Universitaria e 
      Institutos Profesionales dependientes del Estado o reconocidos por éste.<br></br><br></br>

      <p className="text-lg">¿De qué protege?</p><br></br>
      De los accidentes que sufran estudiantes con ocasión de sus estudios o en la realización de su Práctica Educacional o en el trayecto directo, 
      de ida o regreso entre su casa y el Establecimiento Educacional o el lugar donde realice su Práctica Profesional.<br></br><br></br>
      </p>
    
    <h1 className="text-2xl text-usm-blue">Normativa certificados medicos</h1>
      <p className="py-5 px-20">
      <p className="text-xl">Procedimiento de certificados médicos </p><br></br>

      Para estudiantes que requieran justificar una inasistencia por causa médica deberán presentar certificado médico 
      con un plazo de hasta 48 horas de emitido el certificado, a través de la plataforma SIGA.<br></br><br></br>

      El certificado debe cumplir con los siguientes requisitos:<br></br><br></br>
      <ul>
          <li type="square">Ser emitido por un médico</li>
          <li type="square">Letra legible</li>
          <li type="square">Nombre del estudiante</li>
          <li type="square">Diagnóstico y tiempo de reposo a cumplir</li>
          <li type="square">Firma y timbre del médico</li>
      </ul>

      No se aceptarán certificados médicos emitidos por pediatras.<br></br><br></br>

      Los certificados médicos de duración prolongada deben ser emitidos por médicos especialistas al igual que las eximiciones.<br></br><br></br>
      </p>
      </div>
      </div>

      <div className="py-5 divide-y-2 divide-usm-blue">
        <h1 className="text-3xl ">Servicio Dental</h1>
        
        <div>
          <p className="py-5 px-20">
            El Servicio Dental de la Dirección de Relaciones Estudiantiles, está dispuesto para todos los integrantes 
            de pregrado de nuestra Universidad, que sean estudiantes diurnos, regulares y matriculados. <br></br>
            Estamos para recibir urgencias, realizamos variados tratamientos y en casos de mayor complejidad hacemos las derivaciones correspondientes.
          </p>
          <h1 className="text-2xl text-usm-blue">Tratamientos</h1>
            <p className="py-5 px-20">
              <div className="divide-y-2">
                <p className="text-lg ">Examen de salud gratuito</p>
                <p>Consiste en una evaluación y revisión del estado de salud bucal actual. Se entregan las indicaciones del procedimiento a seguir en cuanto a tratamiento.</p>
              </div>

              <div className="divide-y-2">
                <p className="text-lg ">Urgencias</p>
                <p>Se revisan casos de alumnos que presenten alguna dolencia o hayan sufrido algún traumatismo dental.</p>
              </div>

              <div className="divide-y-2">
                <p className="text-lg ">Destartraje y profilaxis</p>
                <p>Limpieza de todas las piezas dentarias.</p>
              </div>

              <div className="divide-y-2">
                <p className="text-lg ">Obturaciones de resina (tapaduras estéticas)</p>
                <p>Se realiza con objetivo de reparar un diente que tiene caries, está estrellado, tiene fracturas, etc. La parte afectada será removida y luego rellenada con resina.</p>
              </div>
              
              <div className="divide-y-2">
                <p className="text-lg ">Endodoncia de dientes anteriores y premolares (tratamiento conducto)</p>
                <p>Tratamiento radicular o de raíz en caso de que la carie sea muy profunda.</p>
              </div>

              <div className="divide-y-2">
                <p className="text-lg ">Extracción simple</p>
                <p>Retiro de piezas dentarias. Dicho procedimiento se realiza cuando no son factibles los demás procedimientos de curación del diente.</p>
              </div>

              <div className="divide-y-2">
                <p className="text-lg ">Extracciones complejas</p>
                <p>Extracciones de las muelas del juicio (previa evaluación).</p>
              </div>

            </p>
        </div>
      </div>
      </PageContent>

    </>
  );
};
 */