export default function FooterLanding() {
  return (
    <footer className="bg-purple-800 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://clubnewgen.vercel.app/"
            target="_blank"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/planet-icon.png"
              className="h-10"
              alt="Club NewGen Logo"
              title="Club NewGen"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Club NewGen
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a
                href="/politicadeprivacidad"
                className="hover:underline me-4 md:me-6"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href="/condicionesdeservicio"
                className="hover:underline me-4 md:me-6"
              >
                Condiciones de Servicio
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2025{" "}
          <a
            href="https://www.instagram.com/devjeffrey25"
            target="_blank"
            className="hover:underline"
          >
            DevJeffrey™
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
