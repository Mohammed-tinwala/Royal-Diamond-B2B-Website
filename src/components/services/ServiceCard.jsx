import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div
      className={`group relative rounded-4xl p-8 transition-all duration-500 cursor-pointer overflow-hidden
      ${service.featured
          ? "bg-[#FF4D00] text-white shadow-xl shadow-orange-500/20"
          : "bg-white text-[#111] border border-gray-100 shadow-sm hover:shadow-xl"
        }
      hover:-translate-y-3 active:scale-95`}
    >
      {/* 1. Creative Background Interaction */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 
        ${service.featured
            ? "bg-linear-to-br from-orange-400 to-orange-600"
            : "bg-linear-to-br from-gray-50 to-white"
          }`}
      />

      {/* 2. Content Wrapper (to stay above the gradients) */}
      <div className="relative z-10">
        {/* Top Row */}
        <div className="flex items-start justify-between mb-20">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-[10deg] group-hover:scale-110
            ${service.featured
                ? "bg-white text-[#FF4D00]"
                : "bg-[#262626] text-white shadow-lg"
              }`}
          >
            <Icon size={24} />
          </div>

          <div className={`p-2 rounded-full transition-all duration-300 ${service.featured ? "bg-white/20" : "bg-gray-100"
            }`}>
            <ArrowUpRight
              size={20}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold leading-tight tracking-tight">
            {service.title}
          </h3>

          <p
            className={`text-sm leading-relaxed transition-colors duration-300 ${service.featured ? "text-white/80" : "text-gray-500 group-hover:text-gray-900"
              }`}
          >
            {service.description}
          </p>
        </div>

        {/* 3. Subtle Animated Border (Bottom) */}
        <div className={`mt-8 h-1 w-0 transition-all duration-500 group-hover:w-full rounded-full ${service.featured ? "bg-white/40" : "bg-[#FF4D00]"
          }`} />
      </div>
    </div>
  );
};

export default ServiceCard;