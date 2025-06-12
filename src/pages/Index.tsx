import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import WallpaperShowcase from "@/components/WallpaperShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <WallpaperShowcase />
      <Footer />
    </div>
  );
};

export default Index;
