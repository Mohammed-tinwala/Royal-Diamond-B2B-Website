import AboutHero from "../components/about/AboutHero";
import CompanyIntro from "../components/about/CompanyIntro";
import StoryTimeline from "../components/about/StoryTimeline";
import MissionVission from "../components/about/MissionVission";

import GlobalNetwork from "../components/about/GlobalNetwork";
import WhyChooseUs from "../components/about/WhyChooseUs";
import IndustriesServed from "../components/about/IndustriesServed";
import Statistics from "../components/about/Statistics";

import LeadershipMessage from "../components/about/LeadershipMessage";
import WorkProcess from "../components/about/WorkProcess";
import Testimonials from "../components/testimonial/Testimonials";
import Certification from "../components/testimonial/Testimonials"; // Assuming you have a Certification component in the testimonial folder
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
    return (
        <>
            <AboutHero />
            <CompanyIntro />
            <StoryTimeline />
            <MissionVission />

            <GlobalNetwork />
            <WhyChooseUs />
            <IndustriesServed />

            <LeadershipMessage />
            <WorkProcess />
            <Statistics />
            <Testimonials />
            {/* <Certification /> */}
            <AboutCTA />
        </>
    );
}