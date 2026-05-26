import React from "react";
import {
    Phone,
    Mail,
    MapPin,
    Clock
} from "lucide-react";

const data = [
    {
        icon: Phone,
        title: "Call Us",
        value: "+971 50 123 4567"
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "info@royaldiamond.ae"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "Dubai, United Arab Emirates"
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Mon - Sat, 8:00 AM - 6:00 PM"
    }
];

export default function ContactInfo() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                    {data.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="border border-gray-100 bg-primary/20 rounded-4xl p-8"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-[#FF5A1F]/10 flex items-center justify-center mb-6">

                                    <Icon
                                        size={24}
                                        className="text-[#FF5A1F]"
                                    />

                                </div>

                                <h3 className="font-semibold text-xl mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600">
                                    {item.value}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}