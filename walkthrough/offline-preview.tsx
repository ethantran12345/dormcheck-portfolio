import { useState } from "react";
import { createRoot } from "react-dom/client";
import { PhoneDemo } from "./PhoneDemo";
import { FeatureShowcase } from "./FeatureShowcase";
import "./index.css";

const screens = ["Home", "Checklist", "Marketplace", "Messages"];

function Preview() {
  const [screen, setScreen] = useState<number | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">DormCheck</h1>
          <p className="mt-5 max-w-md text-lg">
            Explore the original walkthrough of student housing, shared move-in lists,
            the campus marketplace, and messaging.
          </p>
          <p className="mt-3 text-sm">Offline portfolio demo with sample content.</p>
          <nav aria-label="Choose a screen" className="mt-6 flex flex-wrap gap-2">
            {["Auto tour", ...screens].map((label, index) => {
              const selected = index === 0 ? null : index - 1;
              return (
                <button key={label} type="button" aria-pressed={screen === selected}
                  className="rounded-full border px-4 py-2 text-sm aria-pressed:bg-malachite-700 aria-pressed:text-white"
                  onClick={() => setScreen(selected)}>{label}</button>
              );
            })}
          </nav>
        </div>
        <PhoneDemo selectedScene={screen} />
      </section>
      <div className="mt-14"><FeatureShowcase /></div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<Preview />);
