export default function Header() {
  return (
    <div className="mx-auto m-10 flex flex-col justify-center items-center md:max-w-2xl lg:max-w-4xl">
      <img
        width={200}
        height={200}
        src="/planet-icon.png"
        alt="logo club newgen"
      />
      <h1 className="text-center text-5xl md:text-6xl lg:text-7xl">
        Bienvenido al Club NewGen
      </h1>
    </div>
  );
}
