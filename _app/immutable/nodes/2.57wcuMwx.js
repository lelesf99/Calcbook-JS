import{a as R,f as X,c as G,t as tt,s as K,d as Pe,b as Re,e as Ne}from"../chunks/B_MQ6pLL.js";import{K as nt,d as rt,aL as st,ap as at,h as Ae,aC as ot,aD as Me,g as ye,f as Ge,i as it,au as ct,j as We,b as Y,c as lt,a4 as ft,u as ue,aM as Xe,aN as ut,B as g,aO as se,a0 as dt,aP as It,p as x,w as N,n as b,t as Z,o as V,an as Ct,aQ as pt,q as $,v as _,F as Q,a6 as de,A as ht,x as F,a7 as me,aR as vt,V as Pt,aS as Rt}from"../chunks/BM9RnDFQ.js";import{a as ce,b as H,p as gt,s as ee,r as te}from"../chunks/fHv9BiRk.js";import{i as ie,b as Et}from"../chunks/BOrli5kJ.js";import{P as ve,l as be,e as ge,B as q,i as Te,n as At,j as mt,m as $e,r as _e,o as Dt,t as ae,p as Ot,a as oe,h as Le,u as Nt,q as xe,v as U,w as St,b as je,k as fe,I as ne,s as re,x as Ve,y as Ye,g as le,z as De}from"../chunks/WwgOAdLn.js";function bt(t,e){let r=null,s=Ae;var o;if(Ae){r=it;for(var n=ct(document.head);n!==null&&(n.nodeType!==ot||n.data!==t);)n=Me(n);if(n===null)ye(!1);else{var a=Me(n);n.remove(),Ge(a)}}Ae||(o=document.head.appendChild(nt()));try{rt(()=>e(o),st|at)}finally{s&&(ye(!0),Ge(r))}}function Tt(t,e,r){We(()=>{var s=Y(()=>e(t,r?.())||{});if(s?.destroy)return()=>s.destroy()})}function qe(t=!1){const e=lt,r=e.l.u;if(!r)return;let s=()=>se(e.s);if(t){let o=0,n={};const a=dt(()=>{let i=!1;const d=e.s;for(const I in d)d[I]!==n[I]&&(n[I]=d[I],i=!0);return i&&o++,o});s=()=>g(a)}r.b.length&&ft(()=>{Fe(e,s),Xe(r.b)}),ue(()=>{const o=Y(()=>r.m.map(ut));return()=>{for(const n of o)typeof n=="function"&&n()}}),r.a.length&&ue(()=>{Fe(e,s),Xe(r.a)})}function Fe(t,e){if(t.l.s)for(const r of t.l.s)g(r);e()}const $t=!0,xn=Object.freeze(Object.defineProperty({__proto__:null,prerender:$t},Symbol.toStringTag,{value:"Module"}));It();const _t=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,Lt=/OCCURS\s+(\d+)\s+TIMES/i,Bt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function Mt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function He(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function yt(t){const r=t.split(/\r?\n/).map(n=>n.length>6?n.slice(6):n).map(n=>n.replace(/\r$/,"")).filter(n=>n.trim().length>0).filter(n=>!n.trim().startsWith("*")),s=[];let o="";for(let n=0;n<r.length;n++){const a=r[n],i=a.trimEnd(),d=i.endsWith("-"),I=!i.endsWith(".");d||I?o+=i.replace(/-$/,""):(o+=a,s.push(o.trim()),o="")}return o.trim()&&s.push(o.trim()),s}function Gt(t){let e=t.toUpperCase().replace(".",""),r=!1;if(e.startsWith("S")&&(r=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),o=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:o,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=He(s[1]),d=He(s[2]);return{raw:t,type:"NUMERIC",length:i+d,decimals:d||void 0,signed:r}}const o=e.split("V"),n=(o[0].match(/9/g)||[]).length,a=o[1]?(o[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:n+a,decimals:a||void 0,signed:r}}}function Xt(t){const e=yt(t),r=[],s=[];let o=1;for(const n of e){const a=n.trim().split(/\s+/),i=parseInt(a[0],10),d=a[1];if(Number.isNaN(i)||!d)continue;let I=d.replace(/\.$/,"");const C={level:i,name:I,isFiller:I.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},f=n.match(Bt);f&&(C.redefines=f[1].replace(/\.$/,""));const u=n.match(_t);if(u){const h=Gt(u[2]);h&&(C.pic=h)}const c=n.match(Lt);c&&(C.occurs={times:parseInt(c[1],10)});let l;if(u){const h=n.slice(u.index+u[0].length);let v=h.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);v?l=v[1]:(v=h.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),v&&(l=v[1]))}else{let h=n.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);h||(h=n.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),h&&(l=h[1])}for(l&&(C.usage=Mt(l));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?r.push(C):s[s.length-1].children.push(C),s.push(C)}return(function n(a){for(const i of a)i.isFiller&&(i.name=`FILLER-${o++}`),n(i.children)})(r),r}function we(t){const e=(t.usage||"DISPLAY").toUpperCase(),r=t.pic;if(!r)return 0;if(e==="DISPLAY")return r.length;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=r.type==="NUMERIC"?r.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=r.type==="NUMERIC"?r.length:0;return Math.ceil((s+1)/2)}return r.length}function xt(t){const e=new Map;(function f(u){for(const c of u)e.set(c.name,c),f(c.children)})(t);const r={};(function f(u){for(const c of u){if(c.redefines){const l=c.redefines;r[l]||=new Set([l]),r[l].add(c.name)}f(c.children)}})(t);const s={};for(const[f,u]of Object.entries(r))s[f]=Array.from(u);const o={};for(const[f,u]of Object.entries(s))for(const c of u)o[c]=f;const n=f=>{if(f.children.length&&!f.pic&&!f.redefines){let l=0;for(const v of f.children)l+=n(v);const h=f.occurs?.times??1;return l*h}const u=f.pic?we(f):0,c=f.occurs?.times??1;return u*c},a={},i=[];let d=0;const I=[],C=(f,u)=>{let c=u;for(const l of f){let h=c;if(l.redefines){const O=l.redefines;O in a?h=a[O]:console.warn(`REDEFINES base not found yet: ${O}. Ensure base appears before redefiner.`)}l.name in a||(a[l.name]=h);const v=o[l.name];let E=!1;v&&(I.push({group:v,member:l.name}),E=!0);const A=n(l);if(l.children.length&&!l.pic){const O=l.occurs?.times??1,B=O?A/O:A;for(let L=0;L<O;L++)C(l.children,h+L*B)}else{const O=l.occurs?.times??1,B=l.pic?we(l):0;for(let L=0;L<O;L++)i.push({...l,offset:h+L*B,byteLength:B,variantPath:I.length?I.slice():void 0})}E&&I.pop(),l.redefines?d=Math.max(d,h+A):(c+=A,d=Math.max(d,c))}};return C(t,0),{root:t,fieldsFlat:i,recordLength:d,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const ke={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};var Vt=X('<span class="err"> </span>'),Ft=X('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function Ht(t,e){x(e,!0);const r=()=>H($e,"$model",s),[s,o]=ce();let n=de(""),a=de("");function i(v){Q(n,ke[v]+`
`);try{const E=xt(Xt(g(n)));At(E);const A=new Uint8Array(E.recordLength);A.fill(32),mt([A]),Q(a,"")}catch(E){Q(a,E?.message??"Erro ao processar copybook",!0)}}var d=Ft(),I=N(b(d),2);ve(I,{children:(v,E)=>{var A=G(),O=b(A);ge(O,17,()=>Object.keys(ke),Te,(B,L)=>{q(B,{onclick:()=>i(g(L)),children:(M,z)=>{Ct();var W=tt();Z(()=>K(W,g(L))),R(M,W)},$$slots:{default:!0}})}),R(v,A)},$$slots:{default:!0}});var C=N(I,2);pt(C);var f=N(C,2),u=$(f),c=$(u);_(u);var l=N(u,2);{var h=v=>{var E=Vt(),A=$(E,!0);_(E),Z(()=>K(A,g(a))),R(v,E)};ie(l,v=>{g(a)&&v(h)})}_(f),Z(()=>K(c,`len: ${(r()?r().recordLength:"—")??""}`)),be(C,()=>g(n),v=>Q(n,v)),R(t,d),V(),o()}function wt(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const r of t.variantPath)if((e[r.group]||r.group)!==r.member)return!1;return!0}function Ke(t,e){return t.fieldsFlat.filter(r=>wt(r,e))}const kt=new TextEncoder,Ut=new TextDecoder("ascii");function Qt(t,e){const r=t.slice(e.offset,e.offset+e.byteLength),s=Ut.decode(r);if(e.pic?.type==="NUMERIC"){if(e.pic.decimals){const o=e.pic.decimals;if(s.trim()==="")return"";const n=s.slice(0,s.length-o),a=s.slice(s.length-o);return`${n}.${a}`.replace(/\.$/,"")}return s.replace(/[\u0000 ]+$/g,"")}return s.replace(/[\u0000 ]+$/g,"")}function zt(t,e,r){let s="";const o=e.byteLength;if(e.pic?.type==="NUMERIC")if(e.pic.decimals){const n=e.pic.decimals,[a,i=""]=String(r).split("."),d=e.byteLength-n,I=(a??"").replace(/\D/g,"").padStart(d," ").slice(-d),C=(i??"").replace(/\D/g,"").padEnd(n," ").slice(0,n);s=I+C}else s=String(r).replace(/\D/g,"").padStart(o," ").slice(-o);else s=String(r);t.set(kt.encode(s.padEnd(o," ")),e.offset)}var Wt=X('<div class="field svelte-n1ol00"><input autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" class="svelte-n1ol00"/></div>');function jt(t,e){x(e,!0);const r=()=>H(Le,"$buffer",s),[s,o]=ce();let n=de(""),a=!0;const i=`${e.field.name} : ${e.field.pic?.raw} : [${e.field.offset}..${e.field.offset+e.field.byteLength-1}]`;ue(()=>{r()&&a&&Q(n,Qt(r(),e.field),!0),a=!0});function d(l){a=!1,Nt(h=>{zt(h,e.field,g(n))})}function I(){xe.set({recordIndex:ht(U),offset:e.field.offset,length:e.field.byteLength})}function C(){xe.set(null)}var f=Wt();let u;var c=$(f);_e(c),Dt(c,()=>ae(i)),_(f),Z(l=>{u=Ot(f,"",u,{"flex-basis":`calc(${e.field.byteLength}ch + 3.5rem)`}),oe(c,"placeholder",l),oe(c,"name",e.field.name),oe(c,"maxlength",e.field.byteLength),oe(c,"inputmode",e.field.pic?.type==="NUMERIC"?"decimal":"text")},[()=>e.field.pic?.type==="NUMERIC"?"9".repeat(e.field.byteLength):"X".repeat(e.field.byteLength)]),Re("input",c,d),Ne("focus",c,I),Ne("blur",c,C),be(c,()=>g(n),l=>Q(n,l)),R(t,f),V(),o()}Pe(["input"]);function Yt(t,e){let r=String(t??"").trim(),s=!1;if(r.startsWith("-")&&(s=!0,r=r.slice(1)),r=r.replace(/[^\d.]/g,""),e===0)r=r.replace(/\./g,"");else{const a=r.indexOf(".");a>=0&&(r=r.slice(0,a+1)+r.slice(a+1).replace(/\./g,""))}let o=r,n="";if(e>0&&r.includes(".")){const a=r.split(".");o=a[0]||"0",n=a[1]||""}return o=o.replace(/\D/g,"")||"0",e>0&&(n=n.replace(/\D/g,"").padEnd(e,"0").slice(0,e)),{neg:s,intPart:o,decPart:n}}function qt(t,e,r){let s=t.split("").map(n=>n.charCodeAt(0)-48);s.push(r&15),s.length%2===1&&s.unshift(0);const o=new Uint8Array(e);for(let n=e-1,a=s.length-1;n>=0;n--){const i=s[a--]??0,d=s[a--]??0;o[n]=(d&15)<<4|i&15}return o}function Kt(t,e,r=0){const{neg:s,intPart:o,decPart:n}=Yt(t,r),a=r>0?o+n:o||"0";return qt(a,e,s?13:12)}function Ue(t){return t.replace(/^0+(?=\d)/,"")||"0"}function Zt(t,e,r){if(!t)return"";if(e>0){const s=t.slice(0,Math.max(0,t.length-e))||"0",o=t.slice(-e).padStart(e,"0");return(r?"-":"")+Ue(s)+"."+o}return(r?"-":"")+Ue(t)}function Jt(t,e=0){if(!t||t.length===0)return"";let r="";for(let i=0;i<t.length-1;i++){const d=t[i];r+=String(d>>4&15)+String(d&15)}const s=t[t.length-1],o=s>>4&15,a=(s&15)===13;return r+=String(o),Zt(r,e,a)}const Ze="little";function en(t,e=!1,r=0,s=Ze){const o=new Uint8Array(8);s==="little"?o.set(t,0):o.set(t,8-t.length);const n=new DataView(o.buffer);let a;switch(t.length){case 1:a=BigInt(o[0]),e&&a>0x7fn&&(a=BigInt(o[0]<<24>>24));break;case 2:a=BigInt(e?n.getInt16(0,s==="little"):n.getUint16(0,s==="little"));break;case 4:a=BigInt(e?n.getInt32(0,s==="little"):n.getUint32(0,s==="little"));break;default:a=e?n.getBigInt64(0,s==="little"):n.getBigUint64(0,s==="little")}if(r>0){const i=a<0n,d=i?-a:a,I=10n**BigInt(r),C=d/I,f=(d%I).toString().padStart(r,"0");return(i?"-":"")+C.toString()+"."+f}return a.toString()}function tn(t,e,r=!1,s=0,o=Ze){let n=String(t).trim(),a=!1;n.startsWith("-")&&(a=!0,n=n.slice(1));let[i="0",d=""]=n.split(".");i=i.replace(/\D/g,"")||"0",d=d.replace(/\D/g,"").padEnd(s,"0").slice(0,s);let I=BigInt(i+d);a&&I!==0n&&(I=-I);let C,f;if(r){const l=BigInt(e*8);C=-(1n<<l-1n),f=(1n<<l-1n)-1n}else C=0n,f=(1n<<BigInt(e*8))-1n;I<C&&(I=C),I>f&&(I=f);const u=new Uint8Array(e),c=new DataView(u.buffer);return e===1?c.setUint8(0,Number(a?(256n+I)%256n:I)):e===2?r?c.setInt16(0,Number(I),o==="little"):c.setUint16(0,Number(I),o==="little"):e===4?r?c.setInt32(0,Number(I),o==="little"):c.setUint32(0,Number(I),o==="little"):r?c.setBigInt64(0,I,o==="little"):c.setBigUint64(0,I,o==="little"),u}var nn=X('<div class="field"><div class="label"><b> </b> <span class="meta"> </span></div> <input/></div>');function rn(t,e){x(e,!1);const r=()=>H(Le,"$buffer",s),[s,o]=ce();let n=gt(e,"field",8);function a(){if(!r())return"";const l=r().slice(n().offset,n().offset+n().byteLength);return n().usage==="COMP-3"?Jt(l,n().pic?.decimals??0):en(l,!!n().pic?.signed,n().pic?.decimals??0,"little")}qe();var i=nn(),d=$(i),I=$(d),C=$(I,!0);_(I);var f=N(I,2),u=$(f);_(f),_(d);var c=N(d,2);_e(c),_(i),Z(l=>{K(C,(se(n()),Y(()=>n().name))),K(u,`[${se(n()),Y(()=>n().offset)??""}..${se(n()),Y(()=>n().offset+n().byteLength-1)??""}]
      ${se(n()),Y(()=>n().pic?.raw)??""} • ${se(n()),Y(()=>n().usage)??""}`),St(c,l)},[()=>Y(a)]),Re("input",c,l=>{if(!r())return;let h;n().usage==="COMP-3"?h=Kt(l.currentTarget.value,n().byteLength,n().pic?.decimals??0):h=tn(l.currentTarget.value,n().byteLength,!!n().pic?.signed,n().pic?.decimals??0,"little"),r().set(h,n().offset)}),R(t,i),V(),o()}Pe(["input"]);function sn(t){return t()}function an(t){t.forEach(sn)}const Ce=[],Qe=[],he=[],ze=[],Je=Promise.resolve();let Se=!1;function on(){Se||(Se=!0,Je.then(fn))}function cn(){return on(),Je}function ln(t){he.push(t)}const Oe=new Set;let pe=0;function fn(){do{for(;pe<Ce.length;){const t=Ce[pe];pe++,un(t.$$)}for(Ce.length=0,pe=0;Qe.length;)Qe.pop()();for(let t=0;t<he.length;t+=1){const e=he[t];Oe.has(e)||(Oe.add(e),e())}he.length=0}while(Ce.length);for(;ze.length;)ze.pop()();Se=!1,Oe.clear()}function un(t){if(t.fragment!==null){t.update(),an(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ln)}}const dn={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},j=(t,e)=>new CustomEvent(t,{detail:e});function In(t,e={}){const{root:r,rootMargin:s,threshold:o,unobserveOnEnter:n}=Object.assign(Object.assign({},dn),e);let a={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const d=new IntersectionObserver((I,C)=>{I.forEach(f=>{a.y>f.boundingClientRect.y?i.vertical="up":i.vertical="down",a.x>f.boundingClientRect.x?i.horizontal="left":i.horizontal="right",a={y:f.boundingClientRect.y,x:f.boundingClientRect.x};const u={inView:f.isIntersecting,entry:f,scrollDirection:i,node:t,observer:C};t.dispatchEvent(j("inview_change",u)),t.dispatchEvent(j("change",u)),f.isIntersecting?(t.dispatchEvent(j("inview_enter",u)),t.dispatchEvent(j("enter",u)),n&&C.unobserve(t)):(t.dispatchEvent(j("inview_leave",u)),t.dispatchEvent(j("leave",u)))})},{root:r,rootMargin:s,threshold:o});return cn().then(()=>{t.dispatchEvent(j("inview_init",{observer:d,node:t})),t.dispatchEvent(j("init",{observer:d,node:t}))}),d.observe(t),{destroy(){d.unobserve(t)}}}}var Cn=X('<button type="button"><span class="row-index svelte-1c8e44s"></span> <pre> </pre></button>'),pn=X('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span># Registro</span></div> <!></div></div>');function hn(t,e){x(e,!0);const r=()=>H(U,"$currentRecordIndex",o),s=()=>H(fe,"$records",o),[o,n]=ce(),a=new TextDecoder("ascii"),i=[];let d=[];function I(){i[r()]?.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function C(l){U.set(l)}ue(()=>(d[r()]||I(),()=>{}));var f=pn(),u=$(f),c=N($(u),2);ge(c,1,s,Te,(l,h,v)=>{var E=Cn();let A;var O=$(E);O.textContent=v+1;var B=N(O,2),L=$(B,!0);_(B),_(E),Tt(E,M=>In?.(M)),Et(E,(M,z)=>i[z]=M,M=>i?.[M],()=>[v]),Z(M=>{A=je(E,1,"table-row svelte-1c8e44s",null,A,{"current-record":r()===v}),K(L,M)},[()=>a.decode(g(h))]),Ne("inview_change",E,M=>d[v]=M.detail.inView),Re("click",E,()=>C(v)),R(l,E)}),_(u),_(f),R(t,f),V(),n()}Pe(["click"]);function vn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];ne(t,ee({name:"chevrons-left"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=b(a);re(i,()=>e.children??F),R(o,a)},$$slots:{default:!0}})),V()}function Pn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];ne(t,ee({name:"chevrons-right"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=b(a);re(i,()=>e.children??F),R(o,a)},$$slots:{default:!0}})),V()}var Rn=X('<!> <span class="redef-value"> </span> <!>',1);function gn(t,e){x(e,!1);const r=()=>H(Ye,"$activeVariant",o),s=()=>H($e,"$model",o),[o,n]=ce();function a(u,c){const l=r()[u]??u,h=c.indexOf(l),v=c[(h-1+c.length)%c.length];Ve(u,v)}function i(u,c){const l=r()[u]??u,h=c.indexOf(l),v=c[(h+1)%c.length];Ve(u,v)}function d(u){return s()?Ke(s(),r()).some(l=>l.variantPath?.some(h=>h.group===u)):!1}qe();var I=G(),C=b(I);{var f=u=>{var c=G(),l=b(c);ge(l,1,()=>Object.entries(s().redefineGroups),Te,(h,v)=>{var E=me(()=>vt(g(v),2));let A=()=>g(E)[0],O=()=>g(E)[1];var B=G(),L=b(B);{var M=W=>{ve(W,{children:(Ee,Be)=>{var Ie=G(),p=b(Ie);{var T=P=>{var m=Rn(),w=b(m);q(w,{onclick:()=>a(A(),O()),children:(y,et)=>{vn(y,{size:16,strokeWidth:3})},$$slots:{default:!0}});var k=N(w,2),J=$(k,!0);_(k);var D=N(k,2);q(D,{onclick:()=>i(A(),O()),children:(y,et)=>{Pn(y,{size:16,strokeWidth:3})},$$slots:{default:!0}}),Z(()=>K(J,r()[A()]??A())),R(P,m)},S=me(()=>d(A()));ie(p,P=>{g(S)&&P(T)})}R(Ee,Ie)},$$slots:{default:!0}})},z=me(()=>O().length>1&&d(A()));ie(L,W=>{g(z)&&W(M)})}R(h,B)}),R(u,c)};ie(C,u=>{s()&&u(f)})}R(t,I),V(),n()}function En(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];ne(t,ee({name:"arrow-up-to-line"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=b(a);re(i,()=>e.children??F),R(o,a)},$$slots:{default:!0}})),V()}function An(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ne(t,ee({name:"plus"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=b(a);re(i,()=>e.children??F),R(o,a)},$$slots:{default:!0}})),V()}function mn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];ne(t,ee({name:"arrow-down-to-line"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=b(a);re(i,()=>e.children??F),R(o,a)},$$slots:{default:!0}})),V()}function Dn(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];ne(t,ee({name:"copy"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=b(a);re(i,()=>e.children??F),R(o,a)},$$slots:{default:!0}})),V()}function On(t,e){x(e,!0);let r=te(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ne(t,ee({name:"trash"},()=>r,{get iconNode(){return s},children:(o,n)=>{var a=G(),i=b(a);re(i,()=>e.children??F),R(o,a)},$$slots:{default:!0}})),V()}var Nn=X('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),Sn=X("<!> <!> <!> <!> <!>",1),bn=X('<div class="muted">Nenhum modelo ativo</div>'),Tn=X('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div class="form svelte-7p234s"><!></div> <!>',1);function $n(t,e){x(e,!0);const r=()=>H($e,"$model",i),s=()=>H(Le,"$buffer",i),o=()=>H(Ye,"$activeVariant",i),n=()=>H(U,"$currentRecordIndex",i),a=()=>H(fe,"$records",i),[i,d]=ce();let I=de(Pt([])),C=de(1);ue(()=>(Q(I,r()&&s()?Ke(r(),o()):[],!0),Q(C,n()+1),()=>{}));function f(){if(!r())return null;const p=new Uint8Array(r().recordLength);return p.fill(32),p}function u(p){const T=f();T&&(fe.update(S=>{const P=S.slice();return P.splice(p+1,0,T),P}),De.update(S=>{const P=S.slice();return P.splice(p+1,0,{}),P}),U.set(p+1))}function c(p){fe.update(T=>{const S=T.slice(),P=T[p];if(!P)return T;const m=new Uint8Array(P);return S.splice(p+1,0,m),S}),De.update(T=>{const S=T.slice();return S.splice(p+1,0,{...T[p]??{}}),S}),U.set(p+1)}function l(p){if(a().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${p+1}?`))return;fe.update(P=>{const m=P.slice();return m.splice(p,1),m}),De.update(P=>{const m=P.slice();return m.splice(p,1),m});const S=p>=a().length-1?p-1:p;U.set(Math.max(0,S))}function h(){U.update(p=>Math.max(0,p-1))}function v(){U.update(p=>Math.min(a().length-1,p+1))}function E(){const p=g(C)-1;if(p<0||p>=a().length){Q(C,n()+1);return}U.set(p)}var A=Tn(),O=N(b(A),2),B=$(O);ve(B,{gap:".1rem",children:(p,T)=>{var S=Nn(),P=N(b(S),2);_e(P);let m;var w=N(P,2),k=$(w);_(w),Z(()=>{oe(P,"max",a().length),oe(P,"maxlength",a().length),m=je(P,1,"svelte-7p234s",null,m,{invalid:g(C)<1||g(C)>a().length}),K(k,`/ ${a().length??""}`)}),Re("change",P,E),be(P,()=>g(C),J=>Q(C,J)),R(p,S)},$$slots:{default:!0}});var L=N(B,2);ve(L,{children:(p,T)=>{var S=Sn(),P=b(S);q(P,{onclick:h,[le()]:D=>(ae("Ir para linha anterior")||F)(D),children:(D,y)=>{En(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var m=N(P,2);q(m,{onclick:()=>u(n()),[le()]:D=>(ae("Adicionar linha")||F)(D),children:(D,y)=>{An(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var w=N(m,2);q(w,{onclick:v,[le()]:D=>(ae("Ir para a próxima linha")||F)(D),children:(D,y)=>{mn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var k=N(w,2);q(k,{onclick:()=>c(n()),secondary:!0,[le()]:D=>(ae("Duplicar linha atual")||F)(D),children:(D,y)=>{Dn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var J=N(k,2);q(J,{onclick:()=>l(n()),danger:!0,[le()]:D=>(ae("Deletar linha atual")||F)(D),children:(D,y)=>{On(D,{size:16,strokeWidth:3})},$$slots:{default:!0}}),R(p,S)},$$slots:{default:!0}});var M=N(L,2);gn(M,{}),_(O);var z=N(O,2),W=$(z);{var Ee=p=>{var T=bn();R(p,T)},Be=p=>{var T=G(),S=b(T);ge(S,17,()=>g(I),P=>P.name+":"+P.offset,(P,m)=>{var w=G(),k=b(w);{var J=y=>{rn(y,{get field(){return g(m)}})},D=y=>{jt(y,{get field(){return g(m)}})};ie(k,y=>{g(m).usage==="COMP-3"||g(m).usage==="COMP"||g(m).usage==="BINARY"||g(m).usage==="COMP-5"?y(J):y(D,-1)})}R(P,w)}),R(p,T)};ie(W,p=>{!r()||!s()?p(Ee):p(Be,-1)})}_(z);var Ie=N(z,2);hn(Ie,{}),R(t,A),V(),d()}Pe(["change"]);var _n=X('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),Ln=X('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function Vn(t){var e=Ln();bt("1uha8ag",a=>{var i=_n();We(()=>{Rt.title="Home"}),R(a,i)});var r=b(e),s=$(r);Ht(s,{}),_(r);var o=N(r,2),n=$(o);$n(n,{}),_(o),R(t,e)}export{Vn as component,xn as universal};
