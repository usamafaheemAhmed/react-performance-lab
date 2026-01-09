import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CardValueMinimization = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [finalArray, setFinalArray] = useState([]);

  // Solution function
  function maxValue(values) {
    const n = values.length;
    const arr = Array(n).fill(0);

    // Left to right (handle <)
    for (let i = 1; i < n; i++) {
      if (values[i] > values[i - 1]) {
        arr[i] = arr[i - 1] + 1;
      }
    }

    // Right to left (handle >)
    for (let i = n - 2; i >= 0; i--) {
      if (values[i] > values[i + 1]) {
        arr[i] = Math.max(arr[i], arr[i + 1] + 1);
      }
    }

    return {
      max: Math.max(...arr),
      minimizedArray: arr,
    };
  }

  const handleCalculate = () => {
    try {
      const values = input.split(",").map(Number);
      if (values.some(isNaN)) throw new Error();

      const res = maxValue(values);
      setResult(res.max);
      setFinalArray(res.minimizedArray);
    } catch {
      alert("Please enter a valid comma-separated list of numbers");
    }
  };

  const codeString = `function maxValue(values) {
  const n = values.length;
  const arr = Array(n).fill(0);

  // Left to right
  for (let i = 1; i < n; i++) {
    if (values[i] > values[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  // Right to left
  for (let i = n - 2; i >= 0; i--) {
    if (values[i] > values[i + 1]) {
      arr[i] = Math.max(arr[i], arr[i + 1] + 1);
    }
  }

  return Math.max(...arr);
}`;

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <Card>
        <CardHeader>
          <CardTitle>🃏 Card Value Minimization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground pb-0 mb-0">
            Enter card values (comma separated). Example: <code>4,2,6</code>
          </p>

          <div className="flex gap-2">
            <Input
              placeholder="e.g. 4,2,6"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={handleCalculate}>Solve</Button>
          </div>

          {result !== null && (
            <div className="space-y-2 text-sm">
              <p>
                <strong>Minimized Array:</strong> {JSON.stringify(finalArray)}
              </p>
              <p>
                <strong>Maximum Value:</strong>{" "}
                <span className="text-green-600 font-bold">{result}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Code Display */}
      <Card>
        <CardHeader>
          <CardTitle>💻 Code Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-zinc-900 text-zinc-100 text-sm p-4 rounded-lg overflow-x-auto">
            {codeString}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardValueMinimization;
