interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">GrowthFlow</div>
        <nav className="flex gap-8">
          <a
            href="#features"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Возможности
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Тарифы
          </a>
          <a
            href="#contact"
            className="text-white bg-white/20 hover:bg-white/30 transition-colors duration-300 uppercase text-sm px-4 py-1"
          >
            Попробовать
          </a>
        </nav>
      </div>
    </header>
  );
}