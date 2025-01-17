export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Políticas de Privacidad
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          En Club NewGen, valoramos tu privacidad y estamos comprometidos con
          proteger tus datos personales. Esta política describe cómo
          recopilamos, usamos y protegemos tu información.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Información que recopilamos
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Datos proporcionados al registrarte, como nombre y correo
              electrónico.
            </li>
            <li>
              Información generada por tu uso de nuestros servicios, como
              interacciones y preferencias.
            </li>
            <li>
              Datos técnicos como dirección IP, tipo de dispositivo y sistema
              operativo.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cómo usamos tu información
          </h2>
          <p className="text-gray-600">
            La información que recopilamos se utiliza para:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Ofrecerte nuestros servicios y personalizar tu experiencia.</li>
            <li>Mejorar y optimizar nuestro sitio web y contenido.</li>
            <li>
              Enviar actualizaciones, promociones y comunicaciones importantes.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contacto
          </h2>
          <p className="text-gray-600">
            Si tienes preguntas o inquietudes sobre nuestras Políticas de
            Privacidad, contáctanos en{" "}
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
