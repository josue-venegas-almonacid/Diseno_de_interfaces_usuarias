import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Noticias } from "../pages/publicaciones/Noticias";
import { Boletines } from "../pages/publicaciones/Boletines";
import { Documentos } from "../pages/publicaciones/Documentos";
import { AtencionPrimaria } from "../pages/beneficios-estudiantiles/AtencionPrimaria";
import { AtencionPsicologica } from "../pages/beneficios-estudiantiles/AtencionPsicologica";
import { AtencionKinesiologica } from "../pages/beneficios-estudiantiles/AtencionKinesiologica";
import { PrimerosAuxilios } from "../pages/beneficios-estudiantiles/PrimerosAuxilios";
import { SeguroDeAccidentes } from "../pages/beneficios-estudiantiles/SeguroDeAccidentes";
import { AtencionDental } from "../pages/beneficios-estudiantiles/AtencionDental";
import { ConsejosSobreCuidados } from "../pages/beneficios-estudiantiles/ConsejosSobreCuidados";
import { BeneficiosJunaeb } from "../pages/beneficios-estudiantiles/BeneficiosJunaeb";
import { BeneficiosUsm } from "../pages/beneficios-estudiantiles/BeneficiosUsm";
import { CreditoCae } from "../pages/beneficios-estudiantiles/CreditoCae";
import { IniciativasEstudiantiles } from "../pages/programas-universitarios/IniciativasEstudiantiles";
import { EquidadDeGeneroEInclusion } from "../pages/programas-universitarios/EquidadDeGeneroEInclusion";
import { UniversidadSaludable } from "../pages/programas-universitarios/UniversidadSaludable";
import { QuienesSomos } from "../pages/sobre-nosotros/QuienesSomos";
import { Contacto } from "../pages/sobre-nosotros/Contacto";

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
