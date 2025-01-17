export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white text-center px-6 py-10 gap-y-2 grid text-xl">
      <p>2025 ClubNewGen. Todos los derechos reservados.</p>
      <p>Powered by React.js</p>
      <div className="flex gap-x-6 justify-center">
        <a
          className="hover:underline"
          href="https://www.instagram.com/devjeffrey25/"
          target="_blank"
        >
          Instagram
        </a>
        <a
          className="hover:underline"
          href="https://www.youtube.com/@devjeffrey25"
          target="_blank"
        >
          Youtube
        </a>
      </div>
    </footer>
  );
}
