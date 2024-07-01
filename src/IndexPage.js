import React from "react";
import { Link } from "react-router-dom";
import RetroWindowWrapper from "./RetroWindowWrapper";

const IndexPage = () => {
  const images = [
    { id: 1, src: "/api/placeholder/150/150", alt: "Yarn sample 1" },
    { id: 2, src: "/api/placeholder/150/150", alt: "Yarn sample 2" },
    { id: 3, src: "/api/placeholder/150/150", alt: "Yarn sample 3" },
    { id: 4, src: "/api/placeholder/150/150", alt: "Yarn sample 4" },
    { id: 5, src: "/api/placeholder/150/150", alt: "Yarn sample 5" },
  ];

  return (
    <RetroWindowWrapper activeTab="Index">
      <div className="grid grid-cols-4 gap-4 mb-4">
        {images.slice(0, 4).map((img) => (
          <Link key={img.id} to={`/recipe/${img.id}`}>
            <div className="aspect-square overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Link to={`/recipe/${images[4].id}`}>
          <div className="aspect-square overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </RetroWindowWrapper>
  );
};

export default IndexPage;
