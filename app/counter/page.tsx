import React from "react";
import AnimatedCounter from "@/app/counter/animated-counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Counter",
};

const Page = () => {
  return <AnimatedCounter />;
};

export default Page;
