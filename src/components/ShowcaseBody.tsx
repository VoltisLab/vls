import ShowcaseSlider from "@/components/ShowcaseSlider";

export default function ShowcaseBody() {
  const slides = [
    { src: "/spinner.png", caption: "Spinnersonic" },
    { src: "/image.png", caption: "Spell Check" },
    { src: "/image1.png", caption: "Doom Lane" },
    // { src: "/triangle.png", caption: "Triangle Chess" },
  ];

   const slides1 = [
    { src: "/spinnerMobile.png", caption: "Spinnersonic" },
    { src: "/spellMobile.png", caption: "Spell Check" },
    { src: "/doomMobile.png", caption: "Doom Lane" },
    // { src: "/triangle.png", caption: "Triangle Chess" },
  ];

  return (
    <div className="min-h-fit flex w-full md:px-5">
      <div className="w-full md:block hidden">
        <ShowcaseSlider slides={slides} intervalMs={3000} />
      </div>

        <div className="w-full md:hidden block">
        <ShowcaseSlider slides={slides1} intervalMs={3000} />
      </div>
    </div>
  );
}
