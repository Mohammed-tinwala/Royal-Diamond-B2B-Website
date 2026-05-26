import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFormSection from "../components/contact/ContactFormSection";
import OfficeLocation from "../components/contact/OfficeLocation";
import BusinessHours from "../components/contact/BusinessHours";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

export default function Contact() {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactFormSection />
            <OfficeLocation />
            <BusinessHours />
            <ContactMap />
            <ContactFAQ />
            <ContactCTA />
        </>
    );
}