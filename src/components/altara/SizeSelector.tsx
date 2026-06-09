interface SizeSelectorProps {
  sizes: string[];
  active: string;
  onChange: (size: string) => void;
  variant?: "default" | "hero";
}

export function SizeSelector({
  sizes,
  active,
  onChange,
  variant = "default",
}: SizeSelectorProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "glass-light flex w-full max-w-md items-center gap-1 rounded-2xl p-1.5 shadow-card sm:w-fit"
          : "glass-light mx-auto flex w-fit items-center gap-1 rounded-full p-1.5 shadow-glow"
      }
    >
      {sizes.map((size) => {
        const isActive = size === active;
        return (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={
              "flex flex-1 flex-col items-center rounded-xl px-3 py-2 font-body transition-all sm:flex-none sm:rounded-full sm:px-5 " +
              (isActive
                ? isHero
                  ? "bg-white text-altara-primary shadow-card"
                  : "bg-altara-primary text-white shadow-card"
                : isHero
                  ? "text-altara-primary/75 hover:bg-white/40"
                  : "text-altara-primary/80 hover:bg-white/40")
            }
          >
            <span className="text-[0.6rem] opacity-60" aria-hidden>
              ◇
            </span>
            <span className="text-sm font-semibold">{size}</span>
          </button>
        );
      })}
    </div>
  );
}
