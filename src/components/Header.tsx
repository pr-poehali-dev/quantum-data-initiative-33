interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">FiguraCraft</div>
        <nav className="flex gap-8">
          <a
            href="#how"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Как это работает
          </a>
          <a
            href="#order"
            className="text-white bg-white/20 hover:bg-white/30 transition-colors duration-300 uppercase text-sm px-4 py-1"
          >
            Заказать
          </a>
        </nav>
      </div>
    </header>
  );
}