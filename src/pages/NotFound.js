import { useEffect } from "react";

export const NotFound = () => {

  useEffect(() => {
    document.title = `Página no encontrada - Relaciones Estudiantiles UTFSM`;
  });

  return (
    <div>
      <h1>Error 404 - Página no encontrada</h1>
    </div>
  );
};
