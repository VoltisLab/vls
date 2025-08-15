import ShowcaseSlider from "@/components/ShowcaseSlider";

export default function ShowcaseBody() {
  const slides = [
    { src: "/img1.jpg", caption: "Creaks Box" },
    { src: "/img2.jpg", caption: "Phonopolis" },
    { src: "/img3.jpg", caption: "Pilgrims" },
    { src: "/img4.jpg", caption: "Happy Game" },
  ];

  return (
    <div className="min-h-fit flex items-center justify-center w-full  ">
      <ShowcaseSlider slides={slides} intervalMs={3000} />
    </div>
  );
}
