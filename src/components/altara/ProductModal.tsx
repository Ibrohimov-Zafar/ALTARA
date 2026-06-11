import { X, Droplets } from "lucide-react";

export interface ModalItem {
  size: string;
  useCase: string;
  image: string;
  heightClass?: string;
}

interface ProductModalProps {
  activeSize: string;
  modalItems: ModalItem[];
  onClose: () => void;
}

export function ProductModal({ activeSize, modalItems, onClose }: ProductModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />

      <div
        className="glass-card relative w-full max-w-5xl rounded-3xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-altara-primary/60 transition-all hover:bg-white/30 hover:text-altara-primary"
          aria-label="Yopish"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 text-center">
          <Droplets className="mx-auto h-6 w-6 text-altara-secondary" strokeWidth={1.8} aria-hidden />
          <h3 className="mt-2 font-display text-2xl font-bold text-altara-primary">ALTARA — {activeSize}</h3>
          <p className="mt-1 font-body text-sm text-altara-primary/65">
            Tabiiy mineral suv — har bir ehtiyoj uchun
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {modalItems.map((item) => (
            <div
              key={item.size}
              className="glass-card flex flex-col items-center rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/25"
            >
              <Droplets className="h-4 w-4 text-altara-secondary" strokeWidth={1.8} aria-hidden />
              <p className="mt-2 font-display text-lg font-bold text-altara-primary">{item.size}</p>

              <div className="relative my-3 flex h-44 w-full items-end justify-center sm:h-52">
                <div className="absolute bottom-4 left-1/2 h-8 w-3/5 -translate-x-1/2 rounded-[50%] bg-altara-primary/10 blur-xl" />
                <img
                  src={item.image}
                  alt={`ALTARA ${item.size}`}
                  className={`relative z-10 w-auto max-w-[85%] object-contain object-bottom drop-shadow-lg ${item.heightClass ?? "h-full"}`}
                />
              </div>

              <p className="font-display text-base font-bold text-altara-primary">{item.size}</p>
              <p className="mt-1 text-center font-body text-xs text-altara-primary/70">{item.useCase}</p>
              <span className="mt-3 h-1.5 w-1.5 rotate-45 bg-altara-gold/70" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
