import React from "react";
import { Link } from "react-router-dom";

const RetroWindowWrapper = ({ children, activeTab }) => {
  const menuItems = ["Index", "Artwork", "Process", "About"];

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
            <Link
              key={item}
              to={item === "Index" ? "/" : `/${item.toLowerCase()}`}
              className={`px-2 py-1 ${
                activeTab === item
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="p-4 overflow-y-auto h-[calc(100%-2rem)]">{children}</div>

      {/* Scrollbar */}
      <div className="absolute right-0 top-8 bottom-0 w-4 bg-gray-200 border-l-2 border-black">
        <div className="w-full h-8 bg-gray-400 border-2 border-black"></div>
      </div>
    </div>
  );
};

export default RetroWindowWrapper;
