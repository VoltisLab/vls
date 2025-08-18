import ShowcaseSlider from "@/components/ShowcaseSlider";

export default function ShowcaseBody() {
  const slides = [
    { src: "/spinner.png", caption: "Creaks Box" },
    { src: "/image.png", caption: "Phonopolis" },
    { src: "/image1.png", caption: "Pilgrims" },
    { src: "/img4.jpg", caption: "Happy Game" },
  ];

  return (
    <div className="min-h-fit flex items-center justify-center w-full ">
      <ShowcaseSlider slides={slides} intervalMs={3000} />
    </div>
  );
}
