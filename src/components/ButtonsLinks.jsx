export default function ButtonsLinks() {
  return (
    <div className="mx-auto mt-16 flex gap-y-10 flex-col justify-center items-center">
      <a
        className="rounded-3xl px-6 py-3 lg:leading-8 text-2xl lg:text-3xl bg-[#3B3B3B] hover:bg-amber-300 text-[#F8FBFF] hover:text-[#3B3B3B] transition-all duration-200 ease-in-out shadow-lg drop-shadow-lg"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Accede a la Newsletter
      </a>
      <a
        className="rounded-3xl px-6 py-3 lg:leading-8 text-xl lg:text-3xl  bg-[#3B3B3B] hover:bg-purple-300 text-[#F8FBFF] hover:text-[#3B3B3B] transition-all duration-200 ease-in-out shadow-lg drop-shadow-lg"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        PDF 5 Técnicas de Aprendizaje
      </a>
      <a
        className="rounded-3xl px-6 py-3 lg:leading-8 text-2xl lg:text-3xl  bg-[#3B3B3B] hover:bg-sky-300 text-[#F8FBFF] hover:text-[#3B3B3B] transition-all duration-200 ease-in-out shadow-lg drop-shadow-lg"
        href="https://devjeffrey.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aquiere tu Página web
      </a>
      <a
        className="rounded-3xl px-6 py-3 lg:leading-8 text-2xl lg:text-3xl  bg-[#3B3B3B] hover:bg-indigo-300 text-[#F8FBFF] hover:text-[#3B3B3B] transition-all duration-200 ease-in-out shadow-lg drop-shadow-lg"
        href="https://discord.gg/bDC8ZzexxK"
        target="_blank"
        rel="noopener noreferrer"
      >
        Unirse al Club
      </a>
    </div>
  );
}
