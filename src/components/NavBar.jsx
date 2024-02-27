import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <div>
      <nav className="px-4 py-4 flex items-center justify-between border shadow-xl">
        <div className="w-72">
          <Link to="/">
            <img
              alt="Logo UTFSM"
              src="/usm_logo.png"
            />
          </Link>
        </div>

        <div className="flex space-x-4 mr-8">
          <NavbarLinkHome to="/" end={true}>
            Inicio
          </NavbarLinkHome>

          <NavBarMenu title="Publicaciones" match="publicaciones" dropDown>
            <NavbarLink to="publicaciones/noticias">Noticias</NavbarLink>
            <NavbarLink to="publicaciones/boletines">Boletines</NavbarLink>
            <NavbarLink to="publicaciones/documentos">Documentos</NavbarLink>
          </NavBarMenu>

          <NavBarMenu
            title="Beneficios estudiantiles"
            match="beneficios-estudiantiles"
            dropDown
          >
            <div className="grid grid-cols-3 space-x-8">
              <div className="flex flex-col">
                <p className="font-bold mb-2 border-b border-black">
                  Servicios médicos
                </p>
                <div className="flex flex-col gap-3">
                  <NavbarLink to="beneficios-estudiantiles/atencion-primaria">
                    Atención primaria
                  </NavbarLink>
                  <NavbarLink to="beneficios-estudiantiles/atencion-psicologica">
                    Atención psicológica
                  </NavbarLink>
                  <NavbarLink to="beneficios-estudiantiles/atencion-kinesiologica">
                    Atención kinesiológica
                  </NavbarLink>
                  <NavbarLink to="beneficios-estudiantiles/primeros-auxilios">
                    Primeros auxilios
                  </NavbarLink>
                  <NavbarLink to="beneficios-estudiantiles/seguro-de-accidentes">
                    Seguro de accidentes
                  </NavbarLink>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold mb-2 border-b border-black">
                  Servicios dentales
                </p>
                <div className="flex flex-col gap-3">
                  <NavbarLink to="beneficios-estudiantiles/atencion-dental">
                    Atención dental
                  </NavbarLink>
                  <NavbarLink to="beneficios-estudiantiles/consejos-sobre-cuidados">
                    Consejos sobre cuidados
                  </NavbarLink>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="font-bold mb-2 border-b border-black">
                  Becas y créditos
                </p>
                <div className="flex flex-col gap-3">
                  <NavbarLink to="beneficios-estudiantiles/beneficios-junaeb">
                    Beneficios JUNAEB
                  </NavbarLink>
                  <NavbarLink to="beneficios-estudiantiles/beneficios-usm">
                    Beneficios USM
                  </NavbarLink>
                  <NavbarLink to="beneficios-estudiantiles/credito-cae">
                    Crédito CAE
                  </NavbarLink>
                </div>
              </div>
            </div>
          </NavBarMenu>

          <NavBarMenu
            title="Vida Universitaria"
            match="programas-universitarios"
            dropDown
          >
            <NavbarLink to="vida-universitaria/iniciativas-estudiantiles">
              Iniciativas estudiantiles
            </NavbarLink>
            <NavbarLink to="vida-universitaria/equidad-de-genero-e-inclusion">
              Equidad de género e inclusión
            </NavbarLink>
            <NavbarLink to="vida-universitaria/universidad-saludable">
              Universidad saludable
            </NavbarLink>
          </NavBarMenu>

          <NavBarMenu title="Sobre nosotros" match="sobre-nosotros" dropDown>
            <NavbarLink to="sobre-nosotros/quienes-somos">
              Quiénes somos
            </NavbarLink>
            <NavbarLink to="sobre-nosotros/contacto">Contacto</NavbarLink>
          </NavBarMenu>
        </div>
      </nav>
    </div>
  );
};

function NavBarTitle({ title, matchTo }) {
  const resolved = useResolvedPath(matchTo);
  const match = useMatch({ path: resolved.pathname, end: false });
  return (
    <Link
      to={"#"}
      className={`${
        match !== null ? "text-usm-blue" : ""
      } group-hover:text-usm-blue whitespace-nowrap font-semibold`}
    >
      {title}
      <span>
        <FontAwesomeIcon icon={faAngleDown} className="align-middle ml-2" />
      </span>
    </Link>
  );
}

function NavbarLinkHome({ children, to, end = false }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end });
  return (
    <Link
      to={to}
      className={`${
        match !== null ? "text-usm-blue" : ""
      } hover:text-usm-blue whitespace font-semibold`}
    >
      {children}
    </Link>
  );
}

function NavbarLink({ children, to, end = false }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end });
  return (
    <Link
      to={to}
      className={`${
        match !== null ? "text-usm-blue" : ""
      } hover:text-usm-blue whitespace`}
    >
      {children}
    </Link>
  );
}

function NavBarMenu({ title, children, match }) {
  return (
    <div className="group z-10">
      <NavBarTitle title={title} matchTo={match} />
      <div className="border gap-3 hidden absolute p-4 bg-white rounded-lg shadow-lg group-hover:flex flex-col">
        {children}
      </div>
    </div>
  );
}
