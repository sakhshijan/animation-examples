import React from "react";
import { Metadata } from "next";
import AnimatedHeader from "@/app/header/animated-header";

export const metadata: Metadata = {
  title: "Animated Header",
};

const Page = () => {
  return <AnimatedHeader />;
};

export default Page;
