import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div
      className={`group relative rounded-[28px] p-7 transition-all duration-300 cursor-pointer
      ${
        service.featured
          ? "bg-[#FF4D00] text-white"
          : "bg-[#F3F3F3] text-[#111]"
      }
      hover:-translate-y-2`}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-16">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center
          ${
            service.featured
              ? "bg-white text-[#FF4D00]"
              : "bg-[#262626] text-white"
          }`}
        >
          <Icon size={20} />
        </div>

        <ArrowUpRight
          size={22}
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
        />
      </div>

      <h3 className="text-xl font-semibold mb-4 leading-tight">
        {service.title}
      </h3>

      <p
        className={`text-sm leading-relaxed ${
          service.featured ? "text-white/90" : "text-[#666]"
        }`}
      >
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;