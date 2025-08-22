import AmanitaCard from "@/components/AmanitaCard";

export default function HomeBody() {
  const cards = [
    {
      src: "/spin.png",
      title: "Spinnersonic",
      subtitle: "A fidget spinner based game",
    },
    {
      src: "/spell.png",
      title: "Spellcheck",
      subtitle: "A fast-paced spelling game",
    },
    {
      src: "/doom.png",
      title: "Doomlane",
      subtitle: "Now available on App Store and Google Play",
    },
  ];

  return (
    <div className="min-h-screen px-5  md:px-8 lg:px-10">
      <div className="mx-auto max-w-full flex items-center justify-center">
        <div className="grid grid-cols-1 gap-x- gap-y-2 md:grid-cols-2 lg:grid-cols-3 xl:w-[70%] w-full gap-x-4">
          {cards.map((card, index) => (
            <div className="w-full">
                <AmanitaCard
                  key={index}
                  src={card.src}
                  title={card.title}
                  subtitle={card.subtitle}
                />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
