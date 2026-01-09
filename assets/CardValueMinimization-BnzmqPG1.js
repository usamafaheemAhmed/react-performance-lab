import{r as i,j as e,i as c,C as o,h as d,k as x,B as g}from"./index-BNHyud9p.js";import{I as v}from"./input-BC6AN7eo.js";const M=()=>{const[n,m]=i.useState(""),[l,u]=i.useState(null),[h,p]=i.useState([]);function f(r){const t=r.length,s=Array(t).fill(0);for(let a=1;a<t;a++)r[a]>r[a-1]&&(s[a]=s[a-1]+1);for(let a=t-2;a>=0;a--)r[a]>r[a+1]&&(s[a]=Math.max(s[a],s[a+1]+1));return{max:Math.max(...s),minimizedArray:s}}const j=()=>{try{const r=n.split(",").map(Number);if(r.some(isNaN))throw new Error;const t=f(r);u(t.max),p(t.minimizedArray)}catch{alert("Please enter a valid comma-separated list of numbers")}};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(d,{children:"🃏 Card Value Minimization"})}),e.jsxs(x,{className:"space-y-4",children:[e.jsxs("p",{className:"text-sm text-muted-foreground pb-0 mb-0",children:["Enter card values (comma separated). Example: ",e.jsx("code",{children:"4,2,6"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(v,{placeholder:"e.g. 4,2,6",value:n,onChange:r=>m(r.target.value)}),e.jsx(g,{onClick:j,children:"Solve"})]}),l!==null&&e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Minimized Array:"})," ",JSON.stringify(h)]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Maximum Value:"})," ",e.jsx("span",{className:"text-green-600 font-bold",children:l})]})]})]})]}),e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(d,{children:"💻 Code Explanation"})}),e.jsx(x,{children:e.jsx("pre",{className:"bg-zinc-900 text-zinc-100 text-sm p-4 rounded-lg overflow-x-auto",children:`function maxValue(values) {
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
}`})})]})]})};export{M as default};
