import WhatsappLink from "../components/WhatsappLink";

export default function MasterClass() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-20">
      <h1 className="text-4xl font-bold text-purple-800 mb-10">
        MasterClass Gratuita
      </h1>
      <div className="w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/UB5CwNLz73c"
          title="MasterClass gratuita de Jeffrey Morgan"
          className="w-full h-full rounded-md shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <WhatsappLink />
    </div>
  );
}
