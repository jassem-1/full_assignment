import React from "react";

interface MasonryGalleryProps {
  items: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((image, index) => (
        <div
          key={index}
          className={`grid-item ${
            index % 4 === 1 ? "grid-item--width2" : "" // Example custom sizing
          } ${index % 3 === 2 ? "grid-item--height2" : ""}`}
        >
          <img
            src={image}
            alt={`Gallery ${index}`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
