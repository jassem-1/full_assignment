"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import collage1 from "../assets/images/collage1.svg";
import collage2 from "../assets/images/collage2.png";

import collage3 from "../assets/images/collage3.png";

type ContentKey = "Food Photography" | "Wedding Photoshoot" | "Product Art";

const contentMap: Record<
  ContentKey,
  { title: string; paragraph: string; image: StaticImageData }
> = {
  "Food Photography": {
    title: "Food Photography",
    paragraph:
      "Transforming culinary creations into visual masterpieces, our food photography captures the essence of flavor, texture, and presentation. Perfect for restaurants, cookbooks, or food brands looking to make an unforgettable impression.",
    image: collage1,
  },
  "Wedding Photoshoot": {
    title: "Wedding Photoshoot",
    paragraph:
      "Celebrate the most cherished moments of your life with our wedding photography. Our experienced photographers blend creativity and technical skill to craft timeless images that tell your love story. From intimate candids to grand portraits, we ensure every shot reflects the magic of your special day.",
    image: collage2,
  },
  "Product Art": {
    title: "Product Art",
    paragraph:
      "Bring your products to life with stunning visuals that capture their essence. Our product photography highlights the unique features and craftsmanship of your items, making them irresistible to customers. Ideal for advertising campaigns, e-commerce platforms, and promotional materials.",
    image: collage3,
  },
};

type DynamicContentProps = {
  content: {
    title: string;
    paragraph: string;
    image: StaticImageData[];
  };
};

function DynamicContent({ content }: DynamicContentProps) {
  const { title, paragraph, image } = content;

  return (
    <div className="flex flex-col sm:flex-row items-center p-2 md:p-6 rounded-lg shadow-sm gap-8 h-60">
      <div className="lg:w-full w-2/3 ">
        <Image
          src={image}
          alt={`${title} `}
          className="object-cover rounded-lg"
          width={200}
          height={300}
        />
      </div>

      <div className="flex flex-col justify-center items-start">
        <h3 className="text-sm font-medium text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 text-xs font-normal mb-6">{paragraph}</p>
      </div>
    </div>
  );
}
function Offer() {
  const [activeItem, setActiveItem] = useState<string>("Food Photography");

  const items = ["Food Photography", "Wedding Photoshoot", "Product Art"];

  return (
    <section
      id="services"
      className="w-full md:mb-20 max-w-5xl mx-auto p-3 sm:p-6 md:p-8 flex flex-col  items-start md:pb-0 pb-20 md:flex-row jost-font gap-6"
    >
      <div className="flex-1">
        <h2 className="text-3xl font-semibold text-gray-800">What I Offer</h2>
        <p className="text-lg text-gray-600 mt-2">
          Creative solutions to bring your vision to life
        </p>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className={`cursor-pointer flex text-lg font-medium  items-center gap-4 text-gray-700 hover:text-gray-900 transition ${
                activeItem === item ? "text-violet-500" : ""
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
              {activeItem === item ? (
                <div className="border-t border-violet-500 w-20 border-[1.5px] ">
                  {" "}
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 pt-6">
        <DynamicContent content={contentMap[activeItem]} />
      </div>
    </section>
  );
}

export default Offer;
