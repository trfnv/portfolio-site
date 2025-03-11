import React from "react";

const VideoCarousel = ({ videos, isExpanded }) => {
  return (
    <div className="carousel flex gap-2 overflow-x-auto">
      {videos.map((video, index) => (
        <div key={index} className="video-card w-40">
          <video src={video.preview_url} autoPlay loop muted className="w-full rounded" />
          <h3 className="text-sm">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
