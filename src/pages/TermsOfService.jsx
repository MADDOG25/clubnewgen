export default function TermsOfService() {
  return (
    <div className="bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Condiciones del Servicio
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Bienvenido a Club NewGen. Al utilizar nuestros servicios, aceptas las
          siguientes condiciones. Te recomendamos leerlas detenidamente.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Uso de nuestros servicios
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Debes ser mayor de edad o tener el consentimiento de tus padres o
              tutores legales para utilizar nuestra plataforma.
            </li>
            <li>
              No puedes utilizar nuestros servicios para actividades ilícitas o
              no autorizadas.
            </li>
            <li>
              Respetarás los derechos de propiedad intelectual y las normas de
              nuestra comunidad.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Modificaciones
          </h2>
          <p className="text-gray-600">
            Club NewGen se reserva el derecho de modificar estas condiciones en
            cualquier momento. Notificaremos a los usuarios sobre cambios
            importantes mediante correo electrónico o actualizaciones en nuestra
            plataforma.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contacto
          </h2>
          <p className="text-gray-600">
            Si tienes preguntas sobre nuestras Condiciones del Servicio, por
            favor contáctanos en{" "}
            <a
              href="mailto:contacto@mdog1525@gmail.com"
              className="text-purple-500 hover:underline"
            >
              mdog1525@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
