export default function ButtonsLinks() {
  return (
    <div className="mx-auto mt-16 flex gap-y-10 flex-col justify-center items-center">
      <a
        className="rounded-3xl px-6 py-3 lg:leading-8 text-2xl lg:text-3xl bg-[#3B3B3B] hover:bg-amber-300 text-[#F8FBFF] hover:text-[#3B3B3B] transition-all duration-200 ease-in-out shadow-lg drop-shadow-lg"
        href="https://devjeffrey25.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Suscribete a la Newsletter
      </a>
      <a
        className="rounded-3xl px-6 py-3 lg:leading-8 text-xl lg:text-3xl  bg-[#3B3B3B] hover:bg-purple-300 text-[#F8FBFF] hover:text-[#3B3B3B] transition-all duration-200 ease-in-out shadow-lg drop-shadow-lg"
        href="https://drive.google.com/file/d/16cyc0VsTUleq4Y2wigHbkcEST1cSflHl/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        E-book 3 Técnicas de Aprendizaje
      </a>
      <a
        className="rounded-3xl px-6 py-3 lg:leading-8 text-2xl lg:text-3xl  bg-[#3B3B3B] hover:bg-sky-300 text-[#F8FBFF] hover:text-[#3B3B3B] transition-all duration-200 ease-in-out shadow-lg drop-shadow-lg"
        href="https://newgendev.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desarrollo web para tu Negocio
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
