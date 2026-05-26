import { Search, Ship, Globe, Package } from "lucide-react";

export default function TradeRouteSection() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="max-w-360 mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <span className="text-[#FF5A1F] font-medium">
              Global Logistics Network
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#111]">
              Track Your
              <br />
              Shipment Journey
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              Royal Diamond delivers industrial equipment and oilfield
              supplies from Dubai to Africa and international destinations
              through reliable shipping and logistics partnerships.
            </p>

            {/* TRACKING BOX */}

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter tracking reference"
                className="h-14 flex-1 rounded-full bg-white px-6 outline-none border border-gray-200"
              />

              <button className="h-14 px-8 rounded-full bg-[#FF5A1F] text-white font-medium hover:scale-105 transition">
                Track
              </button>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-4 mt-12">

              <div className="bg-white rounded-2xl p-5">
                <h4 className="text-2xl font-bold">25+</h4>
                <p className="text-sm text-gray-500">
                  Countries
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5">
                <h4 className="text-2xl font-bold">1000+</h4>
                <p className="text-sm text-gray-500">
                  Deliveries
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5">
                <h4 className="text-2xl font-bold">24/7</h4>
                <p className="text-sm text-gray-500">
                  Support
                </p>
              </div>

            </div>
          </div>

          {/* MAP SIDE */}

          <div className="relative h-[450px] lg:h-[600px]">

            {/* DOT MAP */}

            <div
              className="
              absolute inset-0
              bg-[radial-gradient(circle,#ffb7a8_1.5px,transparent_1.5px)]
              bg-[length:18px_18px]
              opacity-60
              rounded-3xl
            "
            />

            {/* DUBAI PIN */}

            <div className="absolute top-[22%] right-[35%]">
              <div className="relative">
                <span className="absolute w-6 h-6 bg-[#FF5A1F]/30 rounded-full animate-ping"></span>

                <div className="relative w-5 h-5 bg-[#FF5A1F] rounded-full"></div>

                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl px-3 py-2 whitespace-nowrap">
                  <p className="text-xs font-medium">
                    Dubai Hub
                  </p>
                </div>
              </div>
            </div>

            {/* AFRICA PIN */}

            <div className="absolute bottom-[28%] left-[42%]">
              <div className="relative">
                <span className="absolute w-6 h-6 bg-[#FF5A1F]/30 rounded-full animate-ping"></span>

                <div className="relative w-5 h-5 bg-[#FF5A1F] rounded-full"></div>

                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl px-3 py-2 whitespace-nowrap">
                  <p className="text-xs font-medium">
                    Africa Destination
                  </p>
                </div>
              </div>
            </div>

            {/* SVG ROUTE */}

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 600"
              preserveAspectRatio="none"
            >
              <path
                d="M420 130 C470 200, 450 280, 320 420"
                fill="none"
                stroke="#FF5A1F"
                strokeWidth="3"
                strokeDasharray="10 10"
                className="animate-route"
              />
            </svg>

            {/* SHIP CARD */}

            <div className="absolute left-[46%] top-[55%] -translate-x-1/2">

              <div className="bg-white rounded-2xl shadow-2xl p-4 w-[220px]">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-xl bg-[#FFF1EC] flex items-center justify-center">
                    <Ship className="text-[#FF5A1F]" size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">
                      Shipment In Transit
                    </h4>

                    <p className="text-xs text-gray-500">
                      Dubai → Africa
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-[#FF5A1F] rounded-full"></div>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  Estimated arrival in 5 days
                </p>
              </div>

            </div>

            {/* DECORATIVE ICONS */}

            <div className="absolute top-10 left-10 bg-white rounded-full p-4 shadow-lg">
              <Globe size={20} />
            </div>

            <div className="absolute bottom-12 right-12 bg-white rounded-full p-4 shadow-lg">
              <Package size={20} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}