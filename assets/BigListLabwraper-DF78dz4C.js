const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ListingProblem-BqGjIKp_.js","assets/index-BzhZDp8g.js","assets/index-BIgYgq1K.css","assets/item-gZzFsuta.js","assets/ListingProblemSolution-B_068l0A.js"])))=>i.map(i=>d[i]);
import{c as k,r as c,_ as B,j as t,S as q}from"./index-BzhZDp8g.js";const H=c.lazy(()=>B(()=>import("./ListingProblem-BqGjIKp_.js"),__vite__mapDeps([0,1,2,3]))),U=c.lazy(()=>B(()=>import("./ListingProblemSolution-B_068l0A.js"),__vite__mapDeps([4,1,2,3]))),W=()=>{const r=c.useRef(0);return r.current+=1,r.current},I=r=>{const e=k.c(8),{label:n,value:s,highlight:m}=r;let l;e[0]!==n?(l=t.jsx("span",{className:"text-[10px] uppercase tracking-wide text-slate-400",children:n}),e[0]=n,e[1]=l):l=e[1];const a=`text-sm font-medium ${m==="danger"?"text-red-500":m==="good"?"text-emerald-500":"text-slate-700 dark:text-slate-100"}`;let i;e[2]!==a||e[3]!==s?(i=t.jsx("span",{className:a,children:s}),e[2]=a,e[3]=s,e[4]=i):i=e[4];let o;return e[5]!==l||e[6]!==i?(o=t.jsxs("div",{className:"flex flex-col px-3 py-2",children:[l,i]}),e[5]=l,e[6]=i,e[7]=o):o=e[7],o},G=r=>{const e=k.c(3);let n;e[0]!==r?(n=r===void 0?[]:r,e[0]=r,e[1]=n):n=e[1];const s=n,[m,l]=c.useState(null);let a;return e[2]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{const i=performance.now();requestAnimationFrame(()=>{requestAnimationFrame(()=>{l((performance.now()-i).toFixed(1))})})},e[2]=a):a=e[2],c.useEffect(a,s),m},Q=r=>{const e=k.c(38),{mode:n}=r,[s,m]=c.useState(null),l=W();let a;e[0]!==n?(a=[n],e[0]=n,e[1]=a):a=e[1];const i=G(a);let o;e[2]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{m(null)},e[2]=o):o=e[2];let _;e[3]!==n?(_=[n],e[3]=n,e[4]=_):_=e[4],c.useEffect(o,_);let j;e[5]===Symbol.for("react.memo_cache_sentinel")?(j={problem:{component:t.jsx(H,{}),codeSnippet:`
{userData.map((user) => (
  <Item variant="outline">
    <ItemMedia>
      <Avatar className="size-10">
        <AvatarImage src={user.profileImageUrl} />
        <AvatarFallback>{user.initials}</AvatarFallback>
      </Avatar>
    </ItemMedia>
    <ItemContent>
      <ItemTitle>
        {user.name}
        <sub>{user.email}</sub>
      </ItemTitle>
      <ItemDescription>{user.lastSeen}</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="icon-sm" variant="outline" className="rounded-full">
        <Plus />
      </Button>
    </ItemActions>
  </Item>
))}
        `},solution:{component:t.jsx(U,{}),codeSnippet:`
import { useVirtualizer } from "@tanstack/react-virtual";

const rowVirtualizer = useVirtualizer({
  count: userData.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => ROW_HEIGHT,
  overscan: 8,
});

{rowVirtualizer.getVirtualItems().map((row) => (
  <Item variant="outline">
    <ItemMedia>
      <Avatar className="size-10">
        <AvatarImage src={row.profileImageUrl} />
        <AvatarFallback>{row.initials}</AvatarFallback>
      </Avatar>
    </ItemMedia>
    <ItemContent>
      <ItemTitle>
        {row.name}
        <sub>{row.email}</sub>
      </ItemTitle>
      <ItemDescription>{row.lastSeen}</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="icon-sm" variant="outline" className="rounded-full">
        <Plus />
      </Button>
    </ItemActions>
  </Item>
))}
        `}},e[5]=j):j=e[5];const C=j,L=s&&Number(s.actualDuration)>16,{component:D,codeSnippet:P}=C[n];let w;e[6]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsx("span",{className:"text-lg font-medium text-slate-600",children:"Big List Performance Metrics"}),e[6]=w):w=e[6];const z=i?`${i} ms`:"—",E=i>16?"danger":"good";let u;e[7]!==z||e[8]!==E?(u=t.jsx(I,{label:"Paint",value:z,highlight:E}),e[7]=z,e[8]=E,e[9]=u):u=e[9];let d;e[10]!==l?(d=t.jsx(I,{label:"Renders",value:l}),e[10]=l,e[11]=d):d=e[11];const y=s?.phase||"—";let f;e[12]!==y?(f=t.jsx(I,{label:"Phase",value:y}),e[12]=y,e[13]=f):f=e[13];const F=s?`${s.actualDuration} ms`:"—",R=L?"danger":"good";let p;e[14]!==F||e[15]!==R?(p=t.jsx(I,{label:"Actual",value:F,highlight:R}),e[14]=F,e[15]=R,e[16]=p):p=e[16];const M=s?`${s.baseDuration} ms`:"—";let x;e[17]!==M?(x=t.jsx(I,{label:"Base",value:M}),e[17]=M,e[18]=x):x=e[18];let g;e[19]!==f||e[20]!==p||e[21]!==x||e[22]!==u||e[23]!==d?(g=t.jsxs("div",{className:"flex items-center justify-between px-6 pb-3",children:[w,t.jsxs("div",{className:"flex items-center rounded-md border bg-slate-50 dark:bg-slate-900/40 divide-x",children:[u,d,f,p,x]})]}),e[19]=f,e[20]=p,e[21]=x,e[22]=u,e[23]=d,e[24]=g):g=e[24];let b;e[25]!==P?(b=t.jsx("aside",{className:"w-full lg:w-1/2 rounded-lg bg-slate-50 p-4 overflow-auto",children:t.jsx("pre",{className:"text-xs font-mono whitespace-pre-wrap",children:P})}),e[25]=P,e[26]=b):b=e[26];let A;e[27]===Symbol.for("react.memo_cache_sentinel")?(A=t.jsx(q,{orientation:"vertical"}),e[27]=A):A=e[27];const T=`BigList-${n}`;let S;e[28]===Symbol.for("react.memo_cache_sentinel")?(S=(J,$,V,O)=>{m({phase:$,actualDuration:V.toFixed(1),baseDuration:O.toFixed(1)})},e[28]=S):S=e[28];let h;e[29]!==D||e[30]!==T?(h=t.jsx("main",{className:"w-full lg:w-1/2 rounded-lg bg-white p-4",children:t.jsx(c.Profiler,{id:T,onRender:S,children:D})}),e[29]=D,e[30]=T,e[31]=h):h=e[31];let v;e[32]!==b||e[33]!==h?(v=t.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 min-h-0 px-4",children:[b,A,h]}),e[32]=b,e[33]=h,e[34]=v):v=e[34];let N;return e[35]!==g||e[36]!==v?(N=t.jsxs(t.Fragment,{children:[g,v]}),e[35]=g,e[36]=v,e[37]=N):N=e[37],N};export{Q as default};
