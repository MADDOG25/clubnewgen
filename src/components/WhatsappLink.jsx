export default function WhatsappLink() {
  return (
    <div className="mt-10">
      <a
        href="https://chat.whatsapp.com/Lno8Y7HJO8WJCDWx93AyCc"
        target="_blank"
        className="inline-flex items-center justify-center p-5 text-base font-medium text-white rounded-lg bg-purple-800 hover:bg-green-600"
      >
        <img src="/planet-icon.png" className="h-8 pr-2" />
        <span className="w-full text-base lg:text-2xl">
          Unirse a la Sala NewGen
        </span>
        <svg
          className="w-4 h-4 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
