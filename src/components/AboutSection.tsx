import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "about" | "experiences" | "recommended";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About Me" },
  { id: "experiences", label: "Experiences" },
  { id: "recommended", label: "Recommended" },
];

const content = {
  about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  experiences: `With over 5 years in tech sales, I've had the privilege of working with Fortune 500 companies and innovative startups alike. My journey began at Oracle where I developed my foundation in enterprise software sales.

At Salesforce, I've consistently exceeded quarterly targets by 120% and was recognized as "Top Performer" for 2023. I specialize in understanding complex business needs and translating them into effective CRM solutions.`,
  recommended: `I highly recommend exploring the following resources to enhance your Salesforce experience:

• Trailhead - Salesforce's free learning platform
• Admin Beginner's Guide for getting started
• Advanced customization tutorials
• Community forums for peer support

Feel free to reach out if you need personalized recommendations based on your specific use case!`,
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <div className="glass-card rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-full bg-muted/50">
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      <div className="flex gap-2 mb-6 bg-secondary/50 rounded-2xl p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300",
              activeTab === tab.id
                ? "bg-card shadow-lg text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="h-48 overflow-y-auto custom-scrollbar pr-2">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {content[activeTab]}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-2 h-full bg-muted/20 rounded-full">
          <div className="w-full h-1/3 bg-muted rounded-full" />
        </div>
      </div>
    </div>
  );
}
