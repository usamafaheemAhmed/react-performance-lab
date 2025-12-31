import { useEffect, useState } from "react";
import { onCLS, onINP, onLCP, onFCP, onTTFB } from "web-vitals";

export const useWebVitals = () => {
  const [vitals, setVitals] = useState({});

  useEffect(() => {
    const handler = (metric) => {
      setVitals((prev) => ({
        ...prev,
        [metric.name]: metric.value.toFixed(2),
      }));
    };

    onCLS(handler);
    onINP(handler);
    onLCP(handler);
    onFCP(handler);
    onTTFB(handler);
  }, []);

  return vitals;
};
