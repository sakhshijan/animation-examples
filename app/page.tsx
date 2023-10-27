"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const items = ["Home", "Shop", "Blog", "Fag", "Contact", "About"];
  const [active, setActive] = useState("Home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex gap-2 text-lg">
        {items.map((item) => (
          <div
            onClick={() => setActive(item)}
            key={item}
            className={`${
              active === item ? "" : "hover:opacity-50"
            } px-5 cursor-pointer font-light select-none relative rounded-full h-10 flex items-center justify-center transition-opacity duration-300`}
          >
            {active === item && (
              <motion.div
                className="absolute inset-0 bg-gray-50 shadow-[0_0_30px_-5px]"
                layoutId="root"
                style={{ borderRadius: 50 }}
                transition={{ duration: 0.7, type: "spring" }}
              ></motion.div>
            )}
            <span className="relative z-10 mix-blend-exclusion">{item}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
