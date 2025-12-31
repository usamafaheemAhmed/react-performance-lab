import { Separator } from "../ui/separator";

const VitalItem = ({ label, value, unit, status }) => {
  const color =
    status === "good"
      ? "text-emerald-500"
      : status === "warn"
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="flex flex-col px-3 py-2">
      <span className="text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <span className={`text-sm font-medium ${color}`}>
        {value ? `${value}${unit}` : "—"}
      </span>
    </div>
  );
};

export const WebVitalsPanel = ({ vitals }) => {
  const score = {
    LCP:
      vitals.LCP <= 2.5 ? "good" : vitals.LCP <= 4 ? "warn" : "bad",
    INP:
      vitals.INP <= 200 ? "good" : vitals.INP <= 500 ? "warn" : "bad",
    CLS:
      vitals.CLS <= 0.1 ? "good" : vitals.CLS <= 0.25 ? "warn" : "bad",
    FCP:
      vitals.FCP <= 1.8 ? "good" : vitals.FCP <= 3 ? "warn" : "bad",
    TTFB:
      vitals.TTFB <= 800 ? "good" : vitals.TTFB <= 1800 ? "warn" : "bad",
  };

  return (
    <div className="rounded-md border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/40">
      <div className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300">
        Web Vitals (Real User Metrics)
      </div>

      <Separator />

      <div className="flex items-center divide-x divide-slate-200 dark:divide-slate-600 text-xs">
        <VitalItem
          label="LCP"
          value={vitals.LCP}
          unit="s"
          status={score.LCP}
        />
        <VitalItem
          label="INP"
          value={vitals.INP}
          unit="ms"
          status={score.INP}
        />
        <VitalItem
          label="CLS"
          value={vitals.CLS}
          unit=""
          status={score.CLS}
        />
        <VitalItem
          label="FCP"
          value={vitals.FCP}
          unit="s"
          status={score.FCP}
        />
        <VitalItem
          label="TTFB"
          value={vitals.TTFB}
          unit="ms"
          status={score.TTFB}
        />
      </div>
    </div>
  );
};
