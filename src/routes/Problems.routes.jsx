import { lazy } from "react";

const MinimumBottleChange = lazy(() =>
  import("@/components/Problems/MinimumBottleChange/MinimumBottleChange")
);

export const problemRoutes = [
  {
    path: "/minimum-bottle-change",
    title: "Minimum Bottle Change",
    showInMenu: true,
    hocProblemLayout: true,
    component: <MinimumBottleChange />,
    ProblemQuestion: `<h2>🧃 Minimum Bottle Change Problem</h2>

<p>
You are given an unlimited supply of bottles with the following sizes:
</p>

<ul>
  <li><strong>1 liter</strong></li>
  <li><strong>5 liters</strong></li>
  <li><strong>7 liters</strong></li>
  <li><strong>10 liters</strong></li>
</ul>

<p>
You are also given a number <strong>N</strong>, representing the total liters of liquid you want to collect.
</p>

<p>
Your task is to determine:
</p>

<ol>
  <li>The <strong>minimum number of bottles</strong> required to collect exactly <strong>N</strong> liters.</li>
  <li>The <strong>sizes of the bottles</strong> used to achieve this minimum.</li>
</ol>

<h3>Rules</h3>
<ul>
  <li>You may use <strong>any bottle size</strong> any number of times.</li>
  <li>The total amount collected must be <strong>exactly N liters</strong>.</li>
</ul>

<h3>Example</h3>

<p>
<strong>Input:</strong> N = 14
</p>

<p>
<strong>Output:</strong>
</p>

<ul>
  <li>Minimum Bottles: <strong>2</strong></li>
  <li>Bottles Used: <strong>[7, 7]</strong></li>
</ul>

<p>
Because <strong>7 + 7 = 14</strong> and no solution uses fewer bottles.
</p>
`,
    codeSnippet: ``,
  },
];
