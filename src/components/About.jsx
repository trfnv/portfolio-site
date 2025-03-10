import { useState } from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 bg-white w-full">
      {/* About Me Block */}
      <div 
        className={`flex flex-col border border-black rounded-[13px] px-4 transition-all duration-300 ${
          expanded ? "py-4" : "h-[32px]"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <span className="text-black font-['Manrope']">about me</span>
          {/* SVG Icons */}
          <div className="flex gap-2">
            {/* Добавь иконки сюда */}
          </div>
        </div>
        {expanded && (
          <p className="text-justify leading-[1.4] tracking-[0.16px]">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        )}
      </div>

      {/* Контейнер для Carousel и Categories */}
      <div className="flex flex-col w-full gap-4">
        {/* Carousel – меняет высоту при раскрытии about me */}
        <Carousel collapsed={!expanded} />

        {/* Categories – исчезает при раскрытии about me */}
        {!expanded && <Categories />}
      </div>
    </div>
  );
}
