import{S as T,i as q,s as w,l as g,a as y,m as p,p as S,c as b,h as d,q as l,O as I,b as O,H as _,n as C}from"./index-96a1ec82.js";function E(n){let e;return{c(){e=g("figcaption")},l(a){e=p(a,"FIGCAPTION",{});var c=S(e);c.forEach(d)},m(a,c){O(a,e,c),e.innerHTML=n[1]},p(a,c){c&2&&(e.innerHTML=a[1])},d(a){a&&d(e)}}}function H(n){let e,a,c,u,f,o,m,t,h,v,i=n[1]&&E(n);return{c(){e=g("picture"),a=g("source"),u=y(),f=g("source"),m=y(),t=g("img"),v=y(),i&&i.c(),this.h()},l(r){e=p(r,"PICTURE",{class:!0});var s=S(e);a=p(s,"SOURCE",{srcset:!0,type:!0}),u=b(s),f=p(s,"SOURCE",{srcset:!0,type:!0}),m=b(s),t=p(s,"IMG",{src:!0,alt:!0,loading:!0,decoding:!0,class:!0}),v=b(s),i&&i.l(s),s.forEach(d),this.h()},h(){l(a,"srcset",c=n[2]+".avif"),l(a,"type","image/avif"),l(f,"srcset",o=n[2]+".webp"),l(f,"type","image/webp"),I(t.src,h=n[2]+".png")||l(t,"src",h),l(t,"alt",n[0]),l(t,"loading","lazy"),l(t,"decoding","async"),l(t,"class","svelte-1gy5t1o"),l(e,"class","svelte-1gy5t1o")},m(r,s){O(r,e,s),_(e,a),_(e,u),_(e,f),_(e,m),_(e,t),_(e,v),i&&i.m(e,null)},p(r,[s]){s&4&&c!==(c=r[2]+".avif")&&l(a,"srcset",c),s&4&&o!==(o=r[2]+".webp")&&l(f,"srcset",o),s&4&&!I(t.src,h=r[2]+".png")&&l(t,"src",h),s&1&&l(t,"alt",r[0]),r[1]?i?i.p(r,s):(i=E(r),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:C,o:C,d(r){r&&d(e),i&&i.d()}}}function M(n,e,a){let{alt:c}=e,{path:u=null}=e,{filename:f}=e,{figcaption:o=null}=e,m;return n.$$set=t=>{"alt"in t&&a(0,c=t.alt),"path"in t&&a(3,u=t.path),"filename"in t&&a(4,f=t.filename),"figcaption"in t&&a(1,o=t.figcaption)},n.$$.update=()=>{n.$$.dirty&24&&a(2,m=`/optimized-images/${u?u+"/":""}${f}`)},[c,o,m,u,f]}class U extends T{constructor(e){super(),q(this,e,M,H,w,{alt:0,path:3,filename:4,figcaption:1})}}export{U as I};
