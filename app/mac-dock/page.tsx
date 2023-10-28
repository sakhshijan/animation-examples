import React from "react";
import { AnimatedMacDock } from "@/app/mac-dock/animated-mac-dock";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mac Dock",
};
const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatedMacDock />
    </div>
  );
};

export default Page;
