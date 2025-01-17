export default function HeroLanding() {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6 sm:px-10">
      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10">
        Mi Historia
      </h2>
      <div className="mb-28 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna de texto */}
        <div className="text-start text-lg sm:text-2xl">
          <p className="mt-20 text-3xl font-semibold mb-6">2017</p>
          <ul className="list-disc pl-5 space-y-4 font-medium text-gray-600">
            <li>-20$ dolares en la cartera</li>
            <li>Delgado sin confianza y seguridad en mi mismo pesando 60kg</li>
            <li>1 solo trabajo profesional de call center por 7 meses</li>
            <li>Depresivo</li>
            <li>Vicios con las drogas, alcohol, videojuegos, porno</li>
            <li>Perseguir a las mujeres</li>
            <li>Sin identidad ni opinión propia</li>
            <li>Inestabilidad emocional</li>
            <li>Sin propósito</li>
            <li>Perseguir el dinero</li>
            <li>Sin disciplina ni carácter</li>
            <li>Mala situación financiera</li>
          </ul>
        </div>

        {/* Columna de imagen */}
        <div className="flex justify-center">
          <figure className="w-full max-w-sm">
            <img
              src="/fotomia.jpg"
              alt="Imagen de Jeffrey Morgan del 2022"
              className="w-full h-auto object-cover rounded-md"
            />
            <figcaption className="text-center text-base sm:text-lg font-medium text-gray-600 mt-4">
              Fotografía:{" "}
              <a
                href="https://www.instagram.com/devjeffrey25/"
                className="text-purple-500 hover:underline"
              >
                Jeffrey Morgan
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna de texto */}
        <div className="order-2 text-start text-lg sm:text-2xl">
          <p className="mt-10 text-3xl font-semibold mb-6">2025</p>
          <ul className="list-disc pl-5 space-y-4 font-medium text-gray-600">
            <li>Respetado por Todos</li>
            <li>No fallo a mi Palabra</li>
            <li>Delgado sin confianza y seguridad en mi mismo</li>
            <li>Profesor de Informatica</li>
            <li>Dando fe al mundo en redes</li>
            <li>0 Vicios</li>
            <li>Con proposito</li>
            <li>Propia Identidad y Opinion Propia</li>
            <li>Seguridad Emocional</li>
            <li>Desapego a lo material</li>
            <li>Disciplina, Constante</li>
            <li>Aumentando economia</li>
          </ul>
        </div>

        {/* Columna de imagen */}
        <div className="order-1 flex justify-center">
          <figure className="w-full max-w-sm">
            <img
              src="/cap de ig.png"
              alt="Imagen de Jeffrey Morgan del 2022"
              className="w-full h-auto object-cover rounded-md"
            />
            <figcaption className="text-center text-base sm:text-lg font-medium text-gray-600 mt-4">
              Fotografía:{" "}
              <a
                href="https://www.instagram.com/devjeffrey25/"
                className="text-purple-500 hover:underline"
              >
                Jeffrey Morgan
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
