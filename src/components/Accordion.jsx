import React, { useState } from "react";
import { accordionData } from "../data/accordionData";

const Accordion = () => {
  const [select, setSelect] = useState(null);
  const [multiToggle, setMultiToggle] = useState(false);
  const [multiToggleArr, setMultiToggleArr] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const handleSingleAccordion = (id) => {
    setSelect((prev) => (prev === id ? null : id));
  };

  const toggleSelector = () => {
    setMultiToggle(!multiToggle);
    console.log(multiToggle);
  };

  const handleMultiSelect = (id) => {
    if (multiToggleArr.includes(id)) {
      multiToggleArr.pop(id);
      return ;
    }
    multiToggleArr.push(id);
    console.log(multiToggleArr);
  };

  return (
    <div className="space-y-5 text-slate-800">
      <button className="bg-red-500" onClick={() => toggleSelector()}>
        Enable multiToggle
      </button>
      <div className="space-y-2">
        <p className="text-xs uppercase text-sky-600/80">FAQs</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Questions, beautifully answered.
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          A bright glassmorphism panel with soft blur and gentle shadows for a
          light, airy feel.
        </p>
      </div>

      <div className="space-y-3">
        {accordionData?.map((dataItem) => {
           setIsOpen (select === dataItem.id) ;


          return (
            <div
              key={dataItem.id}
              className={`rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-xl shadow-slate-200/80 transition-all duration-300 hover:-translate-y-0.5 ${
                isOpen
                  ? "border-sky-200/90 ring-1 ring-sky-200/70"
                  : "hover:border-slate-300/80"
              }`}
            >
              <button
                onClick={
                  multiToggle
                    ? () => handleMultiSelect(dataItem.id)
                    : () => handleSingleAccordion(dataItem.id)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-sky-600/90">Question</span>
                  <span className="text-lg font-semibold text-slate-900">
                    {dataItem.question}
                  </span>
                </div>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 text-slate-700 transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-sky-500/80 text-white shadow-lg shadow-sky-200/70 border-sky-100"
                      : "hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-base leading-relaxed text-slate-700">
                  {dataItem.answere}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
