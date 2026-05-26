import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#032850] text-white overflow-hidden">
            <div className="max-w-360 mx-auto">

                {/* Top Section */}
                <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] border-b border-white/10">

                    {/* Company Info */}
                    <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">

                        <img
                            src="/logo.png"
                            alt="Royal Diamond"
                            className="h-14 mb-6"
                        />

                        <p className="text-white/70 leading-relaxed max-w-sm">
                            Royal Diamond delivers industrial equipment, oilfield
                            supplies, logistics, and import-export solutions across
                            Dubai, Africa, and global markets with reliability and
                            efficiency.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">

                        <h4 className="font-semibold mb-6">
                            Navigation
                        </h4>

                        <ul className="space-y-3 text-white/70">
                            <li>
                                <a href="/" className="hover:text-white transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="/about" className="hover:text-white transition">
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a href="/services" className="hover:text-white transition">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="/partners" className="hover:text-white transition">
                                    Global Partners
                                </a>
                            </li>

                            <li>
                                <a href="/contact" className="hover:text-white transition">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">

                        <h4 className="font-semibold mb-6">
                            Company
                        </h4>

                        <ul className="space-y-3 text-white/70">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Industries We Serve
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Import & Export
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Logistics Solutions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Product Catalog
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="p-8 lg:p-12">

                        <h4 className="font-semibold mb-2">
                            Subscribe Newsletter
                        </h4>

                        <p className="text-sm text-white/60 mb-6">
                            Stay updated with industry insights,
                            product updates, and logistics news.
                        </p>

                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="
                  w-full
                  h-12
                  rounded-full
                  bg-transparent
                  border
                  border-white/30
                  px-5
                  pr-14
                  outline-none
                  text-sm
                "
                            />

                            <button
                                type="submit"
                                className="
                  absolute
                  right-2
                  top-1/2
                  -translate-y-1/2
                  w-8
                  h-8
                  rounded-full
                  bg-[#FF5A1F]
                  flex
                  items-center
                  justify-center
                "
                            >
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 lg:px-12 py-8">

                    <div className="text-sm text-white/60 text-center md:text-left">
                        © {new Date().getFullYear()} Royal Diamond. All rights reserved.
                    </div>

                    <div className="flex items-center gap-5">

                        <a
                            href="#"
                            className="text-white/70 hover:text-[#FF5A1F] transition"
                        >
                            <FaFacebookF size={18} />
                        </a>

                        <a
                            href="#"
                            className="text-white/70 hover:text-[#FF5A1F] transition"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            href="#"
                            className="text-white/70 hover:text-[#FF5A1F] transition"
                        >
                            <FaLinkedinIn size={18} />
                        </a>

                        <a
                            href="#"
                            className="text-white/70 hover:text-[#FF5A1F] transition"
                        >
                            <FaXTwitter size={18} />
                        </a>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;