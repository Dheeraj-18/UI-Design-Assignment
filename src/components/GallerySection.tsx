import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import galleryImage from "@/assets/gallery-image.jpg";
import { toast } from "sonner";

const images = [galleryImage, galleryImage, galleryImage];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev < images.length - 3 ? prev + 1 : prev
    );
  };

  const handleAddImage = () => {
    toast.success("Add image functionality coming soon!");
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="glass-card rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-muted/50">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold bg-card px-6 py-3 rounded-2xl">
            Gallery
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/80 hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            ADD IMAGE
          </button>

          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={cn(
                "p-2.5 rounded-full transition-all duration-300",
                currentIndex === 0
                  ? "bg-muted/30 text-muted-foreground cursor-not-allowed"
                  : "bg-muted hover:bg-muted-foreground/20 shadow-lg"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= images.length - 3}
              className={cn(
                "p-2.5 rounded-full transition-all duration-300",
                currentIndex >= images.length - 3
                  ? "bg-muted/30 text-muted-foreground cursor-not-allowed"
                  : "bg-muted hover:bg-muted-foreground/20 shadow-lg"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {visibleImages.map((image, idx) => (
          <div
            key={currentIndex + idx}
            className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={image}
              alt={`Gallery image ${currentIndex + idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
