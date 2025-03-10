export default function Header() {
    return (
      <header className="w-[390px] h-[64px] flex justify-between items-center px-4">
        <span className="text-lg font-medium">pavel trufanov</span>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-black">motion</a>
          <a href="#" className="text-gray-600 hover:text-black">designer</a>
          <a href="#" className="text-gray-600 hover:text-black">portfolio</a>
        </nav>
      </header>
    );
  }
  