import React from "react";
import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-4xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">

      <div className="flex items-center justify-between mb-6">
        <Quote
          size={42}
          className="text-[#FF5A1F]"
        />

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-[#FF5A1F] text-[#FF5A1F]"
            />
          ))}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-8">
        "{testimonial.review}"
      </p>

      <div>
        <h4 className="font-semibold text-lg">
          {testimonial.name}
        </h4>

        <p className="text-gray-500 text-sm">
          {testimonial.designation}
        </p>

        <p className="text-[#FF5A1F] text-sm mt-1">
          {testimonial.company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;