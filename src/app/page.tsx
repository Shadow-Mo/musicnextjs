import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
