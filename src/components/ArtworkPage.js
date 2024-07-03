import React from "react";
import RetroWindowWrapper from "./RetroWindowWrapper";
import DottedBox from "./DottedBox";

const ArtworkPage = () => {
  const artwork = {
    title: "Avocado 1",
    image: "/path/to/artwork/image.jpg",
    description:
      "This is a sample artwork description. Replace with actual content.",
  };

  return (
    <RetroWindowWrapper activeTab="Artwork">
      <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
        <div className="w-1/2">
          <div className="aspect-square overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <DottedBox className="w-1/2" title={artwork.title}>
          <p className="text-sm">{artwork.description}</p>
        </DottedBox>
      </div>
    </RetroWindowWrapper>
  );
};

export default ArtworkPage;
