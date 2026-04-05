import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/275daabb-654c-49ff-b59f-ce277fd4666c/files/c44efa2f-3af2-4a9e-ae06-25cf4e61d123.jpg"
          alt="3D figurine character"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ТВОЙ ПЕРСОНАЖ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Печатаем 3D-фигурки любимых персонажей — аниме, игры, кино. Уникальные, детализированные, твои.
        </p>
        <a
          href="#order"
          className="inline-block mt-8 px-8 py-3 bg-white text-black uppercase text-sm tracking-wide hover:bg-neutral-200 transition-colors duration-300"
        >
          Заказать фигурку
        </a>
      </div>
    </div>
  );
}