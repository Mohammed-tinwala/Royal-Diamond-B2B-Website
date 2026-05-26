import React from "react";
import { ChevronDown } from "lucide-react";

const items = [
  "Equipment",
  "Skids & Package",
  "Pipes, Fittings & Accessories",
  "Global Partners",
  "Info Hub",
];

const MegaMenu = () => {
  return (
    <div className="border-y border-gray-200 bg-white">
      <div className="max-w-360 mx-auto px-12">
        <ul className="flex items-center gap-12 h-16">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[20px] font-medium cursor-pointer hover:text-[#062D5B]"
            >
              {item}
              <ChevronDown size={18} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;