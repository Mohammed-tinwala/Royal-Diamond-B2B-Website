import React from "react";

const ProcessCard = ({ step }) => {
    return (
        <div className="group">
            <div className="flex items-start gap-4">

                <span className="text-[#FF5A1F] text-lg font-semibold">
                    {step.id}
                </span>

                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-[#111]">
                        {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;