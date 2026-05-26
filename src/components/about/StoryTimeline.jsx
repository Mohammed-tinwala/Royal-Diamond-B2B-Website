import React from "react";
import { timeline } from "../../data/timeline";

export default function StoryTimeline() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="mb-12">

                    <p className="text-secondary font-medium mb-4">
                        Our Journey
                    </p>

                    <h2 className="text-4xl md:text-6xl font-semibold">
                        Milestones That
                        Shaped Our Growth
                    </h2>

                </div>

                <div className="overflow-x-auto hide-scrollbar">

                    <div className="flex gap-4 min-w-max">

                        {timeline.map((item) => (
                            <div
                                key={item.year}
                                className="relative bg-gray-200 rounded-4xl p-4 w-60 shrink-0"
                            >

                                <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-secondary" />

                                <h3 className="text-5xl font-bold text-secondary/30">
                                    {item.year}
                                </h3>

                                <h4 className="mt-4 text-2xl font-semibold">
                                    {item.title}
                                </h4>

                                <p className="mt-4 text-gray-600">
                                    {item.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}