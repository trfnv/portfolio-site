import { useEffect, useRef, useState } from "react";

const VideoCarousel = ({ videos, isExpanded }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 1;

  useEffect(() => {
    let animationFrame;
    const move = () => {
      if (!isDragging && autoScroll && !isHovered && carouselRef.current) {
        carouselRef.current.scrollLeft += scrollSpeed;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft -= carouselRef.current.scrollWidth / 2;
        } else if (carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollLeft += carouselRef.current.scrollWidth / 2;
        }
      }
      animationFrame = requestAnimationFrame(move);
    };
    move();
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging, autoScroll, isHovered]);

  const handleStart = (e) => {
    setIsDragging(true);
    setAutoScroll(false);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const walk = clientX - startX;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (!isHovered) setAutoScroll(true);
  };

  return (
    <div
      ref={carouselRef}
      className={`overflow-hidden flex whitespace-nowrap relative w-full h-full ${isExpanded ? "pb-0" : "pb-4"}`}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={() => {
        setIsDragging(false);
        setAutoScroll(true);
        setIsHovered(false);
      }}
      onMouseEnter={() => {
        if (!isDragging) setAutoScroll(false);
        setIsHovered(true);
      }}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div className="flex" style={{ minWidth: "200%" }}>
        {[...videos, ...videos].map((video, index) => (
          <video
            key={index}
            src={video}
            className="w-auto h-full object-cover"
            autoPlay
            loop
            muted
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
