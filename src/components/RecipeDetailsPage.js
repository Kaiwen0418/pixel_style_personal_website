import React, { useState } from "react";
import { X, Minus, Square } from "lucide-react";

const RetroPlantInfo = () => {
  const [activeTab, setActiveTab] = useState("Index");

  const menuItems = ["Index", "Process", "About", "Contribute"];

  const DottedBox = ({ children, className = "" }) => (
    <div
      className={`border-4 border-dotted border-black p-4 ${className}`}
      style={{ borderImageSlice: "33% 33%", borderImageRepeat: "round" }}
    >
      {children}
    </div>
  );

  return (
    <div className="font-mono text-black bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg w-[800px] h-[600px] overflow-hidden relative">
      {/* Window chrome */}
      <div className="bg-white border-b-2 border-black p-1 flex justify-between items-center">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 border border-black rounded-full"></div>
          <div className="w-3 h-3 border border-black rounded-full"></div>
        </div>
        <div className="flex space-x-4 text-xs">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`px-2 py-1 ${
                activeTab === item
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
        <DottedBox className="w-1/2">
          <h2 className="text-2xl mb-2 text-left">Garlic Mustard</h2>
          <p className="text-sm italic mb-4 text-left">Alliaria petiolata</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src="/images/garlic_mustard_plant.png"
                alt="Garlic Mustard plant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src="/images/garlic_mustard_color.png"
                alt="Yellow fibers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <table className="w-full text-sm">
            <tbody>
              {[
                ["condition", "fresh"],
                ["parts", "leaves and stems"],
                ["pH", "9"],
                ["ratio", "3:1"],
                ["temp", "180F"],
                ["extract time", "1 hr"],
                ["dye time", "1 hr"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="text-right pr-2">{label}</td>
                  <td className="text-left">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DottedBox>

        <div className="w-1/2 space-y-4">
          <DottedBox>
            <h3 className="text-lg mb-2 text-left">Identification</h3>
            <p className="text-sm text-left">
              Garlic mustard can be detected by sight and smell. The leaves are
              broad with scalloped edges. In springtime they produce small white
              flowers. The smell is very similar to garlic.
            </p>
          </DottedBox>

          <DottedBox>
            <h3 className="text-lg mb-2 text-left">Batch Notes</h3>
            <p className="text-sm text-left">
              Used leaves and stems 24 hours after harvesting.
            </p>
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
    </div>
  );
};

export default RetroPlantInfo;
