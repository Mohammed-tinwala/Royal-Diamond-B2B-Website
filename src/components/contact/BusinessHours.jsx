import React from "react";

export default function BusinessHours() {
    return (
        <section className="py-20 bg-[#032850] text-white">

            <div className="max-w-250 mx-auto text-center px-6">

                <h2 className="text-4xl font-semibold">
                    Business Hours
                </h2>

                <div className="mt-10 space-y-3">

                    <p>Monday - Friday : 8:00 AM - 6:00 PM</p>
                    <p>Saturday : 9:00 AM - 2:00 PM</p>
                    <p>Sunday : Closed</p>

                </div>

            </div>

        </section>
    );
}