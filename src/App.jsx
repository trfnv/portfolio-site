import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoCarousel from "./components/VideoCarousel";

const Header = ({ reset }) => (
  <header
    className="fixed top-0 w-full h-[64px] flex justify-center bg-white cursor-pointer"
    onClick={reset}
  >
    <div className="w-[390px] h-full px-4 flex justify-between items-center">
      <span className="text-black">pavel trufanov</span>
      <span className="text-black">motion designer portfolio</span>
    </div>
  </header>
);

const About = ({ expanded, expand }) => (
  <motion.div
    className="w-full border border-black rounded-[13px] px-4 py-1 text-left cursor-pointer flex"
    onClick={expand}
    animate={{
      flexGrow: expanded ? 1 : 0,
      height: expanded ? "auto" : 32,
    }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    style={{ overflow: "hidden" }}
  >
    About
  </motion.div>
);

const Carousel = ({ expanded, reset, videos }) => (
  <motion.div
    className="w-full border border-black rounded-[13px] text-left cursor-pointer overflow-hidden"
    onClick={reset}
    animate={{
      height: expanded ? 128 : 256,
    }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    <VideoCarousel videos={videos} isExpanded={expanded} />
  </motion.div>
);

const Categories = ({ expanded }) => (
  <motion.div
    className="w-full border border-black rounded-[13px] px-4 py-1 text-left flex"
    animate={{
      flexGrow: expanded ? 0 : 1,
      opacity: expanded ? 0 : 1,
    }}
    transition={{
      duration: 0.6,
      ease: "easeInOut",
    }}
    style={{
      overflow: "hidden",
    }}
  >
    Categories
  </motion.div>
);

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [videos, setVideos] = useState([]);

  const expand = () => setExpanded(true);
  const reset = () => setExpanded(false);

  useEffect(() => {
    fetch("/portfolio.json") // Загружаем JSON
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Ошибка загрузки JSON:", error));
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen bg-white px-4">
      <Header reset={reset} />
      <main className="mb-[16px] flex flex-col w-full max-w-[390px] h-full gap-2 pt-[64px] overflow-auto">
        <About expanded={expanded} expand={expand} />
        <Carousel expanded={expanded} reset={reset} videos={videos} />
        <Categories expanded={expanded} />
      </main>
    </div>
  );
}
