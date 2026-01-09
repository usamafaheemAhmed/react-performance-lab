import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MinimumBottleChange = () => {
  const [N, setN] = useState("");
  const [result, setResult] = useState(null);

  // The actual DP function
  function minBottles(N) {
    const bottles = [1, 5, 7, 10];
    const dp = Array(N + 1).fill(Infinity);
    const used = Array(N + 1).fill(null);
    dp[0] = 0;

    for (let i = 1; i <= N; i++) {
      for (const b of bottles) {
        if (i - b >= 0 && dp[i - b] + 1 < dp[i]) {
          dp[i] = dp[i - b] + 1;
          used[i] = b;
        }
      }
    }

    // reconstruct bottles used
    const bottlesUsed = [];
    let cur = N;
    while (cur > 0) {
      bottlesUsed.push(used[cur]);
      cur -= used[cur];
    }

    return { minBottles: dp[N], bottlesUsed };
  }

  const handleSubmit = () => {
    if (!N || isNaN(N) || N <= 0) {
      alert("Please enter a valid positive number");
      return;
    }
    const res = minBottles(Number(N));
    setResult(res);
  };

  const codeString = `function minBottles(N) {
  const bottles = [1, 5, 7, 10];
  const dp = Array(N + 1).fill(Infinity);
  const used = Array(N + 1).fill(null);
  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    for (const b of bottles) {
      if (i - b >= 0 && dp[i - b] + 1 < dp[i]) {
        dp[i] = dp[i - b] + 1;
        used[i] = b;
      }
    }
  }

  const result = [];
  let cur = N;
  while (cur > 0) {
    result.push(used[cur]);
    cur -= used[cur];
  }

  return { minBottles: dp[N], bottlesUsed: result };
}`;

  return (
    <div className="space-y-6 s">
      <Card>
        <CardHeader>
          <CardTitle>🧃 Minimum Bottle Change Problem</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground pb-0 mb-0">
            Enter a number <strong>N</strong> to find the minimum number of
            bottles needed and which bottles to use.
          </p>

          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Enter N"
              value={N}
              onChange={(e) => setN(e.target.value)}
            />
            <Button onClick={handleSubmit}>Calculate</Button>
          </div>

          {result && (
            <div className="space-y-2">
              <p>
                <strong>Minimum Bottles:</strong> {result.minBottles}
              </p>
              <p>
                <strong>Bottles Used:</strong>{" "}
                {JSON.stringify(result.bottlesUsed)}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💻 Code Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm">
            {codeString}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default MinimumBottleChange;
