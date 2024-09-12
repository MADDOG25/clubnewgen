export default function SocialLinks() {
  return (
    <div className="mx-auto mt-24 flex gap-x-12 md:gap-x-16 flex-row justify-center items-center">
      <a
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        href="https://www.instagram.com/devjeffrey25/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
        className="w-16"
          src="/instagram.png"
          alt="Instagram"
        />
      </a>
      <a
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        href="https://www.youtube.com/channel/UCd1iRrYSFA0OCMxoPqlWRKg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
        className="w-16"
          src="/youtube.png"
          alt="YouTube"
        />
      </a>
      <a
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        href="https://open.spotify.com/show/6GxEfDDVuG8yjaYlfT4073?si=b16fa0db47714a38"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
        className="w-16"
          src="/spotify.png"
          alt="Spotify"
        />
      </a>
    </div>
  );
}
