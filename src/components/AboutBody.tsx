import AmanitaCard from "@/components/AmanitaCard";

export default function AboutBody() {
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
    <div className="min-h-screen px-5 w-full ">
      <div className="w-full mx-auto max-w-full flex items-center justify-between">
        <div className="w-full grid grid-cols-1 gap-y-2 lg:grid-cols-3 md:grid-cols-2 gap-x-4">
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
