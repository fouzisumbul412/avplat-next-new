"use client";

type PageHeroProps = {
  title: string;
  image: string;
  overlayOpacity?: number;
};

export default function PageHero({
  title,
  image,
  overlayOpacity = 0.5,
}: PageHeroProps) {
  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-4">
        <h1 className="text-white text-3xl md:text-4xl font-semibold">
          {title}
        </h1>
      </div>
    </section>
  );
}