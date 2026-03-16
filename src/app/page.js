import Collections from "@/components/home/Collections";
import FeatureSection from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import Sale from "@/components/home/Sale";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Collections></Collections>
      <FeatureSection></FeatureSection>
      <Sale></Sale>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </>
  );
}
