import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-screen font-body"
      style={{
        backgroundImage: "url(/img/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28 pb-16">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
