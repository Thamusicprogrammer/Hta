import React, { useRef } from "react";

const SponsorSlider = () => {
  // List of sponsor images
  const sponsorImages = [
    "/HONEY.png",
    "/lsetf.png",
    "/usdf.jpeg",
    "/ishk.png",
    "/par1.png",
    "/par5.png",
  ];

  // Ref to control the animation
  const sliderRef = useRef(null);

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = "running";
    }
  };

  // Duplicate the images to create a smooth loop
  const repeatedImages = [...sponsorImages, ...sponsorImages];

  return (
    <div className="w-full py-6 bg-gray-100 overflow-hidden">
      {/* Professionally styled title */}
      <div className="text-center mb-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c9e] tracking-wide">
          Our Trusted Sponsors
        </h2>
        <p className="text-sm md:text-xl text-gray-700 mt-2">
          We are honored to be supported by these outstanding organizations.
        </p>
      </div>

      {/* Moving Slider */}
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={sliderRef}
          className="flex animate-scroll whitespace-nowrap"
        >
          {repeatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sponsor ${index + 1}`}
              className="object-contain w-24 h-24 mx-6 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(-100%);
          }
          50.01% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite; /* Adjusted speed for smoother transition */
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
};

export default SponsorSlider;
