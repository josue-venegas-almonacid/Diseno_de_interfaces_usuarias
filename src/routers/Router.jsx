import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {NavBar} from "../components/NavBar.jsx";
import {Home} from "../pages/Home.jsx";
import {NotFound} from "../pages/NotFound.jsx";
import {Noticias} from "../pages/publicaciones/Noticias.jsx";
import {Boletines} from "../pages/publicaciones/Boletines.jsx";
import {Documentos} from "../pages/publicaciones/Documentos.jsx";
import {AtencionPrimaria} from "../pages/beneficios-estudiantiles/AtencionPrimaria.jsx";
import {AtencionPsicologica} from "../pages/beneficios-estudiantiles/AtencionPsicologica.jsx";
import {AtencionKinesiologica} from "../pages/beneficios-estudiantiles/AtencionKinesiologica.jsx";
import {PrimerosAuxilios} from "../pages/beneficios-estudiantiles/PrimerosAuxilios.jsx";
import {SeguroDeAccidentes} from "../pages/beneficios-estudiantiles/SeguroDeAccidentes.jsx";
import {AtencionDental} from "../pages/beneficios-estudiantiles/AtencionDental.jsx";
import {ConsejosSobreCuidados} from "../pages/beneficios-estudiantiles/ConsejosSobreCuidados.jsx";
import {BeneficiosJunaeb} from "../pages/beneficios-estudiantiles/BeneficiosJunaeb.jsx";
import {BeneficiosUsm} from "../pages/beneficios-estudiantiles/BeneficiosUsm.jsx";
import {CreditoCae} from "../pages/beneficios-estudiantiles/CreditoCae.jsx";
import {IniciativasEstudiantiles} from "../pages/programas-universitarios/IniciativasEstudiantiles.jsx";
import {EquidadDeGeneroEInclusion} from "../pages/programas-universitarios/EquidadDeGeneroEInclusion.jsx";
import {UniversidadSaludable} from "../pages/programas-universitarios/UniversidadSaludable.jsx";
import {QuienesSomos} from "../pages/sobre-nosotros/QuienesSomos.jsx";
import {Contacto} from "../pages/sobre-nosotros/Contacto.jsx";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/publicaciones">
          <Route path="noticias" element={<Noticias />} />
          <Route path="boletines" element={<Boletines />} />
          <Route path="documentos" element={<Documentos />} />
        </Route>

        <Route path="/beneficios-estudiantiles">
          <Route path="atencion-primaria" element={<AtencionPrimaria />} />
          <Route
            path="atencion-psicologica"
            element={<AtencionPsicologica />}
          />
          <Route
            path="atencion-kinesiologica"
            element={<AtencionKinesiologica />}
          />
          <Route path="primeros-auxilios" element={<PrimerosAuxilios />} />
          <Route path="seguro-de-accidentes" element={<SeguroDeAccidentes />} />

          <Route path="atencion-dental" element={<AtencionDental />} />
          <Route
            path="consejos-sobre-cuidados"
            element={<ConsejosSobreCuidados />}
          />

          <Route path="beneficios-junaeb" element={<BeneficiosJunaeb />} />
          <Route path="beneficios-usm" element={<BeneficiosUsm />} />
          <Route path="credito-cae" element={<CreditoCae />} />
        </Route>

        <Route path="/vida-universitaria">
          <Route
            path="iniciativas-estudiantiles"
            element={<IniciativasEstudiantiles />}
          />
          <Route
            path="equidad-de-genero-e-inclusion"
            element={<EquidadDeGeneroEInclusion />}
          />
          <Route
            path="universidad-saludable"
            element={<UniversidadSaludable />}
          />
        </Route>

        <Route path="/sobre-nosotros">
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
