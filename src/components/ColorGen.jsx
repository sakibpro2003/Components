import React, { useState } from "react";

const ColorGen = () => {
  const [color, setColor] = useState("000000");

  const handleGen = () => {
    const next = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
    setColor(next);
    console.log(next);
  };

  return (
    <div className="mt-10 w-full max-w-xl rounded-3xl bg-white/85 backdrop-blur shadow-xl shadow-slate-200 border border-slate-100/80 p-6 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-600/80">Color Generator</p>
          <p className="text-3xl font-semibold text-slate-900">#{color}</p>
          <p className="text-sm text-slate-600">Spin up a fresh hex swatch for your palette.</p>
        </div>
        <div
          className="h-16 w-16 shrink-0 rounded-2xl border border-slate-200 shadow-inner"
          style={{ backgroundColor: `#${color}` }}
        />
      </div>

      <div className="w-full h-12 rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden shadow-inner">
        <div
          className="h-full transition-all duration-500"
          style={{
            width: "100%",
            background: `linear-gradient(120deg, #0ea5e9, #${color}, #a855f7)`,
          }}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div
          className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm text-slate-700 font-mono text-lg"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}
        >
          #{color}
        </div>
        <button
          onClick={handleGen}
          className="shrink-0 rounded-2xl bg-sky-600 px-4 py-3 text-white font-semibold shadow-lg shadow-sky-200/70 transition hover:-translate-y-0.5 hover:bg-sky-700"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ColorGen;
