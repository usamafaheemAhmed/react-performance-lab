import{c as R,f as $,j as s,r as k,C as A,h as U,B as H,i as I,k as M}from"./index-lNiAFs1z.js";function J(e){const t=R.c(10);let i,n,r;t[0]!==e?({className:i,type:r,...n}=e,t[0]=e,t[1]=i,t[2]=n,t[3]=r):(i=t[1],n=t[2],r=t[3]);let l;t[4]!==i?(l=$("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",i),t[4]=i,t[5]=l):l=t[5];let a;return t[6]!==n||t[7]!==l||t[8]!==r?(a=s.jsx("input",{type:r,"data-slot":"input",className:l,...n}),t[6]=n,t[7]=l,t[8]=r,t[9]=a):a=t[9],a}const T=()=>{const e=R.c(22),[t,i]=k.useState(""),[n,r]=k.useState(null);let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=function(b){const P=[1,5,7,10],p=Array(b+1).fill(1/0),_=Array(b+1).fill(null);p[0]=0;for(let o=1;o<=b;o++)for(const w of P)o-w>=0&&p[o-w]+1<p[o]&&(p[o]=p[o-w]+1,_[o]=w);const E=[];let h=b;for(;h>0;)E.push(_[h]),h=h-_[h];return{minBottles:p[b],bottlesUsed:E}},e[0]=l):l=e[0];const a=l;let x;e[1]!==t?(x=()=>{if(!t||isNaN(t)||t<=0){alert("Please enter a valid positive number");return}const C=a(Number(t));r(C)},e[1]=t,e[2]=x):x=e[2];const S=x;let g;e[3]===Symbol.for("react.memo_cache_sentinel")?(g=s.jsx(A,{children:s.jsx(U,{children:"🧃 Minimum Bottle Change Problem"})}),e[3]=g):g=e[3];let j;e[4]===Symbol.for("react.memo_cache_sentinel")?(j=s.jsxs("p",{children:["Enter a number ",s.jsx("strong",{children:"N"})," to find the minimum number of bottles needed and which bottles to use."]}),e[4]=j):j=e[4];let y;e[5]===Symbol.for("react.memo_cache_sentinel")?(y=C=>i(C.target.value),e[5]=y):y=e[5];let c;e[6]!==t?(c=s.jsx(J,{type:"number",placeholder:"Enter N",value:t,onChange:y}),e[6]=t,e[7]=c):c=e[7];let d;e[8]!==S?(d=s.jsx(H,{onClick:S,children:"Calculate"}),e[8]=S,e[9]=d):d=e[9];let u;e[10]!==c||e[11]!==d?(u=s.jsxs("div",{className:"flex space-x-2",children:[c,d]}),e[10]=c,e[11]=d,e[12]=u):u=e[12];let f;e[13]!==n?(f=n&&s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Minimum Bottles:"})," ",n.minBottles]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Bottles Used:"})," ",JSON.stringify(n.bottlesUsed)]})]}),e[13]=n,e[14]=f):f=e[14];let m;e[15]!==u||e[16]!==f?(m=s.jsxs(I,{children:[g,s.jsxs(M,{className:"space-y-4",children:[j,u,f]})]}),e[15]=u,e[16]=f,e[17]=m):m=e[17];let v;e[18]===Symbol.for("react.memo_cache_sentinel")?(v=s.jsx(A,{children:s.jsx(U,{children:"💻 Code Explanation"})}),e[18]=v):v=e[18];let N;e[19]===Symbol.for("react.memo_cache_sentinel")?(N=s.jsxs(I,{children:[v,s.jsx(M,{children:s.jsx("pre",{className:"bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm",children:`function minBottles(N) {
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
}`})})]}),e[19]=N):N=e[19];let B;return e[20]!==m?(B=s.jsxs("div",{className:"space-y-6 s",children:[m,N]}),e[20]=m,e[21]=B):B=e[21],B};export{T as default};
