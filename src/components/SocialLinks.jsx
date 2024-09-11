export default function SocialLinks() {
  return (
    <div className="mx-auto mt-16 flex gap-x-16 flex-row justify-center items-center">
      <a
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        href="https://www.instagram.com/devjeffrey25/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width={50}
          height={50}
          src="/src/assets/instagram.png"
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
          width={50}
          height={50}
          src="/src/assets/youtube.png"
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
          width={50}
          height={50}
          src="/src/assets/spotify.png"
          alt="Spotify"
        />
      </a>
    </div>
  );
}
