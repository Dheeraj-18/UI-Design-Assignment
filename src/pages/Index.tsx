import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <AboutSection />
        <GallerySection />
      </div>
    </div>
  );
};

export default Index;
