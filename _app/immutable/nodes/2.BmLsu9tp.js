import{a as O,f as w,c as G,t as tt,s as ie,d as Te,b as _e,e as Oe}from"../chunks/Bz9pcTi_.js";import{K as nt,d as st,aL as rt,ap as ot,h as ge,aC as at,aD as Me,g as ye,f as Be,i as it,au as ct,j as Qe,b as ze,c as lt,a4 as dt,u as ce,aM as ut,aN as Ge,C as D,aO as ft,a0 as Ct,aP as It,p as V,A as H,w as L,n as b,t as se,o as x,an as ht,aQ as pt,q as y,v as B,a6 as le,x as X,a7 as he,B as Pt,aR as vt,V as Rt,aS as Et}from"../chunks/R3T74W7k.js";import{a as Re,b as k,s as K,r as Z}from"../chunks/vGbNO2P5.js";import{i as re,b as Ne}from"../chunks/D0UFlnsV.js";import{k as Xe,P as Pe,l as Le,e as Ee,B as z,i as be,h as gt,m as $e,I as J,s as ee,r as We,n as At,t as oe,o as mt,a as ae,p as ve,u as Dt,q as Q,v as Ye,b as je,j as fe,w as Ve,x as qe,g as ue,y as Ae}from"../chunks/DnXqRNhB.js";function Ot(t,e){let n=null,s=ge;var o;if(ge){n=it;for(var r=ct(document.head);r!==null&&(r.nodeType!==at||r.data!==t);)r=Me(r);if(r===null)ye(!1);else{var a=Me(r);r.remove(),Be(a)}}ge||(o=document.head.appendChild(nt()));try{st(()=>e(o),rt|ot)}finally{s&&(ye(!0),Be(n))}}function Nt(t,e,n){Qe(()=>{var s=ze(()=>e(t,n?.())||{});if(s?.destroy)return()=>s.destroy()})}function St(t=!1){const e=lt,n=e.l.u;if(!n)return;let s=()=>ft(e.s);if(t){let o=0,r={};const a=Ct(()=>{let i=!1;const v=e.s;for(const E in v)v[E]!==r[E]&&(r[E]=v[E],i=!0);return i&&o++,o});s=()=>D(a)}n.b.length&&dt(()=>{xe(e,s),Ge(n.b)}),ce(()=>{const o=ze(()=>n.m.map(ut));return()=>{for(const r of o)typeof r=="function"&&r()}}),n.a.length&&ce(()=>{xe(e,s),Ge(n.a)})}function xe(t,e){if(t.l.s)for(const n of t.l.s)D(n);e()}const Tt=!0,bn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Tt},Symbol.toStringTag,{value:"Module"}));It();const _t=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,Lt=/OCCURS\s+(\d+)\s+TIMES/i,bt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function $t(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMP-1"||e==="COMP-2"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function Fe(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function Mt(t){const n=t.split(/\r?\n/).map(r=>r.length>6?r.slice(6):r).map(r=>r.replace(/\r$/,"")).filter(r=>r.trim().length>0).filter(r=>!r.trim().startsWith("*")),s=[];let o="";for(let r=0;r<n.length;r++){const a=n[r],i=a.trimEnd(),v=i.endsWith("-"),E=!i.endsWith(".");v||E?o+=i.replace(/-$/,""):(o+=a,s.push(o.trim()),o="")}return o.trim()&&s.push(o.trim()),s}function yt(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),o=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:o,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=Fe(s[1]),v=Fe(s[2]);return{raw:t,type:"NUMERIC",length:i+v,decimals:v||void 0,signed:n}}const o=e.split("V"),r=(o[0].match(/9/g)||[]).length,a=o[1]?(o[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:r+a,decimals:a||void 0,signed:n}}}function Bt(t){const e=Mt(t),n=[],s=[];let o=1;for(const r of e){const a=r.trim().split(/\s+/),i=parseInt(a[0],10),v=a[1];if(Number.isNaN(i)||!v)continue;let E=v.replace(/\.$/,"");const h={level:i,name:E,isFiller:E.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},d=r.match(bt);d&&(h.redefines=d[1].replace(/\.$/,""));const c=r.match(_t);if(c){const f=yt(c[2]);f&&(h.pic=f)}const I=r.match(Lt);I&&(h.occurs={times:parseInt(I[1],10)});let u;if(c){const f=r.slice(c.index+c[0].length);let l=f.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);l?u=l[1]:(l=f.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),l&&(u=l[1]))}else{let f=r.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);f||(f=r.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),f&&(u=f[1])}for(u&&(h.usage=$t(u));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?n.push(h):s[s.length-1].children.push(h),s.push(h)}return(function r(a){for(const i of a)i.isFiller&&(i.name=`FILLER-${o++}`),r(i.children)})(n),n}function He(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP-1")return 4;if(e==="COMP-2")return 8;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=n.type==="NUMERIC"?n.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=n.type==="NUMERIC"?n.length:0;return Math.ceil((s+1)/2)}return n.length}function Gt(t){const e=new Map;(function d(c){for(const I of c)e.set(I.name,I),d(I.children)})(t);const n={};(function d(c){for(const I of c){if(I.redefines){const u=I.redefines;n[u]||=new Set([u]),n[u].add(I.name)}d(I.children)}})(t);const s={};for(const[d,c]of Object.entries(n))s[d]=Array.from(c);const o={};for(const[d,c]of Object.entries(s))for(const I of c)o[I]=d;const r=d=>{if(d.children.length&&!d.pic&&!d.redefines){let u=0;for(const l of d.children)u+=r(l);const f=d.occurs?.times??1;return u*f}const c=d.pic?He(d):0,I=d.occurs?.times??1;return c*I},a={},i=[];let v=0;const E=[],h=(d,c)=>{let I=c;for(const u of d){let f=I;if(u.redefines){const C=u.redefines;C in a?f=a[C]:console.warn(`REDEFINES base not found yet: ${C}. Ensure base appears before redefiner.`)}u.name in a||(a[u.name]=f);const l=o[u.name];let m=!1;l&&(E.push({group:l,member:u.name}),m=!0);const R=r(u);if(u.children.length&&!u.pic){const C=u.occurs?.times??1,p=C?R/C:R;for(let N=0;N<C;N++)h(u.children,f+N*p)}else{const C=u.occurs?.times??1,p=u.pic?He(u):0;for(let N=0;N<C;N++)i.push({...u,offset:f+N*p,byteLength:p,variantPath:E.length?E.slice():void 0})}m&&E.pop(),u.redefines?v=Math.max(v,f+R):(I+=R,v=Math.max(v,I))}};return h(t,0),{root:t,fieldsFlat:i,recordLength:v,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const ke={CNAB240:`      *----------------------------CNAB240-----------------------------*
      *----------------------------HDR-ARQ-----------------------------*
       01  CNAB240                      PIC X(240).
       01  HEADER-ARQUIVO               REDEFINES CNAB240.
           03  CD-BANCO-HDR-ARQ         PIC 9(003).
           03  NR-LOTE-HDR-ARQ          PIC 9(004).
           03  REG-TIP-0                PIC 9(001) VALUE '0'.
           03  FILLER                   PIC X(009).
      *
           03  TIP-INSCR-HDR-ARQ        PIC 9(001).
           03  NR-INSCR-HDR-ARQ         PIC 9(014).
      *
           03  CONVENIO-HDR-ARQ         PIC X(020).
           03  CONVENIO-HDR-ARQ-E       REDEFINES CONVENIO-HDR-ARQ.
               05  NR-CTR-HDR-ARQ       PIC 9(009).
               05  CD-PRD-HDR-ARQ       PIC 9(004).
               05  FILLER               PIC X(005).
               05  IND-TST-HDR-ARQ      PIC X(002).
      *
           03  PREFIXO-AG-HDR-ARQ       PIC 9(005).
           03  DIGITO-AG-HDR-ARQ        PIC X(001).
           03  PREFIXO-CT-HDR-ARQ       PIC 9(012).
           03  DIGITO-CT-HDR-ARQ        PIC X(001).
           03  DIGITO-AG-CT-HDR-ARQ     PIC X(001).
           03  NM-EMPRESA-HDR-ARQ       PIC X(030).
           03  NM-BANCO-HDR-ARQ         PIC X(030).
      *
           03  FILLER                   PIC X(010).
      *
           03  CD-RMS-RTN               PIC X(001).
           03  DMA-ARQ                  PIC X(008).
           03  HMS-ARQ                  PIC X(006).
           03  SEQ-ARQ                  PIC 9(006).
           03  NR-VRS-ARQ               PIC 9(003).
           03  DENS-ARQ                 PIC 9(005).

      *
           03  USO-BANCO                PIC X(019).
           03  USO-EMPRESA              PIC X(020).
      *
           03  FILLER                   PIC X(017).
           03  IND-SRVC-HDR-ARQ         PIC 9(002).
           03  COD-OCOR-HDR-ARQ         PIC X(002) OCCURS 5 TIMES.
      *----------------------------HDR-AB------------------------------*
       01  HEADER-AB                    REDEFINES CNAB240.
           03  CD-BANCO-HDR-AB          PIC 9(003).
           03  NR-LOTE-HDR-AB           PIC 9(004).
           03  REG-TIPO-1               PIC 9(001).
      *
           03  TIP-OP-HDR-AB            PIC X(001).
           03  TIP-SRVC-HDR-AB          PIC 9(002).
           03  FORMA-LCTO-HDR-AB        PIC 9(002).
           03  NR-VRS-HDR-AB            PIC 9(003).
      *
           03  FILLER                   PIC X(001).
      *
           03  TIP-INSCR-HDR-AB         PIC 9(001).
           03  NR-INSCR-HDR-AB          PIC 9(014).
      *
           03  CONVENIO-HDR-AB          PIC X(020).
           03  CONVENIO-HDR-AB-E        REDEFINES CONVENIO-HDR-AB.
               05  NR-CTR-HDR-AB        PIC 9(009).
               05  CD-PRD-HDR-AB        PIC 9(004).
               05  FILLER               PIC X(005).
               05  IND-TST-HDR-AB       PIC X(002).
      *
           03  PREFIXO-AG-HDR-AB        PIC 9(005).
           03  DIGITO-AG-HDR-AB         PIC X(001).
           03  PREFIXO-CT-HDR-AB        PIC 9(012).
           03  DIGITO-CT-HDR-AB         PIC X(001).
           03  DIGITO-AG-CT-HDR-AB      PIC X(001).
           03  NM-EMPRESA-HDR-AB        PIC X(030).
      *
           03  INFO1-MSG-HDR-AB         PIC X(040).
           03  END-LOG-HDR-AB           PIC X(030).
           03  END-NRO-HDR-AB           PIC 9(005).
           03  END-CMPT-HDR-AB          PIC X(015).
           03  END-CIDADE-HDR-AB        PIC X(020).
           03  END-CEP-HDR-AB           PIC X(005).
           03  END-CEP-CMPT-HDR-AB      PIC X(003).
           03  END-ESTADO-HDR-AB        PIC X(002).
      *
           03  FILLER                   PIC X(008).
      *
           03  COD-OCOR-HDR-AB          PIC X(002) OCCURS 5 TIMES.
      *----------------------------SEGA-------------------------------*
       01  SEGMENTO-A                   REDEFINES CNAB240.
           03  CD-BANCO-SEGA            PIC 9(003).
           03  NR-LOTE-SEGA             PIC 9(004).
           03  REG-TIPO-3               PIC 9(001).
      *
           03  NR-SEQ-LT-SEGA           PIC 9(005).
           03  SEGA                     PIC X(001).
           03  MVT-TIP-SEGA             PIC 9(001).
           03  MVT-CD-SEGA              PIC 9(002).
      *
           03  CD-COMP                  PIC 9(003).
           03  CD-BANCO                 PIC 9(003).
      *
           03  PREFIXO-AG-FAV-SEGA      PIC 9(005).
           03  DIGITO-AG-FAV-SEGA       PIC X(001).
           03  PREFIXO-CT-FAV-SEGA      PIC 9(012).
           03  DIGITO-CT-FAV-SEGA       PIC X(001).
           03  DIGITO-AG-CT-SEGA        PIC X(001).
           03  NM-FAV-SEGA              PIC X(030).
      *
           03  NR-DOC-EMPRESA-SEGA      PIC X(020).
           03  DMA-PGTO-SEGA            PIC 9(008).
           03  TIP-MOEDA-SEGA           PIC X(003).
           03  QNTD-MOEDA-SEGA          PIC 9(010)V9(005).
           03  VLR-PGTO-SEGA            PIC 9(013)V99.
           03  NR-DOC-BANCO-SEGA        PIC X(020).
           03  DMA-REAL-PGTO-SEGA       PIC 9(008).
           03  VLR-REAL-PGTO-SEGA       PIC 9(013)V99.
      *
           03  INFO2-SEGA               PIC X(040).
      *
           03  CD-FNLD-DOC-SEGA         PIC X(002).
           03  CD-FNLD-TED-SEGA         PIC X(005).
           03  CD-FNLD-CMPT-SEGA        PIC X(002).
      *
           03  FILLER                   PIC X(003).
      *
           03  AVISO-SEGA               PIC 9(001).
           03  COD-OCOR-SEGA            PIC X(002) OCCURS 5 TIMES.
      *----------------------------SEGB-------------------------------*
       01  SEGMENTO-B                   REDEFINES CNAB240.
           03  CD-BANCO-SEGB            PIC 9(003).
           03  NR-LOTE-SEGB             PIC 9(004).
           03  REG-TIPO-3B              PIC 9(001).
      *
           03  NR-SEQ-LT-SEGB           PIC 9(005).
           03  SEGB                     PIC X(001).
      *
           03  FILLER                   PIC X(003).
      *
           03  IND-TIP-FAV              PIC 9(001).
           03  NR-INSC-FAV              PIC X(014).
           03  END-LOG-SEGB             PIC X(030).
           03  END-NRO-SEGB             PIC 9(005).
           03  END-CMPT-SEGB            PIC X(015).
           03  END-CIDADE-SEGB          PIC X(020).
           03  END-CEP-SEGB             PIC X(005).
           03  END-CEP-CMPT-SEGB        PIC X(003).
           03  END-ESTADO-SEGB          PIC X(002).
      *
           03  DMA-VCTO-B               PIC  9(008).
           03  VLR-DCTO-B               PIC  9(013)V99.
           03  VLR-ABAT-B               PIC  9(013)V99.
           03  VLR-DESC-B               PIC  9(013)V99.
           03  VLR-MORA-B               PIC  9(013)V99.
           03  VLR-MULT-B               PIC  9(013)V99.
      *
           03  CD-DOC-FAV-SEGB          PIC X(015).
           03  AVISO-SEGB               PIC 9(001).
           03  CD-UG-CENTRAL            PIC 9(006).
           03  CD-ISPB                  PIC 9(008).
      *----------------------------TRLLOTE-----------------------------*
       01  TRAILER-LOTE                 REDEFINES CNAB240.
           03  CD-BANCO-TRLL            PIC 9(003).
           03  NR-LOTE-TRLL             PIC 9(004).
           03  REG-TIPO-5               PIC 9(001).
           03  FILLER                   PIC X(009).
           03  QTD-REG-TRLL             PIC 9(006).
           03  TOT-DEB-TRLL             PIC 9(016)V9(02).
           03  QTD-MOEDA-TRLL           PIC 9(013)V9(05).
           03  NR-AVISO-DEB             PIC 9(006).
           03  FILLER                   PIC X(165).
           03  COD-OCOR-SEGA            PIC X(002) OCCURS 5 TIMES.
      *----------------------------TRLARQ------------------------------*
       01  TRAILER-ARQUIVO              REDEFINES CNAB240.
           03  CD-BANCO-TRLARQ          PIC 9(003).
           03  NR-LOTE-TRLARQ           PIC 9(004).
           03  REG-TIPO-9               PIC 9(001).
           03  FILLER                   PIC X(009).
           03  QTD-LOTES-TRLARQ         PIC 9(006).
           03  QTD-REG-TRLARQ           PIC 9(006).
           03  QTD-CTAS-TRLARQ          PIC 9(006).
           03  FILLER                   PIC X(205).`};function Xt(t,e=250){let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>t(...s),e)}}var Vt=w('<span class="err"> </span>'),xt=w('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function Ft(t,e){V(e,!0);const n=()=>k($e,"$model",s),[s,o]=Re();let r=le(""),a=le("");function i(R){try{const C=Gt(Bt(R));Xe(C);const p=new Uint8Array(C.recordLength);p.fill(32),gt([p]),H(a,"")}catch(C){H(a,C?.message??"Erro ao processar copybook",!0)}}const v=Xt(i,300);function E(R){H(r,ke[R]+`
`),i(D(r))}ce(()=>{if(!D(r)?.trim()){Xe(null),H(a,"");return}v(D(r))});var h=xt(),d=L(b(h),2);Pe(d,{children:(R,C)=>{var p=G(),N=b(p);Ee(N,17,()=>Object.keys(ke),be,($,S)=>{z($,{onclick:()=>E(D(S)),children:(U,te)=>{ht();var F=tt();se(()=>ie(F,D(S))),O(U,F)},$$slots:{default:!0}})}),O(R,p)},$$slots:{default:!0}});var c=L(d,2);pt(c);var I=L(c,2),u=y(I),f=y(u);B(u);var l=L(u,2);{var m=R=>{var C=Vt(),p=y(C,!0);B(C),se(()=>ie(p,D(a))),O(R,C)};re(l,R=>{D(a)&&R(m)})}B(I),se(()=>ie(f,`len: ${(n()?n().recordLength:"—")??""}`)),Le(c,()=>D(r),R=>H(r,R)),O(t,h),x(),o()}function Ht(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function Ke(t,e){return t.fieldsFlat.filter(n=>Ht(n,e))}function kt(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];J(t,K({name:"arrow-down-to-line"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function wt(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];J(t,K({name:"arrow-up-to-line"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function Ut(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];J(t,K({name:"chevrons-left"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function Qt(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];J(t,K({name:"chevrons-right"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function zt(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];J(t,K({name:"copy"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function Wt(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];J(t,K({name:"minus"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function Ze(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];J(t,K({name:"plus"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function Yt(t,e){V(e,!0);let n=Z(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];J(t,K({name:"trash"},()=>n,{get iconNode(){return s},children:(o,r)=>{var a=G(),i=b(a);ee(i,()=>e.children??X),O(o,a)},$$slots:{default:!0}})),x()}function jt(t,e,n){const s=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),o=Number(n);if(isNaN(o))return;const r=e.pic?.signed??!1;switch(e.byteLength){case 1:r?s.setInt8(0,o):s.setUint8(0,o);break;case 2:r?s.setInt16(0,o,!1):s.setUint16(0,o,!1);break;case 4:r?s.setInt32(0,o,!1):s.setUint32(0,o,!1);break}}function qt(t,e,n){const s=e.byteLength,o=!!e.pic?.signed;let r=!1,a=n;o&&(n[0]==="-"&&(r=!0),a=n.slice(1));const i=s*2-1,v=a.padStart(i,"0");let E=v.length-1;for(let h=s-1;h>=0;h--){let d,c;h===s-1?(d=Number(v[E--]),c=r?13:12):(c=Number(v[E--]),d=Number(v[E--])),t[e.offset+h]=d<<4|c}}const me=new TextEncoder;new TextDecoder("ascii");const Kt=["{","A","B","C","D","E","F","G","H","I"],Zt=["}","J","K","L","M","N","O","P","Q","R"];function Jt(t,e,n){const s=e.byteLength,o=String(n);if(console.log(`raw: ${o}`),e.pic?.type==="NUMERIC"){const a=!!e.pic.signed,i=e.pic.decimals??0,v=o.replace(",",".");console.log(`normalized: ${v}`);let E=!1,h=v;a&&/^[+-]/.test(h)&&(E=h[0]==="-",h=h.slice(1)),console.log(`numeric: ${h}`);const[d="",c=""]=h.split(".");console.log(`iRaw: ${d}`,`dRaw: ${c}`);const I=d.replace(/\D/g,""),u=c.replace(/\D/g,""),f=s,l=i,m=f-l,R=I.padStart(m," ")+u.padEnd(l," ");if(!a){t.set(me.encode(R),e.offset);return}const C=Number(R.at(-1)??0),p=E?Zt[C]:Kt[C],N=R.slice(0,-1)+p;t.set(me.encode(N),e.offset);return}const r=o.padEnd(s," ");t.set(me.encode(r),e.offset)}function en(t){const e=t.usage?.toUpperCase();return!e||e==="DISPLAY"?"DISPLAY":e==="COMP-1"?"COMP-1":e==="COMP-2"?"COMP-2":e==="COMP-3"||e==="PACKED-DECIMAL"?"COMP-3":e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"?"BINARY":"DISPLAY"}function tn(t,e,n){switch(en(e)){case"DISPLAY":return Jt(t,e,n);case"COMP-3":return qt(t,e,n);case"BINARY":return jt(t,e,n)}}var nn=w('<div class="field svelte-n1ol00"><!> <input autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" class="svelte-n1ol00"/></div>');function sn(t,e){V(e,!0);let n,s=le(""),o=he(()=>E(D(s))),r=le(!1);const a=`${e.field.name} : ${e.field.pic?.raw} : [${e.field.offset}..${e.field.offset+e.field.byteLength-1}]`;ce(()=>{});function i(l){e.field.pic?.type==="NUMERIC"&&H(s,l.target.value,!0),Dt(m=>{tn(m,e.field,v(D(s)))})}function v(l){return console.log(`parsing: ${l}`),(e.field.pic?.signed?D(r)?"-":"+":"")+l.replace(/\D/g,"")}function E(l){const m=e.field.pic;if(!m||!l)return l;if(m.type==="NUMERIC"){const R=e.field.byteLength-m.decimals;let C=l.replace(/\D/g,"");if(C.length>R){const p=C.slice(0,R),N=C.slice(-(C.length-R));console.log(-Math.max(0,C.length-R)),C=N?`${p}.${N}`:p}return C}return l}function h(l){if(!l.pic)return"";if(l.pic.type==="ALPHA")return"X".repeat(l.byteLength);if(l.pic.type==="NUMERIC"){l.pic.signed;const m=l.pic.decimals??0,C=l.byteLength-m;let p="";return p+="9".repeat(C),m>0&&(p+="."+"9".repeat(m)),p}return""}var d=nn();let c;var I=y(d);{var u=l=>{z(l,{onclick:()=>{H(r,!D(r)),n.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))},muted:!0,children:(m,R)=>{var C=G(),p=b(C);{var N=S=>{Ze(S,{size:16,strokeWidth:3})},$=S=>{Wt(S,{size:16,strokeWidth:3})};re(p,S=>{D(r)?S($,-1):S(N)})}O(m,C)},$$slots:{default:!0}})};re(I,l=>{e.field.pic?.signed&&l(u)})}var f=L(I,2);We(f),Ne(f,l=>n=l,()=>n),At(f,()=>oe(a,"focus")),B(d),se(l=>{c=mt(d,"",c,{"flex-basis":`calc(${e.field.byteLength+(e.field.pic?.signed?1:0)}ch + 2.4rem ${e.field.pic?.signed?"+ 2.6rem":""} ${e.field.pic?.decimals?"+ 1.5rem":""})`}),ae(f,"placeholder",l),ae(f,"name",e.field.name),ae(f,"inputmode",e.field.pic?.type==="NUMERIC"?"decimal":"text"),ae(f,"maxlength",e.field.byteLength+(e.field.pic?.decimals?1:0))},[()=>h(e.field)]),_e("input",f,i),Oe("focus",f,()=>ve.set(e.field)),Oe("blur",f,()=>ve.set(null)),Le(f,()=>D(o),l=>H(o,l)),O(t,d),x()}Te(["input"]);function rn(t){return t()}function on(t){t.forEach(rn)}const Ce=[],we=[],pe=[],Ue=[],Je=Promise.resolve();let Se=!1;function an(){Se||(Se=!0,Je.then(dn))}function cn(){return an(),Je}function ln(t){pe.push(t)}const De=new Set;let Ie=0;function dn(){do{for(;Ie<Ce.length;){const t=Ce[Ie];Ie++,un(t.$$)}for(Ce.length=0,Ie=0;we.length;)we.pop()();for(let t=0;t<pe.length;t+=1){const e=pe[t];De.has(e)||(De.add(e),e())}pe.length=0}while(Ce.length);for(;Ue.length;)Ue.pop()();Se=!1,De.clear()}function un(t){if(t.fragment!==null){t.update(),on(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ln)}}const fn={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},q=(t,e)=>new CustomEvent(t,{detail:e});function Cn(t,e={}){const{root:n,rootMargin:s,threshold:o,unobserveOnEnter:r}=Object.assign(Object.assign({},fn),e);let a={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const v=new IntersectionObserver((E,h)=>{E.forEach(d=>{a.y>d.boundingClientRect.y?i.vertical="up":i.vertical="down",a.x>d.boundingClientRect.x?i.horizontal="left":i.horizontal="right",a={y:d.boundingClientRect.y,x:d.boundingClientRect.x};const c={inView:d.isIntersecting,entry:d,scrollDirection:i,node:t,observer:h};t.dispatchEvent(q("inview_change",c)),t.dispatchEvent(q("change",c)),d.isIntersecting?(t.dispatchEvent(q("inview_enter",c)),t.dispatchEvent(q("enter",c)),r&&h.unobserve(t)):(t.dispatchEvent(q("inview_leave",c)),t.dispatchEvent(q("leave",c)))})},{root:n,rootMargin:s,threshold:o});return cn().then(()=>{t.dispatchEvent(q("inview_init",{observer:v,node:t})),t.dispatchEvent(q("init",{observer:v,node:t}))}),v.observe(t),{destroy(){v.unobserve(t)}}}}var In=w('<div><span class="row-index svelte-1c8e44s"></span> <button type="button" class="svelte-1c8e44s"><pre class="svelte-1c8e44s"> </pre></button></div>'),hn=w('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span class="svelte-1c8e44s"># Registro</span></div> <!></div></div>');function pn(t,e){V(e,!0);const n=()=>k(Q,"$currentRecordIndex",a),s=()=>k(ve,"$activeField",a),o=()=>k(Ye,"$buffer",a),r=()=>k(fe,"$records",a),[a,i]=Re(),v=new TextDecoder("ascii"),E=[];let h=[],d,c;function I(){E[n()]?.parentElement?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function u(p){p&&c.scrollTo({left:p.offset*8,behavior:"smooth"})}function f(p){Q.set(p)}function l(){const p=Pt(ve);if(!CSS.highlights){console.log("CSS Custom Highlight API not supported.");return}if(CSS.highlights.clear(),!p)return;const N=E[n()]?.querySelector("pre");if(!N)return;const $=N.firstChild;if($&&$.nodeType===Node.TEXT_NODE){const S=new Range;S.setStart($,p.offset),S.setEnd($,p.offset+p.byteLength),d=new Highlight(S),CSS.highlights.set("raw-highlight",d)}}ce(()=>(h[n()]||I(),u(s()),o(),l(),()=>{}));var m=hn(),R=y(m),C=L(y(R),2);Ee(C,1,r,be,(p,N,$)=>{var S=In();let U;var te=y(S);te.textContent=$+1;var F=L(te,2),ne=y(F),P=y(ne,!0);B(ne),B(F),Nt(F,A=>Cn?.(A)),Ne(F,(A,T)=>E[T]=A,A=>E?.[A],()=>[$]),B(S),se(A=>{U=je(S,1,"table-row svelte-1c8e44s",null,U,{"current-record":n()===$}),ie(P,A)},[()=>v.decode(D(N))]),Oe("inview_change",F,A=>h[$]=A.detail.inView),_e("click",F,()=>f($)),O(p,S)}),B(R),B(m),Ne(m,p=>c=p,()=>c),O(t,m),x(),i()}Te(["click"]);var Pn=w('<!> <span class="redef-value"> </span> <!>',1);function vn(t,e){V(e,!1);const n=()=>k(qe,"$activeVariant",o),s=()=>k($e,"$model",o),[o,r]=Re();function a(c,I){const u=n()[c]??c,f=I.indexOf(u),l=I[(f-1+I.length)%I.length];Ve(c,l)}function i(c,I){const u=n()[c]??c,f=I.indexOf(u),l=I[(f+1)%I.length];Ve(c,l)}function v(c){return s()?Ke(s(),n()).some(u=>u.variantPath?.some(f=>f.group===c)):!1}St();var E=G(),h=b(E);{var d=c=>{var I=G(),u=b(I);Ee(u,1,()=>Object.entries(s().redefineGroups),be,(f,l)=>{var m=he(()=>vt(D(l),2));let R=()=>D(m)[0],C=()=>D(m)[1];var p=G(),N=b(p);{var $=U=>{Pe(U,{children:(te,F)=>{var ne=G(),P=b(ne);{var A=g=>{var M=Pn(),W=b(M);z(W,{onclick:()=>a(R(),C()),children:(j,et)=>{Ut(j,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Y=L(W,2),de=y(Y,!0);B(Y);var _=L(Y,2);z(_,{onclick:()=>i(R(),C()),children:(j,et)=>{Qt(j,{size:16,strokeWidth:3})},$$slots:{default:!0}}),se(()=>ie(de,n()[R()]??R())),O(g,M)},T=he(()=>v(R()));re(P,g=>{D(T)&&g(A)})}O(te,ne)},$$slots:{default:!0}})},S=he(()=>C().length>1&&v(R()));re(N,U=>{D(S)&&U($)})}O(f,p)}),O(c,I)};re(h,c=>{s()&&c(d)})}O(t,E),x(),r()}var Rn=w('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),En=w("<!> <!> <!> <!> <!>",1),gn=w('<div class="muted">Nenhum modelo ativo</div>'),An=w('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div class="form svelte-7p234s"><!></div> <!>',1);function mn(t,e){V(e,!0);const n=()=>k($e,"$model",i),s=()=>k(qe,"$activeVariant",i),o=()=>k(Q,"$currentRecordIndex",i),r=()=>k(fe,"$records",i),a=()=>k(Ye,"$buffer",i),[i,v]=Re();let E=le(Rt([])),h=le(1);ce(()=>(H(E,n()?Ke(n(),s()):[],!0),H(h,o()+1),()=>{}));function d(){if(!n())return null;const P=new Uint8Array(n().recordLength);return P.fill(32),P}function c(P){const A=d();A&&(fe.update(T=>{const g=T.slice();return g.splice(P+1,0,A),g}),Ae.update(T=>{const g=T.slice();return g.splice(P+1,0,{}),g}),Q.set(P+1))}function I(P){fe.update(A=>{const T=A.slice(),g=A[P];if(!g)return A;const M=new Uint8Array(g);return T.splice(P+1,0,M),T}),Ae.update(A=>{const T=A.slice();return T.splice(P+1,0,{...A[P]??{}}),T}),Q.set(P+1)}function u(P){if(r().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${P+1}?`))return;fe.update(g=>{const M=g.slice();return M.splice(P,1),M}),Ae.update(g=>{const M=g.slice();return M.splice(P,1),M});const T=P>=r().length-1?P-1:P;Q.set(Math.max(0,T))}function f(){Q.update(P=>Math.max(0,P-1))}function l(){Q.update(P=>Math.min(r().length-1,P+1))}function m(){const P=D(h)-1;if(P<0||P>=r().length){H(h,o()+1);return}Q.set(P)}var R=An(),C=L(b(R),2),p=y(C);Pe(p,{gap:".1rem",children:(P,A)=>{var T=Rn(),g=L(b(T),2);We(g);let M;var W=L(g,2),Y=y(W);B(W),se(()=>{ae(g,"max",r().length),ae(g,"maxlength",r().length),M=je(g,1,"svelte-7p234s",null,M,{invalid:D(h)<1||D(h)>r().length}),ie(Y,`/ ${r().length??""}`)}),_e("change",g,m),Le(g,()=>D(h),de=>H(h,de)),O(P,T)},$$slots:{default:!0}});var N=L(p,2);Pe(N,{children:(P,A)=>{var T=En(),g=b(T);z(g,{onclick:f,[ue()]:_=>(oe("Ir para linha anterior")||X)(_),children:(_,j)=>{wt(_,{size:16,strokeWidth:3})},$$slots:{default:!0}});var M=L(g,2);z(M,{onclick:()=>c(o()),[ue()]:_=>(oe("Adicionar linha")||X)(_),children:(_,j)=>{Ze(_,{size:16,strokeWidth:3})},$$slots:{default:!0}});var W=L(M,2);z(W,{onclick:l,[ue()]:_=>(oe("Ir para a próxima linha")||X)(_),children:(_,j)=>{kt(_,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Y=L(W,2);z(Y,{onclick:()=>I(o()),secondary:!0,[ue()]:_=>(oe("Duplicar linha atual")||X)(_),children:(_,j)=>{zt(_,{size:16,strokeWidth:3})},$$slots:{default:!0}});var de=L(Y,2);z(de,{onclick:()=>u(o()),danger:!0,[ue()]:_=>(oe("Deletar linha atual")||X)(_),children:(_,j)=>{Yt(_,{size:16,strokeWidth:3})},$$slots:{default:!0}}),O(P,T)},$$slots:{default:!0}});var $=L(N,2);vn($,{}),B(C);var S=L(C,2),U=y(S);{var te=P=>{var A=gn();O(P,A)},F=P=>{var A=G(),T=b(A);Ee(T,17,()=>D(E),g=>g.name+":"+g.offset,(g,M)=>{sn(g,{get field(){return D(M)}})}),O(P,A)};re(U,P=>{!n()||!a()?P(te):P(F,-1)})}B(S);var ne=L(S,2);pn(ne,{}),O(t,R),x(),v()}Te(["change"]);var Dn=w('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),On=w('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function $n(t){var e=On();Ot("1uha8ag",a=>{var i=Dn();Qe(()=>{Et.title="Home"}),O(a,i)});var n=b(e),s=y(n);Ft(s,{}),B(n);var o=L(n,2),r=y(o);mn(r,{}),B(o),O(t,e)}export{$n as component,bn as universal};
