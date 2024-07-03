import React from "react";
import RetroWindowWrapper from "./RetroWindowWrapper";
import DottedBox from "./DottedBox";

const ProcessPage = () => {
  return (
    <RetroWindowWrapper activeTab="Process">
      <div className="p-4 overflow-y-auto h-[calc(100%-2rem)]">
        <DottedBox title="Our Process">
          <ol className="list-decimal list-inside text-sm space-y-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
              vehicula.
            </li>
            <li>
              Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </li>
            <li>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor.
            </li>
            <li>
              Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis
              porttitor posuere.
            </li>
          </ol>
        </DottedBox>
      </div>
    </RetroWindowWrapper>
  );
};

export default ProcessPage;
