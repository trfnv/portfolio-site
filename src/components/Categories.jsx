export default function Categories() {
    return (
      <div className="w-full flex flex-col items-center gap-2">
        {/* Пример кнопок-категорий */}
        <div className="bg-yellow-200 rounded-[13px] px-4 py-2">Motion Graphics</div>
        <div className="bg-pink-200 rounded-[13px] px-4 py-2">3D & VFX</div>
        <div className="bg-blue-200 rounded-[13px] px-4 py-2">Shaders & Simulations</div>
        <div className="bg-gray-500 text-white rounded-[13px] px-4 py-2">Scripting & AI Tools</div>
      </div>
    );
  }
  