import{S as z,i as D,s as E,l as k,L as I,m as w,p as d,M,h as p,q as c,r as $,b as C,H as y,n as b,F as O,a as H,c as J,g as K,T as N,d as Z,I as T,J as q,K as B,f as m,t as v,o as j,U as P,e as V,x as F,y as R,z as U,C as G,V as Q}from"./index-96a1ec82.js";function W(o){let e,s,n;return{c(){e=k("div"),s=I("svg"),n=I("path"),this.h()},l(l){e=w(l,"DIV",{class:!0,style:!0});var t=d(e);s=M(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var a=d(s);n=M(a,"path",{d:!0,fill:!0}),d(n).forEach(p),a.forEach(p),t.forEach(p),this.h()},h(){c(n,"d","M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"),c(n,"fill",o[0]),c(s,"width",o[1]),c(s,"height",o[1]),c(s,"viewBox","0 0 160 160"),c(s,"fill","none"),c(s,"xmlns","http://www.w3.org/2000/svg"),c(s,"class","svelte-sixv8c"),c(e,"class","wrapper svelte-sixv8c"),$(e,"top",o[2].top),$(e,"left",o[2].left)},m(l,t){C(l,e,t),y(e,s),y(s,n)},p(l,[t]){t&1&&c(n,"fill",l[0]),t&2&&c(s,"width",l[1]),t&2&&c(s,"height",l[1]),t&4&&$(e,"top",l[2].top),t&4&&$(e,"left",l[2].left)},i:b,o:b,d(l){l&&p(e)}}}function X(o,e,s){let{color:n}=e,{size:l}=e,{style:t}=e;return o.$$set=a=>{"color"in a&&s(0,n=a.color),"size"in a&&s(1,l=a.size),"style"in a&&s(2,t=a.style)},[n,l,t]}class Y extends z{constructor(e){super(),D(this,e,X,W,E,{color:0,size:1,style:2})}}function A(o,e,s){const n=o.slice();return n[6]=e[s],n}function L(o,e){let s,n,l;return n=new Y({props:{color:e[6].color,size:e[6].size,style:e[6].style}}),{key:o,first:null,c(){s=V(),F(n.$$.fragment),this.h()},l(t){s=V(),R(n.$$.fragment,t),this.h()},h(){this.first=s},m(t,a){C(t,s,a),U(n,t,a),l=!0},p(t,a){e=t;const u={};a&1&&(u.color=e[6].color),a&1&&(u.size=e[6].size),a&1&&(u.style=e[6].style),n.$set(u)},i(t){l||(m(n.$$.fragment,t),l=!0)},o(t){v(n.$$.fragment,t),l=!1},d(t){t&&p(s),G(n,t)}}}function x(o){let e,s=[],n=new Map,l,t,a,u=o[0];const g=r=>r[6].id;for(let r=0;r<u.length;r+=1){let i=A(o,u,r),h=g(i);n.set(h,s[r]=L(h,i))}const _=o[2].default,f=O(_,o,o[1],null);return{c(){e=k("div");for(let r=0;r<s.length;r+=1)s[r].c();l=H(),t=k("div"),f&&f.c(),this.h()},l(r){e=w(r,"DIV",{class:!0});var i=d(e);for(let S=0;S<s.length;S+=1)s[S].l(i);l=J(i),t=w(i,"DIV",{class:!0});var h=d(t);f&&f.l(h),h.forEach(p),i.forEach(p),this.h()},h(){c(t,"class","slot-wrapper svelte-exdx8u"),c(e,"class","sparkle-wrapper svelte-exdx8u")},m(r,i){C(r,e,i);for(let h=0;h<s.length;h+=1)s[h].m(e,null);y(e,l),y(e,t),f&&f.m(t,null),a=!0},p(r,[i]){i&1&&(u=r[0],K(),s=N(s,i,g,1,r,u,n,e,Q,L,l,A),Z()),f&&f.p&&(!a||i&2)&&T(f,_,r,r[1],a?B(_,r[1],i,null):q(r[1]),null)},i(r){if(!a){for(let i=0;i<u.length;i+=1)m(s[i]);m(f,r),a=!0}},o(r){for(let i=0;i<s.length;i+=1)v(s[i]);v(f,r),a=!1},d(r){r&&p(e);for(let i=0;i<s.length;i+=1)s[i].d();f&&f.d(r)}}}const ee="hsl(50deg, 100%, 50%)";function te(o,e,s){let{$$slots:n={},$$scope:l}=e;const t=(_,f)=>Math.floor(Math.random()*(f-_))+_,a=(_=ee)=>({id:String(t(1e4,99999)),createdAt:Date.now(),color:_,size:t(10,20),style:{top:t(-10,80)+"%",left:t(0,100)+"%"}});let u=[],g;return j(()=>{g=setInterval(()=>{const _=Date.now(),f=a(),r=u.filter(i=>_-i.createdAt<1500);r.push(f),s(0,u=r)},400)}),P(()=>{clearInterval(g)}),o.$$set=_=>{"$$scope"in _&&s(1,l=_.$$scope)},[u,l,n]}class se extends z{constructor(e){super(),D(this,e,te,x,E,{})}}function le(o){let e,s;const n=o[0].default,l=O(n,o,o[1],null);return{c(){e=k("strong"),l&&l.c(),this.h()},l(t){e=w(t,"STRONG",{class:!0});var a=d(e);l&&l.l(a),a.forEach(p),this.h()},h(){c(e,"class","text-secondary")},m(t,a){C(t,e,a),l&&l.m(e,null),s=!0},p(t,a){l&&l.p&&(!s||a&2)&&T(l,n,t,t[1],s?B(n,t[1],a,null):q(t[1]),null)},i(t){s||(m(l,t),s=!0)},o(t){v(l,t),s=!1},d(t){t&&p(e),l&&l.d(t)}}}function ne(o){let e,s;return e=new se({props:{$$slots:{default:[le]},$$scope:{ctx:o}}}),{c(){F(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,l){U(e,n,l),s=!0},p(n,[l]){const t={};l&2&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),s=!1},d(n){G(e,n)}}}function ae(o,e,s){let{$$slots:n={},$$scope:l}=e;return o.$$set=t=>{"$$scope"in t&&s(1,l=t.$$scope)},[n,l]}class oe extends z{constructor(e){super(),D(this,e,ae,ne,E,{})}}export{oe as S};
