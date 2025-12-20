import React, { Profiler, useState } from "react";
import { Separator } from "../ui/separator";

const RenderProfiler = ({ id, children, onMeasure }) => {
  const onRender = (
    _id,
    phase, // "mount" | "update"
    actualDuration, // time spent rendering
    baseDuration // estimated without memoization
  ) => {
    onMeasure({
      phase,
      actualDuration: actualDuration.toFixed(1),
      baseDuration: baseDuration.toFixed(1),
    });
  };

  return (
    <Profiler id={id} onRender={onRender}>
      {children}
    </Profiler>
  );
};

const MetricItem = ({ label, value, highlight }) => (
  <div className="flex flex-col px-3">
    <span className="text-[10px] uppercase tracking-wide text-slate-400">
      {label}
    </span>
    <span
      className={`text-sm font-medium ${
        highlight === "danger"
          ? "text-red-500"
          : highlight === "good"
          ? "text-emerald-500"
          : "text-slate-700 dark:text-slate-100"
      }`}
    >
      {value}
    </span>
  </div>
);

const HOC = ({ item }) => {
  const [metrics, setMetrics] = useState(null);

  const isSlow = metrics && Number(metrics.actualDuration) > 16;

  return (
    <div className="min-h-screen w-full px-4 pt-4">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pb-3">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Preview
        </span>

        {/* Metrics Bar */}
        <div className="flex items-center rounded-md border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/40">
          <MetricItem label="Phase" value={metrics?.phase || "—"} />

          <Separator orientation="vertical" className="h-8" />

          <MetricItem
            label="Actual"
            value={metrics ? `${metrics.actualDuration} ms` : "—"}
            highlight={isSlow ? "danger" : "good"}
          />

          <Separator orientation="vertical" className="h-8" />

          <MetricItem
            label="Base"
            value={metrics ? `${metrics.baseDuration} ms` : "—"}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 min-h-0">
        {/* Code Panel */}
        <aside className="w-full lg:w-1/2 bg-white/80 dark:bg-slate-700/60 rounded-lg px-6 pb-6 overflow-auto">
          <pre className="whitespace-pre-wrap font-mono text-xs text-slate-700 dark:text-slate-200">
            {item.code}
          </pre>
        </aside>

        <Separator orientation="vertical" className="hidden lg:block" />

        {/* Preview Panel */}
        <main className="w-full lg:w-1/2 bg-white/80 dark:bg-slate-800/60 rounded-lg px-6 pb-6 min-h-0 ">
          {/* Rendered Component */}
          <div className="relative rounded-md border border-dashed border-slate-300 dark:border-slate-600 p-4">
            <RenderProfiler id="PreviewComponent" onMeasure={setMetrics}>
              {item.element}
            </RenderProfiler>
          </div>
        </main>
      </div>

      {/* Hint */}
      <p className="mt-3 mb-0 text-[11px] text-slate-400">
        Actual &gt; 16ms may cause frame drops at 60fps
      </p>
    </div>
  );
};

export default HOC;
