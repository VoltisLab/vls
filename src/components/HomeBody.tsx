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
    {
      src: "/spin.png",
      title: "8 Balls Pool",
      subtitle: "Play the classic pool game with friends or online opponents.",
    },
    {
      src: "/triangle.png",
      title: "Triangle Chess",
      subtitle: "A strategic twist on chess played on a triangular board.",
    },
    {
      src: "/doom.png",
      title: "Penalty Shootout",
      subtitle: "Test your skills in a thrilling football penalty shootout.",
    },
  ];

  return (
    <div className="min-h-screen w-full md:px-5">
      <div className="w-full py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full">
          {cards.map((card, index) => (
            <AmanitaCard
              key={index}
              src={card.src}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}