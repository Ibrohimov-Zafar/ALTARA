interface SizeSelectorProps {
  sizes: string[];
  active: string;
  onChange: (size: string) => void;
}

export function SizeSelector({ sizes, active, onChange }: SizeSelectorProps) {
  return (
    <div className="glass-light mx-auto flex w-fit items-center gap-1 rounded-full p-1.5 shadow-glow">
      {sizes.map((size) => {
        const isActive = size === active;
        return (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={
              "rounded-full px-5 py-2 font-body text-sm font-semibold transition-all " +
              (isActive
                ? "bg-altara-primary text-white shadow-card"
                : "text-altara-primary/80 hover:bg-white/40")
            }
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
