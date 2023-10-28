"use client";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Tv, Tv2 } from "lucide-react";
import { useRef } from "react";

function Items({ mouseX }: { mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (value) => {
    const bound = ref.current?.getBoundingClientRect() ?? { width: 0, x: 0 };
    return value - bound.x - bound.width / 2;
  });
  const widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  const scaleSync = useTransform(widthSync, [40, 80], [1, 2]);
  const width = useSpring(widthSync, { mass: 0.1, damping: 15 });
  const scale = useSpring(scaleSync, { mass: 0.1, damping: 15 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 flex items-center justify-center bg-neutral-700 rounded-full"
    >
      <motion.span
        style={{ scale: scale }}
        className="600 flex items-center justify-center h-full w-full"
      >
        <Tv2 />
      </motion.span>
    </motion.div>
  );
}

export function AnimatedMacDock() {
  const mouseX = useMotionValue(Infinity);

  function onMousemove() {}

  return (
    <div
      onMouseLeave={() => mouseX.set(Infinity)}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      className="flex pb-3 px-3 gap-4 rounded-lg bg-neutral-900 mx-auto h-16 items-end justify-center"
    >
      {Array(6)
        .fill(0)
        .map((v, index) => (
          <Items key={index} mouseX={mouseX} />
        ))}
    </div>
  );
}
