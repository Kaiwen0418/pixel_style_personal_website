import React from "react";
import { useParams } from "react-router-dom";
import RetroWindowWrapper from "../RetroWindowWrapper";
import { projData,iconList } from "../../data/data";
import DottedBox from "../DottedBox";

const DesktopProjDetailsPage = () => {
  const { id } = useParams();
  const proj = projData[id];

  if (!proj) {
    return (
      <RetroWindowWrapper activeTab="Project">
        proj not found
      </RetroWindowWrapper>
    );
  }

  return (
    <RetroWindowWrapper activeTab="Project">
      {/* Main content */}
      <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
        <DottedBox
          className="w-1/2"
          title={proj.name}
          subtitle={proj.brief}
          paddingTop="pt-14"
          titleSize="text-2xl"
        >
          <div className="mb-4 flex justify-center space-x-4">
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={proj.images.gif}
                alt={`${proj.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={proj.images.overview}
                alt={`${proj.name}`}
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
                    <td className="text-left text-xs">{value}</td>
                  </tr>
                ))}
                <tr key={'tech'} className="mt-2">
                  <td className="text-right pr-2">{'Tech-stack:'}</td>
                  <td className="text-left ">                
                      <div className="grid grid-cols-4 gap-2 mt-2">
                          {iconList.map((icon, index) => (
                              <img key={index} src={icon} alt="Icon" className="w-5 h-5 " />
                          ))}
                      </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </DottedBox>

        <div className="w-1/2 space-y-4 h-full flex-col flex justify-between">
          <DottedBox title="Introduction">
            <p className="text-sm text-left p-2">{proj.description}</p>
          </DottedBox>

          <DottedBox title="Notes">
            <p className="text-xs text-left p-2">{proj.projectHighlights}</p>
          </DottedBox>

          <div className="flex space-x-4">
            <button className="border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              View on Github
            </button>
            <button className="border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              Share 
            </button>
          </div>
        </div>
      </div>
    </RetroWindowWrapper>
  );
};

export default DesktopProjDetailsPage;
