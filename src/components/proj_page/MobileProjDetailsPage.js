import React from "react";
import { useParams } from "react-router-dom";
import { projData } from "../../data/data";
import DottedBox from "../DottedBox";
import RetroWindowWrapper from "../RetroWindowWrapper";

const MobileProjDetailsPage = () => {
  const { id } = useParams();
  const proj = projData[id];

  if (!proj) {
    return <div>proj not found</div>;
  }

  return (
    <div className="bg-white min-h-screen p-4 font-mono">
      <h1 className="text-2xl font-bold mb-4 text-center">{proj.name}</h1>
      <p className="text-sm italic mb-4 text-center">{proj.scientificName}</p>

      <div className="space-y-4">
        <div className="flex flex-col items-center space-y-4 pb-4">
          <div className="w-full aspect-square max-w-xs overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <img
              src={proj.images.plant}
              alt={`${proj.name} plant`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-square max-w-xs overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <img
              src={proj.images.color}
              alt={`${proj.name} color`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <DottedBox title="Details">
          <table className="w-full text-sm">
            <tbody>
              {proj.details.map(([label, value]) => (
                <tr key={label}>
                  <td className="text-right pr-4 font-bold">{label}</td>
                  <td className="text-left">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DottedBox>

        <DottedBox title="Identification">
          <p className="text-sm">{proj.identification}</p>
        </DottedBox>

        <DottedBox title="Batch Notes">
          <p className="text-sm">{proj.batchNotes}</p>
        </DottedBox>

        <div className="flex flex-col space-y-2">
          <button className="w-full border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            I've Dyed It!
          </button>
          <button className="w-full border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            Share Your Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileProjDetailsPage;
