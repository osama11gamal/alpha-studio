import{r as i,j as s,b as C,c as p,u as V,d as E,a as R,N as S}from"./index-DDEIRbcF.js";function O(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function z(...e){return n=>e.forEach(t=>O(t,n))}var w=i.forwardRef((e,n)=>{const{children:t,...a}=e,r=i.Children.toArray(t),o=r.find(W);if(o){const l=o.props.children,d=r.map(h=>h===o?i.Children.count(l)>1?i.Children.only(null):i.isValidElement(l)?l.props.children:null:h);return s.jsx(g,{...a,ref:n,children:i.isValidElement(l)?i.cloneElement(l,void 0,d):null})}return s.jsx(g,{...a,ref:n,children:t})});w.displayName="Slot";var g=i.forwardRef((e,n)=>{const{children:t,...a}=e;if(i.isValidElement(t)){const r=A(t);return i.cloneElement(t,{...Y(a,t.props),ref:n?z(n,r):r})}return i.Children.count(t)>1?i.Children.only(null):null});g.displayName="SlotClone";var P=({children:e})=>s.jsx(s.Fragment,{children:e});function W(e){return i.isValidElement(e)&&e.type===P}function Y(e,n){const t={...n};for(const a in n){const r=e[a],o=n[a];/^on[A-Z]/.test(a)?r&&o?t[a]=(...d)=>{o(...d),r(...d)}:r&&(t[a]=r):a==="style"?t[a]={...r,...o}:a==="className"&&(t[a]=[r,o].filter(Boolean).join(" "))}return{...e,...t}}function A(e){var a,r;let n=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}const v=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,y=C,L=(e,n)=>t=>{var a;if((n==null?void 0:n.variants)==null)return y(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:r,defaultVariants:o}=n,l=Object.keys(r).map(c=>{const u=t==null?void 0:t[c],m=o==null?void 0:o[c];if(u===null)return null;const f=v(u)||v(m);return r[c][f]}),d=t&&Object.entries(t).reduce((c,u)=>{let[m,f]=u;return f===void 0||(c[m]=f),c},{}),h=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((c,u)=>{let{class:m,className:f,...k}=u;return Object.entries(k).every(N=>{let[x,b]=N;return Array.isArray(b)?b.includes({...o,...d}[x]):{...o,...d}[x]===b})?[...c,m,f]:c},[]);return y(e,l,h,t==null?void 0:t.class,t==null?void 0:t.className)},_=L("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),j=i.forwardRef(({className:e,variant:n,size:t,asChild:a=!1,...r},o)=>{const l=a?w:"button";return s.jsx(l,{className:p(_({variant:n,size:t,className:e})),ref:o,...r})});j.displayName="Button";const H=()=>{const{language:e}=V(),n=E(),t=R(),{title:a,message:r}=n.state||{title:e==="en"?"Success!":"تم بنجاح!",message:e==="en"?"Your request has been received successfully.":"تم استلام طلبك بنجاح."};return s.jsxs("div",{className:p("min-h-screen flex flex-col bg-[#101014]",e==="ar"&&"lang-ar"),lang:e,children:[s.jsx(S,{}),s.jsx("main",{className:"flex-grow flex items-center justify-center",children:s.jsxs("section",{className:"w-full max-w-2xl mx-auto px-4 py-20 md:py-32 relative flex flex-col items-center justify-center",children:[s.jsxs("div",{className:"relative z-10 w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-10 flex flex-col items-center animate-fade-in-up",children:[s.jsx("div",{className:"mb-8",children:s.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-in",children:s.jsx("svg",{className:"w-14 h-14 text-white animate-success-check",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M5 13l5 5L19 7"})})})}),s.jsx("h1",{className:"mb-4 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight animate-fade-in",children:a}),s.jsx("p",{className:"text-gray-300 text-lg mb-6 text-center",children:r}),s.jsx(j,{onClick:()=>t("/"),className:"px-6 py-2 rounded-full bg-green-600 text-white font-bold shadow hover:bg-green-700 transition-all duration-200 text-base",children:e==="en"?"Return Home":"العودة للرئيسية"})]}),s.jsx("div",{className:"absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-green-400/30 to-blue-500/10 rounded-full blur-3xl animate-float-slow"}),s.jsx("div",{className:"absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tr from-emerald-400/20 to-indigo-500/10 rounded-full blur-3xl animate-float-slow2"})]})}),s.jsx("style",{children:`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.8s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes bounce-in {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes success-check {
          0% { stroke-dasharray: 0, 24; }
          100% { stroke-dasharray: 24, 0; }
        }
        .animate-success-check path {
          stroke-dasharray: 24, 0;
          stroke-dashoffset: 0;
          animation: success-check 0.7s 0.3s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.08); }
        }
        .animate-float-slow2 { animation: float-slow2 8s ease-in-out infinite; }
      `})]})};export{H as default};
