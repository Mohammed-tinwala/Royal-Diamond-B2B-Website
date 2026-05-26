import Navbar from '../components/layout/Navbar'
import MegaMenu from "../components/layout/MegaMenu";
import Hero from "../components/hero/Hero";
import Services from '../components/services/Services';
import TradeRouteSection from '../components/TradeRouteSection';
import LogisticsProcess from '../components/logistics/LogisticsProcess';
import Footer from '../components/layout/Footer';
import Testimonials from '../components/testimonial/Testimonials';
import ContactSection from '../components/ContactSection';
import ProductShowcase from '../components/products/ProductShowcase';

const Home = () => {
    return (
        <>
            {/* <MegaMenu /> */}
            <Hero />
            <Services />
            <ProductShowcase />
            <TradeRouteSection />
            <LogisticsProcess />
            <Testimonials />
            <ContactSection />
        </>
    );
};

export default Home;