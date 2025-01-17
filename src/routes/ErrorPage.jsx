import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center grid items-center" id="error-page">
      <h1 className="text-4xl">Oops!</h1>
      <p className="text-2xl">Pagina no encontrada</p>
      <p className="text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
