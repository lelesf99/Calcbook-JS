import{a as E,f as X,c as G,t as nt,s as q,d as ge,b as Ee,e as be}from"../chunks/B_MQ6pLL.js";import{K as rt,d as st,aL as at,ap as ot,h as me,aC as it,aD as Me,g as ye,f as Ge,i as ct,au as lt,j as je,b as j,c as ut,a4 as ft,u as ce,aM as Xe,aN as dt,B as g,aO as se,a0 as It,aP as Ct,p as x,F as w,w as O,n as S,t as K,o as V,an as pt,aQ as ht,q as $,v as L,a6 as Ie,A as vt,x as F,a7 as De,aR as Pt,V as Rt,aS as gt}from"../chunks/BM9RnDFQ.js";import{a as le,b as H,p as Et,s as ee,r as te}from"../chunks/fHv9BiRk.js";import{i as ie,b as At}from"../chunks/BOrli5kJ.js";import{l as xe,P as Re,n as Te,e as Ae,B as Y,i as _e,j as mt,m as $e,r as Le,o as Dt,t as ae,p as Ot,a as oe,h as Be,u as Nt,q as Ve,v as z,w as bt,b as Ye,k as de,I as ne,s as re,x as Fe,y as qe,g as fe,z as Oe}from"../chunks/B2Aii8io.js";function St(t,e){let r=null,s=me;var o;if(me){r=ct;for(var n=lt(document.head);n!==null&&(n.nodeType!==it||n.data!==t);)n=Me(n);if(n===null)ye(!1);else{var a=Me(n);n.remove(),Ge(a)}}me||(o=document.head.appendChild(rt()));try{st(()=>e(o),at|ot)}finally{s&&(ye(!0),Ge(r))}}function Tt(t,e,r){je(()=>{var s=j(()=>e(t,r?.())||{});if(s?.destroy)return()=>s.destroy()})}function Ke(t=!1){const e=ut,r=e.l.u;if(!r)return;let s=()=>se(e.s);if(t){let o=0,n={};const a=It(()=>{let i=!1;const d=e.s;for(const I in d)d[I]!==n[I]&&(n[I]=d[I],i=!0);return i&&o++,o});s=()=>g(a)}r.b.length&&ft(()=>{He(e,s),Xe(r.b)}),ce(()=>{const o=j(()=>r.m.map(dt));return()=>{for(const n of o)typeof n=="function"&&n()}}),r.a.length&&ce(()=>{He(e,s),Xe(r.a)})}function He(t,e){if(t.l.s)for(const r of t.l.s)g(r);e()}const _t=!0,Vn=Object.freeze(Object.defineProperty({__proto__:null,prerender:_t},Symbol.toStringTag,{value:"Module"}));Ct();const $t=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,Lt=/OCCURS\s+(\d+)\s+TIMES/i,Bt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function Mt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function ke(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function yt(t){const r=t.split(/\r?\n/).map(n=>n.length>6?n.slice(6):n).map(n=>n.replace(/\r$/,"")).filter(n=>n.trim().length>0).filter(n=>!n.trim().startsWith("*")),s=[];let o="";for(let n=0;n<r.length;n++){const a=r[n],i=a.trimEnd(),d=i.endsWith("-"),I=!i.endsWith(".");d||I?o+=i.replace(/-$/,""):(o+=a,s.push(o.trim()),o="")}return o.trim()&&s.push(o.trim()),s}function Gt(t){let e=t.toUpperCase().replace(".",""),r=!1;if(e.startsWith("S")&&(r=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),o=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:o,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=ke(s[1]),d=ke(s[2]);return{raw:t,type:"NUMERIC",length:i+d,decimals:d||void 0,signed:r}}const o=e.split("V"),n=(o[0].match(/9/g)||[]).length,a=o[1]?(o[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:n+a,decimals:a||void 0,signed:r}}}function Xt(t){const e=yt(t),r=[],s=[];let o=1;for(const n of e){const a=n.trim().split(/\s+/),i=parseInt(a[0],10),d=a[1];if(Number.isNaN(i)||!d)continue;let I=d.replace(/\.$/,"");const C={level:i,name:I,isFiller:I.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},u=n.match(Bt);u&&(C.redefines=u[1].replace(/\.$/,""));const f=n.match($t);if(f){const h=Gt(f[2]);h&&(C.pic=h)}const l=n.match(Lt);l&&(C.occurs={times:parseInt(l[1],10)});let c;if(f){const h=n.slice(f.index+f[0].length);let A=h.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);A?c=A[1]:(A=h.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),A&&(c=A[1]))}else{let h=n.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);h||(h=n.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),h&&(c=h[1])}for(c&&(C.usage=Mt(c));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?r.push(C):s[s.length-1].children.push(C),s.push(C)}return(function n(a){for(const i of a)i.isFiller&&(i.name=`FILLER-${o++}`),n(i.children)})(r),r}function we(t){const e=(t.usage||"DISPLAY").toUpperCase(),r=t.pic;if(!r)return 0;if(e==="DISPLAY")return r.length;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=r.type==="NUMERIC"?r.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=r.type==="NUMERIC"?r.length:0;return Math.ceil((s+1)/2)}return r.length}function xt(t){const e=new Map;(function u(f){for(const l of f)e.set(l.name,l),u(l.children)})(t);const r={};(function u(f){for(const l of f){if(l.redefines){const c=l.redefines;r[c]||=new Set([c]),r[c].add(l.name)}u(l.children)}})(t);const s={};for(const[u,f]of Object.entries(r))s[u]=Array.from(f);const o={};for(const[u,f]of Object.entries(s))for(const l of f)o[l]=u;const n=u=>{if(u.children.length&&!u.pic&&!u.redefines){let c=0;for(const A of u.children)c+=n(A);const h=u.occurs?.times??1;return c*h}const f=u.pic?we(u):0,l=u.occurs?.times??1;return f*l},a={},i=[];let d=0;const I=[],C=(u,f)=>{let l=f;for(const c of u){let h=l;if(c.redefines){const P=c.redefines;P in a?h=a[P]:console.warn(`REDEFINES base not found yet: ${P}. Ensure base appears before redefiner.`)}c.name in a||(a[c.name]=h);const A=o[c.name];let _=!1;A&&(I.push({group:A,member:c.name}),_=!0);const R=n(c);if(c.children.length&&!c.pic){const P=c.occurs?.times??1,N=P?R/P:R;for(let B=0;B<P;B++)C(c.children,h+B*N)}else{const P=c.occurs?.times??1,N=c.pic?we(c):0;for(let B=0;B<P;B++)i.push({...c,offset:h+B*N,byteLength:N,variantPath:I.length?I.slice():void 0})}_&&I.pop(),c.redefines?d=Math.max(d,h+R):(l+=R,d=Math.max(d,l))}};return C(t,0),{root:t,fieldsFlat:i,recordLength:d,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const Ue={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};function Vt(t,e=250){let r;return(...s)=>{clearTimeout(r),r=setTimeout(()=>t(...s),e)}}var Ft=X('<span class="err"> </span>'),Ht=X('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function kt(t,e){x(e,!0);const r=()=>H($e,"$model",s),[s,o]=le();let n=Ie(""),a=Ie("");function i(R){try{const P=xt(Xt(R));xe(P);const N=new Uint8Array(P.recordLength);N.fill(32),mt([N]),w(a,"")}catch(P){w(a,P?.message??"Erro ao processar copybook",!0)}}const d=Vt(i,300);function I(R){w(n,Ue[R]+`
`),i(g(n))}ce(()=>{if(!g(n)?.trim()){xe(null),w(a,"");return}d(g(n))});var C=Ht(),u=O(S(C),2);Re(u,{children:(R,P)=>{var N=G(),B=S(N);Ae(B,17,()=>Object.keys(Ue),_e,(M,U)=>{Y(M,{onclick:()=>I(g(U)),children:(Z,Ce)=>{pt();var ue=nt();K(()=>q(ue,g(U))),E(Z,ue)},$$slots:{default:!0}})}),E(R,N)},$$slots:{default:!0}});var f=O(u,2);ht(f);var l=O(f,2),c=$(l),h=$(c);L(c);var A=O(c,2);{var _=R=>{var P=Ft(),N=$(P,!0);L(P),K(()=>q(N,g(a))),E(R,P)};ie(A,R=>{g(a)&&R(_)})}L(l),K(()=>q(h,`len: ${(r()?r().recordLength:"—")??""}`)),Te(f,()=>g(n),R=>w(n,R)),E(t,C),V(),o()}function wt(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const r of t.variantPath)if((e[r.group]||r.group)!==r.member)return!1;return!0}function Ze(t,e){return t.fieldsFlat.filter(r=>wt(r,e))}const Ut=new TextEncoder,Qt=new TextDecoder("ascii");function zt(t,e){const r=t.slice(e.offset,e.offset+e.byteLength),s=Qt.decode(r);if(e.pic?.type==="NUMERIC"){if(e.pic.decimals){const o=e.pic.decimals;if(s.trim()==="")return"";const n=s.slice(0,s.length-o),a=s.slice(s.length-o);return`${n}.${a}`.replace(/\.$/,"")}return s.replace(/[\u0000 ]+$/g,"")}return s.replace(/[\u0000 ]+$/g,"")}function Wt(t,e,r){let s="";const o=e.byteLength;if(e.pic?.type==="NUMERIC")if(e.pic.decimals){const n=e.pic.decimals,[a,i=""]=String(r).split("."),d=e.byteLength-n,I=(a??"").replace(/\D/g,"").padStart(d," ").slice(-d),C=(i??"").replace(/\D/g,"").padEnd(n," ").slice(0,n);s=I+C}else s=String(r).replace(/\D/g,"").padStart(o," ").slice(-o);else s=String(r);t.set(Ut.encode(s.padEnd(o," ")),e.offset)}var jt=X('<div class="field svelte-n1ol00"><input autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" class="svelte-n1ol00"/></div>');function Yt(t,e){x(e,!0);const r=()=>H(Be,"$buffer",s),[s,o]=le();let n=Ie(""),a=!0;const i=`${e.field.name} : ${e.field.pic?.raw} : [${e.field.offset}..${e.field.offset+e.field.byteLength-1}]`;ce(()=>{r()&&a&&w(n,zt(r(),e.field),!0),a=!0});function d(c){a=!1,Nt(h=>{Wt(h,e.field,g(n))})}function I(){Ve.set({recordIndex:vt(z),offset:e.field.offset,length:e.field.byteLength})}function C(){Ve.set(null)}var u=jt();let f;var l=$(u);Le(l),Dt(l,()=>ae(i)),L(u),K(c=>{f=Ot(u,"",f,{"flex-basis":`calc(${e.field.byteLength}ch + 3.5rem)`}),oe(l,"placeholder",c),oe(l,"name",e.field.name),oe(l,"maxlength",e.field.byteLength),oe(l,"inputmode",e.field.pic?.type==="NUMERIC"?"decimal":"text")},[()=>e.field.pic?.type==="NUMERIC"?"9".repeat(e.field.byteLength):"X".repeat(e.field.byteLength)]),Ee("input",l,d),be("focus",l,I),be("blur",l,C),Te(l,()=>g(n),c=>w(n,c)),E(t,u),V(),o()}ge(["input"]);function qt(t,e){let r=String(t??"").trim(),s=!1;if(r.startsWith("-")&&(s=!0,r=r.slice(1)),r=r.replace(/[^\d.]/g,""),e===0)r=r.replace(/\./g,"");else{const a=r.indexOf(".");a>=0&&(r=r.slice(0,a+1)+r.slice(a+1).replace(/\./g,""))}let o=r,n="";if(e>0&&r.includes(".")){const a=r.split(".");o=a[0]||"0",n=a[1]||""}return o=o.replace(/\D/g,"")||"0",e>0&&(n=n.replace(/\D/g,"").padEnd(e,"0").slice(0,e)),{neg:s,intPart:o,decPart:n}}function Kt(t,e,r){let s=t.split("").map(n=>n.charCodeAt(0)-48);s.push(r&15),s.length%2===1&&s.unshift(0);const o=new Uint8Array(e);for(let n=e-1,a=s.length-1;n>=0;n--){const i=s[a--]??0,d=s[a--]??0;o[n]=(d&15)<<4|i&15}return o}function Zt(t,e,r=0){const{neg:s,intPart:o,decPart:n}=qt(t,r),a=r>0?o+n:o||"0";return Kt(a,e,s?13:12)}function Qe(t){return t.replace(/^0+(?=\d)/,"")||"0"}function Jt(t,e,r){if(!t)return"";if(e>0){const s=t.slice(0,Math.max(0,t.length-e))||"0",o=t.slice(-e).padStart(e,"0");return(r?"-":"")+Qe(s)+"."+o}return(r?"-":"")+Qe(t)}function en(t,e=0){if(!t||t.length===0)return"";let r="";for(let i=0;i<t.length-1;i++){const d=t[i];r+=String(d>>4&15)+String(d&15)}const s=t[t.length-1],o=s>>4&15,a=(s&15)===13;return r+=String(o),Jt(r,e,a)}const Je="little";function tn(t,e=!1,r=0,s=Je){const o=new Uint8Array(8);s==="little"?o.set(t,0):o.set(t,8-t.length);const n=new DataView(o.buffer);let a;switch(t.length){case 1:a=BigInt(o[0]),e&&a>0x7fn&&(a=BigInt(o[0]<<24>>24));break;case 2:a=BigInt(e?n.getInt16(0,s==="little"):n.getUint16(0,s==="little"));break;case 4:a=BigInt(e?n.getInt32(0,s==="little"):n.getUint32(0,s==="little"));break;default:a=e?n.getBigInt64(0,s==="little"):n.getBigUint64(0,s==="little")}if(r>0){const i=a<0n,d=i?-a:a,I=10n**BigInt(r),C=d/I,u=(d%I).toString().padStart(r,"0");return(i?"-":"")+C.toString()+"."+u}return a.toString()}function nn(t,e,r=!1,s=0,o=Je){let n=String(t).trim(),a=!1;n.startsWith("-")&&(a=!0,n=n.slice(1));let[i="0",d=""]=n.split(".");i=i.replace(/\D/g,"")||"0",d=d.replace(/\D/g,"").padEnd(s,"0").slice(0,s);let I=BigInt(i+d);a&&I!==0n&&(I=-I);let C,u;if(r){const c=BigInt(e*8);C=-(1n<<c-1n),u=(1n<<c-1n)-1n}else C=0n,u=(1n<<BigInt(e*8))-1n;I<C&&(I=C),I>u&&(I=u);const f=new Uint8Array(e),l=new DataView(f.buffer);return e===1?l.setUint8(0,Number(a?(256n+I)%256n:I)):e===2?r?l.setInt16(0,Number(I),o==="little"):l.setUint16(0,Number(I),o==="little"):e===4?r?l.setInt32(0,Number(I),o==="little"):l.setUint32(0,Number(I),o==="little"):r?l.setBigInt64(0,I,o==="little"):l.setBigUint64(0,I,o==="little"),f}var rn=X('<div class="field"><div class="label"><b> </b> <span class="meta"> </span></div> <input/></div>');function sn(t,e){x(e,!1);const r=()=>H(Be,"$buffer",s),[s,o]=le();let n=Et(e,"field",8);function a(){if(!r())return"";const c=r().slice(n().offset,n().offset+n().byteLength);return n().usage==="COMP-3"?en(c,n().pic?.decimals??0):tn(c,!!n().pic?.signed,n().pic?.decimals??0,"little")}Ke();var i=rn(),d=$(i),I=$(d),C=$(I,!0);L(I);var u=O(I,2),f=$(u);L(u),L(d);var l=O(d,2);Le(l),L(i),K(c=>{q(C,(se(n()),j(()=>n().name))),q(f,`[${se(n()),j(()=>n().offset)??""}..${se(n()),j(()=>n().offset+n().byteLength-1)??""}]
      ${se(n()),j(()=>n().pic?.raw)??""} • ${se(n()),j(()=>n().usage)??""}`),bt(l,c)},[()=>j(a)]),Ee("input",l,c=>{if(!r())return;let h;n().usage==="COMP-3"?h=Zt(c.currentTarget.value,n().byteLength,n().pic?.decimals??0):h=nn(c.currentTarget.value,n().byteLength,!!n().pic?.signed,n().pic?.decimals??0,"little"),r().set(h,n().offset)}),E(t,i),V(),o()}ge(["input"]);function an(t){return t()}function on(t){t.forEach(an)}const he=[],ze=[],Pe=[],We=[],et=Promise.resolve();let Se=!1;function cn(){Se||(Se=!0,et.then(fn))}function ln(){return cn(),et}function un(t){Pe.push(t)}const Ne=new Set;let ve=0;function fn(){do{for(;ve<he.length;){const t=he[ve];ve++,dn(t.$$)}for(he.length=0,ve=0;ze.length;)ze.pop()();for(let t=0;t<Pe.length;t+=1){const e=Pe[t];Ne.has(e)||(Ne.add(e),e())}Pe.length=0}while(he.length);for(;We.length;)We.pop()();Se=!1,Ne.clear()}function dn(t){if(t.fragment!==null){t.update(),on(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(un)}}const In={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},W=(t,e)=>new CustomEvent(t,{detail:e});function Cn(t,e={}){const{root:r,rootMargin:s,threshold:o,unobserveOnEnter:n}=Object.assign(Object.assign({},In),e);let a={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const d=new IntersectionObserver((I,C)=>{I.forEach(u=>{a.y>u.boundingClientRect.y?i.vertical="up":i.vertical="down",a.x>u.boundingClientRect.x?i.horizontal="left":i.horizontal="right",a={y:u.boundingClientRect.y,x:u.boundingClientRect.x};const f={inView:u.isIntersecting,entry:u,scrollDirection:i,node:t,observer:C};t.dispatchEvent(W("inview_change",f)),t.dispatchEvent(W("change",f)),u.isIntersecting?(t.dispatchEvent(W("inview_enter",f)),t.dispatchEvent(W("enter",f)),n&&C.unobserve(t)):(t.dispatchEvent(W("inview_leave",f)),t.dispatchEvent(W("leave",f)))})},{root:r,rootMargin:s,threshold:o});return ln().then(()=>{t.dispatchEvent(W("inview_init",{observer:d,node:t})),t.dispatchEvent(W("init",{observer:d,node:t}))}),d.observe(t),{destroy(){d.unobserve(t)}}}}var pn=X('<button type="button"><span class="row-index svelte-1c8e44s"></span> <pre> </pre></button>'),hn=X('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span># Registro</span></div> <!></div></div>');function vn(t,e){x(e,!0);const r=()=>H(z,"$currentRecordIndex",o),s=()=>H(de,"$records",o),[o,n]=le(),a=new TextDecoder("ascii"),i=[];let d=[];function I(){i[r()]?.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function C(c){z.set(c)}ce(()=>(d[r()]||I(),()=>{}));var u=hn(),f=$(u),l=O($(f),2);Ae(l,1,s,_e,(c,h,A)=>{var _=pn();let R;var P=$(_);P.textContent=A+1;var N=O(P,2),B=$(N,!0);L(N),L(_),Tt(_,M=>Cn?.(M)),At(_,(M,U)=>i[U]=M,M=>i?.[M],()=>[A]),K(M=>{R=Ye(_,1,"table-row svelte-1c8e44s",null,R,{"current-record":r()===A}),q(B,M)},[()=>a.decode(g(h))]),be("inview_change",_,M=>d[A]=M.detail.inView),Ee("click",_,()=>C(A)),E(c,_)}),L(f),L(u),E(t,u),V(),n()}ge(["click"]);function Pn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];ne(t,ee({name:"chevrons-left"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=S(a);re(i,()=>e.children??F),E(o,a)},$$slots:{default:!0}})),V()}function Rn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];ne(t,ee({name:"chevrons-right"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=S(a);re(i,()=>e.children??F),E(o,a)},$$slots:{default:!0}})),V()}var gn=X('<!> <span class="redef-value"> </span> <!>',1);function En(t,e){x(e,!1);const r=()=>H(qe,"$activeVariant",o),s=()=>H($e,"$model",o),[o,n]=le();function a(f,l){const c=r()[f]??f,h=l.indexOf(c),A=l[(h-1+l.length)%l.length];Fe(f,A)}function i(f,l){const c=r()[f]??f,h=l.indexOf(c),A=l[(h+1)%l.length];Fe(f,A)}function d(f){return s()?Ze(s(),r()).some(c=>c.variantPath?.some(h=>h.group===f)):!1}Ke();var I=G(),C=S(I);{var u=f=>{var l=G(),c=S(l);Ae(c,1,()=>Object.entries(s().redefineGroups),_e,(h,A)=>{var _=De(()=>Pt(g(A),2));let R=()=>g(_)[0],P=()=>g(_)[1];var N=G(),B=S(N);{var M=Z=>{Re(Z,{children:(Ce,ue)=>{var pe=G(),p=S(pe);{var T=v=>{var m=gn(),k=S(m);Y(k,{onclick:()=>a(R(),P()),children:(y,tt)=>{Pn(y,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Q=O(k,2),J=$(Q,!0);L(Q);var D=O(Q,2);Y(D,{onclick:()=>i(R(),P()),children:(y,tt)=>{Rn(y,{size:16,strokeWidth:3})},$$slots:{default:!0}}),K(()=>q(J,r()[R()]??R())),E(v,m)},b=De(()=>d(R()));ie(p,v=>{g(b)&&v(T)})}E(Ce,pe)},$$slots:{default:!0}})},U=De(()=>P().length>1&&d(R()));ie(B,Z=>{g(U)&&Z(M)})}E(h,N)}),E(f,l)};ie(C,f=>{s()&&f(u)})}E(t,I),V(),n()}function An(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];ne(t,ee({name:"arrow-up-to-line"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=S(a);re(i,()=>e.children??F),E(o,a)},$$slots:{default:!0}})),V()}function mn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ne(t,ee({name:"plus"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=S(a);re(i,()=>e.children??F),E(o,a)},$$slots:{default:!0}})),V()}function Dn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];ne(t,ee({name:"arrow-down-to-line"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=S(a);re(i,()=>e.children??F),E(o,a)},$$slots:{default:!0}})),V()}function On(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];ne(t,ee({name:"copy"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=S(a);re(i,()=>e.children??F),E(o,a)},$$slots:{default:!0}})),V()}function Nn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ne(t,ee({name:"trash"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=S(a);re(i,()=>e.children??F),E(o,a)},$$slots:{default:!0}})),V()}var bn=X('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),Sn=X("<!> <!> <!> <!> <!>",1),Tn=X('<div class="muted">Nenhum modelo ativo</div>'),_n=X('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div class="form svelte-7p234s"><!></div> <!>',1);function $n(t,e){x(e,!0);const r=()=>H($e,"$model",i),s=()=>H(Be,"$buffer",i),o=()=>H(qe,"$activeVariant",i),n=()=>H(z,"$currentRecordIndex",i),a=()=>H(de,"$records",i),[i,d]=le();let I=Ie(Rt([])),C=Ie(1);ce(()=>(w(I,r()&&s()?Ze(r(),o()):[],!0),w(C,n()+1),()=>{}));function u(){if(!r())return null;const p=new Uint8Array(r().recordLength);return p.fill(32),p}function f(p){const T=u();T&&(de.update(b=>{const v=b.slice();return v.splice(p+1,0,T),v}),Oe.update(b=>{const v=b.slice();return v.splice(p+1,0,{}),v}),z.set(p+1))}function l(p){de.update(T=>{const b=T.slice(),v=T[p];if(!v)return T;const m=new Uint8Array(v);return b.splice(p+1,0,m),b}),Oe.update(T=>{const b=T.slice();return b.splice(p+1,0,{...T[p]??{}}),b}),z.set(p+1)}function c(p){if(a().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${p+1}?`))return;de.update(v=>{const m=v.slice();return m.splice(p,1),m}),Oe.update(v=>{const m=v.slice();return m.splice(p,1),m});const b=p>=a().length-1?p-1:p;z.set(Math.max(0,b))}function h(){z.update(p=>Math.max(0,p-1))}function A(){z.update(p=>Math.min(a().length-1,p+1))}function _(){const p=g(C)-1;if(p<0||p>=a().length){w(C,n()+1);return}z.set(p)}var R=_n(),P=O(S(R),2),N=$(P);Re(N,{gap:".1rem",children:(p,T)=>{var b=bn(),v=O(S(b),2);Le(v);let m;var k=O(v,2),Q=$(k);L(k),K(()=>{oe(v,"max",a().length),oe(v,"maxlength",a().length),m=Ye(v,1,"svelte-7p234s",null,m,{invalid:g(C)<1||g(C)>a().length}),q(Q,`/ ${a().length??""}`)}),Ee("change",v,_),Te(v,()=>g(C),J=>w(C,J)),E(p,b)},$$slots:{default:!0}});var B=O(N,2);Re(B,{children:(p,T)=>{var b=Sn(),v=S(b);Y(v,{onclick:h,[fe()]:D=>(ae("Ir para linha anterior")||F)(D),children:(D,y)=>{An(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var m=O(v,2);Y(m,{onclick:()=>f(n()),[fe()]:D=>(ae("Adicionar linha")||F)(D),children:(D,y)=>{mn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var k=O(m,2);Y(k,{onclick:A,[fe()]:D=>(ae("Ir para a próxima linha")||F)(D),children:(D,y)=>{Dn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Q=O(k,2);Y(Q,{onclick:()=>l(n()),secondary:!0,[fe()]:D=>(ae("Duplicar linha atual")||F)(D),children:(D,y)=>{On(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var J=O(Q,2);Y(J,{onclick:()=>c(n()),danger:!0,[fe()]:D=>(ae("Deletar linha atual")||F)(D),children:(D,y)=>{Nn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}}),E(p,b)},$$slots:{default:!0}});var M=O(B,2);En(M,{}),L(P);var U=O(P,2),Z=$(U);{var Ce=p=>{var T=Tn();E(p,T)},ue=p=>{var T=G(),b=S(T);Ae(b,17,()=>g(I),v=>v.name+":"+v.offset,(v,m)=>{var k=G(),Q=S(k);{var J=y=>{sn(y,{get field(){return g(m)}})},D=y=>{Yt(y,{get field(){return g(m)}})};ie(Q,y=>{g(m).usage==="COMP-3"||g(m).usage==="COMP"||g(m).usage==="BINARY"||g(m).usage==="COMP-5"?y(J):y(D,-1)})}E(v,k)}),E(p,T)};ie(Z,p=>{!r()||!s()?p(Ce):p(ue,-1)})}L(U);var pe=O(U,2);vn(pe,{}),E(t,R),V(),d()}ge(["change"]);var Ln=X('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),Bn=X('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function Fn(t){var e=Bn();St("1uha8ag",a=>{var i=Ln();je(()=>{gt.title="Home"}),E(a,i)});var r=S(e),s=$(r);kt(s,{}),L(r);var o=O(r,2),n=$(o);$n(n,{}),L(o),E(t,e)}export{Fn as component,Vn as universal};
