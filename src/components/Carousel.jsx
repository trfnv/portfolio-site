export default function Carousel({ collapsed }) {
    return (
      <div 
        className={`w-full transition-all duration-300 ${
          collapsed ? "h-[256px]" : "h-[128px]"
        } bg-gray-300 rounded-[13px] flex flex-col items-center justify-center`}
      >
        {/* Видео-превью */}
        <div className="bg-gray-500 w-[90%] h-[90%] rounded-[13px] flex items-center justify-center">
          ▶
        </div>
  
        {/* Color Bar – скрывается при раскрытии about me */}
        {collapsed && (
          <div className="w-full h-[8px] flex">
            <div className="bg-green-300 w-1/5"></div>
            <div className="bg-yellow-300 w-1/5"></div>
            <div className="bg-pink-300 w-1/5"></div>
            <div className="bg-gray-500 w-1/5"></div>
            <div className="bg-blue-300 w-1/5"></div>
          </div>
        )}
      </div>
    );
  }
  