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
      subtitle: "A fast-paced British spelling challenge.",
    },
    {
      src: "/doom.png",
      title: "Doomlane",
      subtitle: "Smash zombies, dodge chaos, win XP.",
    },
    {
      src: "/triangle.png",
      title: "Triangle Chess",
      subtitle: "A strategic twist on chess played on a triangular board.",
    },
    {
      src: "",
      title: "8 Balls Pool",
      subtitle: "Play the classic pool game with friends or online opponents.",
    },
    {
      src: "",
      title: "Penalty Shootout",
      subtitle: "Test your skills in a thrilling football penalty shootout.",
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 pb-16">
      <div className="w-full md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
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
