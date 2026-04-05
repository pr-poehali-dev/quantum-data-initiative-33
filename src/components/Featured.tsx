export default function Featured() {
  const steps = [
    { num: "01", title: "Выбери персонажа", desc: "Любой герой из аниме, игры или кино — пришли референс или название." },
    { num: "02", title: "Согласуем детали", desc: "Поза, размер, цвет — обсудим всё до печати, чтобы результат тебя восхитил." },
    { num: "03", title: "Печатаем и доставляем", desc: "Высокодетализированная фигурка готова за 3–7 дней. Доставляем по всей России." },
  ];

  return (
    <div id="how" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/275daabb-654c-49ff-b59f-ce277fd4666c/files/93098f7c-aeaa-4e0e-8918-f37143c3a38f.jpg"
          alt="3D character figurines collection"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Как мы работаем</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          От идеи до фигурки — просто, быстро и без лишних вопросов.
        </p>
        <div className="flex flex-col gap-6 mb-10">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 items-start">
              <span className="text-3xl font-bold text-neutral-200 leading-none">{step.num}</span>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">{step.title}</h4>
                <p className="text-neutral-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#order"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Заказать сейчас
        </a>
      </div>
    </div>
  );
}
