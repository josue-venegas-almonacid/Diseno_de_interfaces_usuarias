import imagenUSM from "../assets/demo1.jpg";
import { MainButton } from "../components/principales/MainButton";

export const Login = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <img src={imagenUSM} className="rounded-r-xl" />
        </div>

        <div className="py-4 px-14">
          <p className="font-bold text-lg my-4">Iniciar sesión</p>

          <form className="p-4 bg-white shadow rounded-xl w-auto space-y-2 border">
            <div>
              <label>Correo electronico</label>
              <input
                className="block w-full py-2 px-3 border rounded"
                placeholder="Correo electronico"
              />
            </div>

            <div>
              <label>Contraseña</label>
              <input
                className="block w-full py-2 px-3 border rounded"
                placeholder="Contraseña"
              />
            </div>

            <a
              href="/asd"
              className="block text-sm text-blue-500 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>

            <div>
              <MainButton>Ingresar</MainButton>
            </div>

            <hr />

            <MainButton>Ingresar con Pasaporte USM</MainButton>
          </form>
        </div>
      </div>
    </div>
  );
};
