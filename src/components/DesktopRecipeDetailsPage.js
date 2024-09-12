import React from "react";
import { useParams } from "react-router-dom";
import RetroWindowWrapper from "./RetroWindowWrapper";
import { projData } from "../data/data";
import DottedBox from "./DottedBox";

const DesktopProjDetailsPage = () => {
  const { id } = useParams();
  const proj = projData[id];

  if (!proj) {
    return <div>proj not found</div>;
  }

  return (
    <RetroWindowWrapper activeTab="Index">
      {/* Main content */}
      <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
        <DottedBox
          className="w-1/2"
          title={proj.name}
          subtitle={proj.scientificName}
          paddingTop="pt-14"
          titleSize="text-3xl"
        >
          <div className="mb-4 flex justify-center space-x-4">
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={proj.images.color}
                alt={`${proj.name} color`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={proj.images.plant}
                alt={`${proj.name} plant`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <table className="text-sm">
              <tbody>
                {proj.details.map(([label, value]) => (
                  <tr key={label}>
                    <td className="text-right pr-4">{label}</td>
                    <td className="text-left">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DottedBox>

        <div className="w-1/2 space-y-4">
          <DottedBox title="Identification">
            <p className="text-sm text-left">{proj.identification}</p>
          </DottedBox>

          <DottedBox title="Batch Notes">
            <p className="text-sm text-left">{proj.batchNotes}</p>
          </DottedBox>

          <div className="flex space-x-4">
            <button className="border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              I've Dyed It!
            </button>
            <button className="border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              Share Your Results
            </button>
          </div>
        </div>
      </div>

      {/* Scrollbar */}
      <div className="absolute right-0 top-8 bottom-0 w-4 bg-gray-200 border-l-2 border-black">
        <div className="w-full h-8 bg-gray-400 border-2 border-black"></div>
      </div>
    </RetroWindowWrapper>
  );
};

export default DesktopProjDetailsPage;
