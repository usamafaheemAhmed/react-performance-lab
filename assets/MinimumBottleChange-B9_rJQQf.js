import{c as P,r as _,j as t,C as E,h as w,B as H,i as A,k as I}from"./index-BNHyud9p.js";import{I as J}from"./input-BC6AN7eo.js";const $=()=>{const e=P.c(22),[s,U]=_.useState(""),[d,M]=_.useState(null);let f;e[0]===Symbol.for("react.memo_cache_sentinel")?(f=function(m){const k=[1,5,7,10],a=Array(m+1).fill(1/0),S=Array(m+1).fill(null);a[0]=0;for(let n=1;n<=m;n++)for(const C of k)n-C>=0&&a[n-C]+1<a[n]&&(a[n]=a[n-C]+1,S[n]=C);const v=[];let u=m;for(;u>0;)v.push(S[u]),u=u-S[u];return{minBottles:a[m],bottlesUsed:v}},e[0]=f):f=e[0];const R=f;let h;e[1]!==s?(h=()=>{if(!s||isNaN(s)||s<=0){alert("Please enter a valid positive number");return}const B=R(Number(s));M(B)},e[1]=s,e[2]=h):h=e[2];const g=h;let x;e[3]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx(E,{children:t.jsx(w,{children:"🧃 Minimum Bottle Change Problem"})}),e[3]=x):x=e[3];let p;e[4]===Symbol.for("react.memo_cache_sentinel")?(p=t.jsxs("p",{className:"text-sm text-muted-foreground pb-0 mb-0",children:["Enter a number ",t.jsx("strong",{children:"N"})," to find the minimum number of bottles needed and which bottles to use."]}),e[4]=p):p=e[4];let b;e[5]===Symbol.for("react.memo_cache_sentinel")?(b=B=>U(B.target.value),e[5]=b):b=e[5];let l;e[6]!==s?(l=t.jsx(J,{type:"number",placeholder:"Enter N",value:s,onChange:b}),e[6]=s,e[7]=l):l=e[7];let r;e[8]!==g?(r=t.jsx(H,{onClick:g,children:"Calculate"}),e[8]=g,e[9]=r):r=e[9];let i;e[10]!==l||e[11]!==r?(i=t.jsxs("div",{className:"flex space-x-2",children:[l,r]}),e[10]=l,e[11]=r,e[12]=i):i=e[12];let o;e[13]!==d?(o=d&&t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Minimum Bottles:"})," ",d.minBottles]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Bottles Used:"})," ",JSON.stringify(d.bottlesUsed)]})]}),e[13]=d,e[14]=o):o=e[14];let c;e[15]!==i||e[16]!==o?(c=t.jsxs(A,{children:[x,t.jsxs(I,{className:"space-y-4",children:[p,i,o]})]}),e[15]=i,e[16]=o,e[17]=c):c=e[17];let j;e[18]===Symbol.for("react.memo_cache_sentinel")?(j=t.jsx(E,{children:t.jsx(w,{children:"💻 Code Explanation"})}),e[18]=j):j=e[18];let y;e[19]===Symbol.for("react.memo_cache_sentinel")?(y=t.jsxs(A,{children:[j,t.jsx(I,{children:t.jsx("pre",{className:"bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm",children:`function minBottles(N) {
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
}`})})]}),e[19]=y):y=e[19];let N;return e[20]!==c?(N=t.jsxs("div",{className:"space-y-6 s",children:[c,y]}),e[20]=c,e[21]=N):N=e[21],N};export{$ as default};
