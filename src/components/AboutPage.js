import React from "react";
import RetroWindowWrapper from "./RetroWindowWrapper";
import DottedBox from "./DottedBox";

const AboutPage = () => {
  return (
    <RetroWindowWrapper activeTab="About">
      <div className="p-4 overflow-y-auto h-[calc(100%-2rem)]">
        <DottedBox title="Artist Statement">
          <p className="text-sm mb-4">
            My work explores the modern relationship between humans and native
            ecosystems. Both intentionally and inadvertently, human movement has
            introduced invasive species into new environments. Often these
            species were brought for their inherit value: Garlic Mustard is a
            delicious cooking herb, English Ivy is a beautiful material to make
            soap. Many of our introduced plants thrive and out-compete native
            plants, through no fault of their own. And now both we and our
            native landscapes coexist with them in a new relationship. We walk
            past hundreds of species of plants in a daily routine, not knowing
            their names or their native homes. We have no ability to recognize a
            native plant from an invasive one, green is green.
          </p>
          <p className="text-sm">
            How can we encourage responsibility for environmental restoration?
            And can we bring joy and curiosity to the process? Environmental
            restoration is essential to protect biodiversity. Biodiversity is
            essential to creating a climate-change resilient environment.
          </p>
        </DottedBox>
      </div>
    </RetroWindowWrapper>
  );
};

export default AboutPage;
