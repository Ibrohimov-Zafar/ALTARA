import { useEffect, useState } from "react";

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2600);
    const doneTimer = setTimeout(onDone, 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/img/logo.png"
        alt="ALTARA"
        className="h-24 w-auto animate-pulse sm:h-28"
      />
      <div className="mt-8 flex gap-1.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-altara-primary/40" style={{ animationDelay: "0ms" }} />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-altara-primary/40" style={{ animationDelay: "150ms" }} />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-altara-primary/40" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
