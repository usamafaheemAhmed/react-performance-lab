import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import React, { Profiler, useEffect, useRef, useState } from "react";

/* =========================
   React Profiler Wrapper
========================= */
const RenderProfiler = ({ id, children, onMeasure }) => {
  const onRender = (_id, phase, actualDuration, baseDuration) => {
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

/* =========================
   Component Metrics Hooks
========================= */
// const useComponentPaintTime = () => {
//   const [paintMs, setPaintMs] = useState(null);
//   const startRef = useRef(performance.now());

//   useEffect(() => {
//     requestAnimationFrame(() => {
//       setPaintMs((performance.now() - startRef.current).toFixed(1));
//     });
//   }, []);

//   return paintMs;
// };

// const useRenderCount = () => {
//   const count = useRef(0);
//   count.current += 1;
//   return count.current;
// };

const useComponentPaintTime = () => {
  const [paintMs, setPaintMs] = useState(null);
  const startRef = useRef(performance.now());

  useEffect(() => {
    requestAnimationFrame(() => {
      setPaintMs((performance.now() - startRef.current).toFixed(1));
    });
  }, []);

  return paintMs;
};

const useRenderCount = () => {
  const count = useRef(0);
  count.current += 1;
  return count.current;
};

/* =========================
   UI Pieces
========================= */
const MetricItem = ({ label, value, highlight }) => (
  <div className="flex flex-col px-3 py-2">
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

const PerformancePane = React.memo(({ code, element, onMeasure }) => {
  const [metrics, setMetrics] = useState(null);
  const paintTime = useComponentPaintTime();
  const renderCount = useRenderCount();

  const isSlow = metrics && Number(metrics.actualDuration) > 16;

  const memoizedElement = React.useMemo(() => element, [element]);

  return (
    <>
      {/* Metrics Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 pb-3">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Component Performance
        </span>

        <div className="flex items-center rounded-md border bg-slate-50 dark:bg-slate-900/40 divide-x">
          <MetricItem
            label="Paint"
            value={paintTime ? `${paintTime} ms` : "—"}
            highlight={paintTime > 16 ? "danger" : "good"}
          />
          <MetricItem label="Renders" value={renderCount} />
          <MetricItem label="Phase" value={metrics?.phase || "—"} />
          <MetricItem
            label="Actual"
            value={metrics ? `${metrics.actualDuration} ms` : "—"}
            highlight={isSlow ? "danger" : "good"}
          />
          <MetricItem
            label="Base"
            value={metrics ? `${metrics.baseDuration} ms` : "—"}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 min-h-0">
        {/* Code */}
        <aside className="w-full lg:w-1/2 bg-white/80 dark:bg-slate-700/60 rounded-lg px-6 pb-6 overflow-auto">
          <pre className="whitespace-pre-wrap font-mono text-xs">{code}</pre>
        </aside>

        <Separator orientation="vertical" />

        {/* Preview */}
        <main className="w-full lg:w-1/2 bg-white/80 dark:bg-slate-800/60 rounded-lg px-6 pb-6">
          <div className="rounded-md border border-dashed p-4">
            <Profiler
              id="Preview"
              onRender={(_, phase, actual, base) => {
                const data = {
                  phase,
                  actualDuration: actual.toFixed(1),
                  baseDuration: base.toFixed(1),
                };
                setMetrics(data);
                onMeasure?.(data);
              }}
            >
              {memoizedElement}
            </Profiler>
          </div>
        </main>
      </div>
    </>
  );
});

/* =========================
   HOC
========================= */
const HOC = ({ item }) => {
  return (
    <div className="min-h-screen w-full px-4 pt-4">
      <Tabs defaultValue="solution" className="w-full">
        <TabsList>
          <TabsTrigger value="solution">Solution</TabsTrigger>
          <TabsTrigger value="problem">Problem</TabsTrigger>
        </TabsList>

        <TabsContent value="problem" forceMount={false}>
          <PerformancePane
            code={item.lab.problem.codeSnippet}
            element={item.lab.problem.component}
          />
        </TabsContent>

        <TabsContent value="solution" forceMount={false}>
          <PerformancePane
            code={item.lab.solution.codeSnippet}
            element={item.lab.solution.component}
          />
        </TabsContent>
      </Tabs>

      <p className="mt-3 text-[11px] text-slate-400">
        Paint / Actual &gt; 16ms may cause frame drops at 60fps
      </p>
    </div>
  );
};

export default HOC;
