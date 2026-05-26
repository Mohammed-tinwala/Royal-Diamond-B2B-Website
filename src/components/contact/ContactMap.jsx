import React from "react";

export default function ContactMap() {
    return (
        <section className="h-150">

            <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=dubai&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
            />

        </section>
    );
}