import MasonryGallery from "@/components/MasonryGallery";
import React from "react";
import pic1 from "../assets/images/1.png";
import pic2 from "../assets/images/2.png";
import pic3 from "../assets/images/3.png";
import pic4 from "../assets/images/4.png";
import pic5 from "../assets/images/5.png";
import pic6 from "../assets/images/6.png";
import pic7 from "../assets/images/7.png";
import pic8 from "../assets/images/8.png";
import pic9 from "../assets/images/9.png";
import pic10 from "../assets/images/10.png";

function MyWork() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

  return (
    <section
      id="works"
      className="w-full md:mt-20 max-w-5xl mx-auto p-3 sm:p-6 md:p-8 flex flex-col  justify-center items-center jost-font gap-6"
    >
      <h1 className="text-2xl md:text-4xl">My Work</h1>
      <h2 className="text-lg md:text-xl text-gray-500">
        A Glimpse Into My Creative World
      </h2>
      {images.length > 0 && (
        <MasonryGallery items={images.map((img) => img.src)} />
      )}
    </section>
  );
}

export default MyWork;
