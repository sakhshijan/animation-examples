import React from "react";
import StarSky from "@/app/star-sky/star-sky";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Sky",
};

const Page = () => {
  return <StarSky />;
};

export default Page;
