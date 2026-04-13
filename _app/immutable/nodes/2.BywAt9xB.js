import{a as A,f as V,c as X,t as st,s as ce,d as Ee,b as ge,e as he}from"../chunks/Bz9pcTi_.js";import{K as rt,d as ot,aL as at,ap as it,h as Oe,aC as ct,aD as ye,g as Me,f as Be,i as lt,au as dt,j as Ue,b as ze,c as ft,a4 as ut,u as se,aM as Ct,aN as Ge,C as g,aO as It,a0 as ht,aP as vt,p as F,A as x,w as T,n as _,t as Z,o as H,an as pt,aQ as Rt,q as L,v as $,a6 as de,B as Pt,x as k,a7 as Ne,aR as Et,V as gt,aS as At}from"../chunks/R3T74W7k.js";import{a as ue,b as G,s as re,r as oe}from"../chunks/vGbNO2P5.js";import{i as le,b as mt}from"../chunks/D0UFlnsV.js";import{l as Xe,P as Pe,n as Ae,e as me,B as K,i as be,j as Dt,m as Le,r as $e,o as We,t as ne,p as je,a as W,q as fe,h as De,u as Ye,v as j,b as qe,k as Ie,I as ae,s as ie,w as xe,x as Ke,g as Ce,y as Se}from"../chunks/Bk3xm2qE.js";function Ot(t,e){let n=null,r=Oe;var a;if(Oe){n=lt;for(var s=dt(document.head);s!==null&&(s.nodeType!==ct||s.data!==t);)s=ye(s);if(s===null)Me(!1);else{var o=ye(s);s.remove(),Be(o)}}Oe||(a=document.head.appendChild(rt()));try{ot(()=>e(a),at|it)}finally{r&&(Me(!0),Be(n))}}function Nt(t,e,n){Ue(()=>{var r=ze(()=>e(t,n?.())||{});if(r?.destroy)return()=>r.destroy()})}function St(t=!1){const e=ft,n=e.l.u;if(!n)return;let r=()=>It(e.s);if(t){let a=0,s={};const o=ht(()=>{let c=!1;const I=e.s;for(const C in I)I[C]!==s[C]&&(s[C]=I[C],c=!0);return c&&a++,a});r=()=>g(o)}n.b.length&&ut(()=>{Ve(e,r),Ge(n.b)}),se(()=>{const a=ze(()=>n.m.map(Ct));return()=>{for(const s of a)typeof s=="function"&&s()}}),n.a.length&&se(()=>{Ve(e,r),Ge(n.a)})}function Ve(t,e){if(t.l.s)for(const n of t.l.s)g(n);e()}const Tt=!0,Tn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Tt},Symbol.toStringTag,{value:"Module"}));vt();const _t=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,bt=/OCCURS\s+(\d+)\s+TIMES/i,Lt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function $t(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function Fe(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function yt(t){const n=t.split(/\r?\n/).map(s=>s.length>6?s.slice(6):s).map(s=>s.replace(/\r$/,"")).filter(s=>s.trim().length>0).filter(s=>!s.trim().startsWith("*")),r=[];let a="";for(let s=0;s<n.length;s++){const o=n[s],c=o.trimEnd(),I=c.endsWith("-"),C=!c.endsWith(".");I||C?a+=c.replace(/-$/,""):(a+=o,r.push(a.trim()),a="")}return a.trim()&&r.push(a.trim()),r}function Mt(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const r=e.match(/X\((\d+)\)/),a=r?parseInt(r[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:a,signed:!1}}if(e.startsWith("9")){const r=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(r){const c=Fe(r[1]),I=Fe(r[2]);return{raw:t,type:"NUMERIC",length:c+I,decimals:I||void 0,signed:n}}const a=e.split("V"),s=(a[0].match(/9/g)||[]).length,o=a[1]?(a[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:s+o,decimals:o||void 0,signed:n}}}function Bt(t){const e=yt(t),n=[],r=[];let a=1;for(const s of e){const o=s.trim().split(/\s+/),c=parseInt(o[0],10),I=o[1];if(Number.isNaN(c)||!I)continue;let C=I.replace(/\.$/,"");const v={level:c,name:C,isFiller:C.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},i=s.match(Lt);i&&(v.redefines=i[1].replace(/\.$/,""));const l=s.match(_t);if(l){const p=Mt(l[2]);p&&(v.pic=p)}const f=s.match(bt);f&&(v.occurs={times:parseInt(f[1],10)});let d;if(l){const p=s.slice(l.index+l[0].length);let m=p.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);m?d=m[1]:(m=p.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),m&&(d=m[1]))}else{let p=s.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);p||(p=s.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),p&&(d=p[1])}for(d&&(v.usage=$t(d));r.length&&r[r.length-1].level>=c;)r.pop();r.length===0?n.push(v):r[r.length-1].children.push(v),r.push(v)}return(function s(o){for(const c of o)c.isFiller&&(c.name=`FILLER-${a++}`),s(c.children)})(n),n}function He(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const r=n.type==="NUMERIC"?n.length:0;return r<=4?2:r<=9?4:8}if(e==="COMP-3"){const r=n.type==="NUMERIC"?n.length:0;return Math.ceil((r+1)/2)}return n.length}function Gt(t){const e=new Map;(function i(l){for(const f of l)e.set(f.name,f),i(f.children)})(t);const n={};(function i(l){for(const f of l){if(f.redefines){const d=f.redefines;n[d]||=new Set([d]),n[d].add(f.name)}i(f.children)}})(t);const r={};for(const[i,l]of Object.entries(n))r[i]=Array.from(l);const a={};for(const[i,l]of Object.entries(r))for(const f of l)a[f]=i;const s=i=>{if(i.children.length&&!i.pic&&!i.redefines){let d=0;for(const m of i.children)d+=s(m);const p=i.occurs?.times??1;return d*p}const l=i.pic?He(i):0,f=i.occurs?.times??1;return l*f},o={},c=[];let I=0;const C=[],v=(i,l)=>{let f=l;for(const d of i){let p=f;if(d.redefines){const R=d.redefines;R in o?p=o[R]:console.warn(`REDEFINES base not found yet: ${R}. Ensure base appears before redefiner.`)}d.name in o||(o[d.name]=p);const m=a[d.name];let w=!1;m&&(C.push({group:m,member:d.name}),w=!0);const h=s(d);if(d.children.length&&!d.pic){const R=d.occurs?.times??1,E=R?h/R:h;for(let D=0;D<R;D++)v(d.children,p+D*E)}else{const R=d.occurs?.times??1,E=d.pic?He(d):0;for(let D=0;D<R;D++)c.push({...d,offset:p+D*E,byteLength:E,variantPath:C.length?C.slice():void 0})}w&&C.pop(),d.redefines?I=Math.max(I,p+h):(f+=h,I=Math.max(I,f))}};return v(t,0),{root:t,fieldsFlat:c,recordLength:I,redefineGroups:r,nameIndex:Object.fromEntries(e)}}const ke={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};function Xt(t,e=250){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>t(...r),e)}}var xt=V('<span class="err"> </span>'),Vt=V('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function Ft(t,e){F(e,!0);const n=()=>G(Le,"$model",r),[r,a]=ue();let s=de(""),o=de("");function c(h){try{const R=Gt(Bt(h));Xe(R);const E=new Uint8Array(R.recordLength);E.fill(32),Dt([E]),x(o,"")}catch(R){x(o,R?.message??"Erro ao processar copybook",!0)}}const I=Xt(c,300);function C(h){x(s,ke[h]+`
`),c(g(s))}se(()=>{if(!g(s)?.trim()){Xe(null),x(o,"");return}I(g(s))});var v=Vt(),i=T(_(v),2);Pe(i,{children:(h,R)=>{var E=X(),D=_(E);me(D,17,()=>Object.keys(ke),be,(Y,Q)=>{K(Y,{onclick:()=>C(g(Q)),children:(M,J)=>{pt();var ee=st();Z(()=>ce(ee,g(Q))),A(M,ee)},$$slots:{default:!0}})}),A(h,E)},$$slots:{default:!0}});var l=T(i,2);Rt(l);var f=T(l,2),d=L(f),p=L(d);$(d);var m=T(d,2);{var w=h=>{var R=xt(),E=L(R,!0);$(R),Z(()=>ce(E,g(o))),A(h,R)};le(m,h=>{g(o)&&h(w)})}$(f),Z(()=>ce(p,`len: ${(n()?n().recordLength:"—")??""}`)),Ae(l,()=>g(s),h=>x(s,h)),A(t,v),H(),a()}function Ht(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function Ze(t,e){return t.fieldsFlat.filter(n=>Ht(n,e))}const kt=new TextEncoder,wt=new TextDecoder("ascii");function Je(t,e){const n=t.slice(e.offset,e.offset+e.byteLength),r=wt.decode(n);if(e.pic?.type==="NUMERIC"){if(e.pic.decimals){const a=e.pic.decimals;if(r.trim()==="")return"";const s=r.slice(0,r.length-a),o=r.slice(r.length-a);return`${s}.${o}`.replace(/\.$/,"")}return r.replace(/[\u0000 ]+$/g,"")}return r.replace(/[\u0000 ]+$/g,"")}function et(t,e,n){let r="";const a=e.byteLength;if(e.pic?.type==="NUMERIC")if(e.pic.decimals){const s=e.pic.decimals,[o,c=""]=String(n).split("."),I=e.byteLength-s,C=(o??"").replace(/\D/g,"").padStart(I," ").slice(-I),v=(c??"").replace(/\D/g,"").padEnd(s," ").slice(0,s);r=C+v}else r=String(n).replace(/\D/g,"").padStart(a," ").slice(-a);else r=String(n);t.set(kt.encode(r.padEnd(a," ")),e.offset)}var Qt=V('<div class="field svelte-n1ol00"><input autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" class="svelte-n1ol00"/></div>');function Ut(t,e){F(e,!0);const n=()=>G(De,"$buffer",r),[r,a]=ue();let s=de(""),o=!0;const c=`${e.field.name} : ${e.field.pic?.raw} : [${e.field.offset}..${e.field.offset+e.field.byteLength-1}]`;se(()=>{n()&&o&&x(s,Je(n(),e.field),!0),o=!0});function I(l){o=!1,Ye(f=>{et(f,e.field,g(s))})}var C=Qt();let v;var i=L(C);$e(i),We(i,()=>ne(c,"focus")),$(C),Z(l=>{v=je(C,"",v,{"flex-basis":`calc(${e.field.byteLength}ch + 3.5rem)`}),W(i,"placeholder",l),W(i,"name",e.field.name),W(i,"maxlength",e.field.byteLength),W(i,"inputmode",e.field.pic?.type==="NUMERIC"?"decimal":"text")},[()=>e.field.pic?.type==="NUMERIC"?"9".repeat(e.field.byteLength):"X".repeat(e.field.byteLength)]),ge("input",i,I),he("focus",i,()=>fe.set(e.field)),he("blur",i,()=>fe.set(null)),Ae(i,()=>g(s),l=>x(s,l)),A(t,C),H(),a()}Ee(["input"]);var zt=V('<div class="field svelte-7xmafx"><input autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" class="svelte-7xmafx"/></div>');function Wt(t,e){F(e,!0);const n=()=>G(De,"$buffer",r),[r,a]=ue();let s=de(""),o=!0;const c=`${e.field.name} : ${e.field.pic?.raw} : [${e.field.offset}..${e.field.offset+e.field.byteLength-1}]`;se(()=>{n()&&o&&x(s,Je(n(),e.field),!0),o=!0});function I(l){o=!1,Ye(f=>{et(f,e.field,g(s))})}var C=zt();let v;var i=L(C);$e(i),We(i,()=>ne(c,"focus")),$(C),Z(l=>{v=je(C,"",v,{"flex-basis":`calc(${e.field.byteLength}ch + 3.5rem)`}),W(i,"placeholder",l),W(i,"name",e.field.name),W(i,"maxlength",e.field.byteLength),W(i,"inputmode",e.field.pic?.type==="NUMERIC"?"decimal":"text")},[()=>e.field.pic?.type==="NUMERIC"?"9".repeat(e.field.byteLength):"X".repeat(e.field.byteLength)]),ge("input",i,I),he("focus",i,()=>fe.set(e.field)),he("blur",i,()=>fe.set(null)),Ae(i,()=>g(s),l=>x(s,l)),A(t,C),H(),a()}Ee(["input"]);function jt(t){return t()}function Yt(t){t.forEach(jt)}const ve=[],we=[],Re=[],Qe=[],tt=Promise.resolve();let _e=!1;function qt(){_e||(_e=!0,tt.then(Jt))}function Kt(){return qt(),tt}function Zt(t){Re.push(t)}const Te=new Set;let pe=0;function Jt(){do{for(;pe<ve.length;){const t=ve[pe];pe++,en(t.$$)}for(ve.length=0,pe=0;we.length;)we.pop()();for(let t=0;t<Re.length;t+=1){const e=Re[t];Te.has(e)||(Te.add(e),e())}Re.length=0}while(ve.length);for(;Qe.length;)Qe.pop()();_e=!1,Te.clear()}function en(t){if(t.fragment!==null){t.update(),Yt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Zt)}}const tn={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},q=(t,e)=>new CustomEvent(t,{detail:e});function nn(t,e={}){const{root:n,rootMargin:r,threshold:a,unobserveOnEnter:s}=Object.assign(Object.assign({},tn),e);let o={x:void 0,y:void 0},c={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const I=new IntersectionObserver((C,v)=>{C.forEach(i=>{o.y>i.boundingClientRect.y?c.vertical="up":c.vertical="down",o.x>i.boundingClientRect.x?c.horizontal="left":c.horizontal="right",o={y:i.boundingClientRect.y,x:i.boundingClientRect.x};const l={inView:i.isIntersecting,entry:i,scrollDirection:c,node:t,observer:v};t.dispatchEvent(q("inview_change",l)),t.dispatchEvent(q("change",l)),i.isIntersecting?(t.dispatchEvent(q("inview_enter",l)),t.dispatchEvent(q("enter",l)),s&&v.unobserve(t)):(t.dispatchEvent(q("inview_leave",l)),t.dispatchEvent(q("leave",l)))})},{root:n,rootMargin:r,threshold:a});return Kt().then(()=>{t.dispatchEvent(q("inview_init",{observer:I,node:t})),t.dispatchEvent(q("init",{observer:I,node:t}))}),I.observe(t),{destroy(){I.unobserve(t)}}}}var sn=V('<div><span class="row-index svelte-1c8e44s"></span> <button type="button" class="svelte-1c8e44s"><pre class="svelte-1c8e44s"> </pre></button></div>'),rn=V('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span class="svelte-1c8e44s"># Registro</span></div> <!></div></div>');function on(t,e){F(e,!0);const n=()=>G(j,"$currentRecordIndex",o),r=()=>G(fe,"$activeField",o),a=()=>G(De,"$buffer",o),s=()=>G(Ie,"$records",o),[o,c]=ue(),I=new TextDecoder("ascii"),C=[];let v=[],i;function l(){C[n()]?.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function f(h){j.set(h)}function d(){const h=Pt(fe);if(!CSS.highlights){console.log("CSS Custom Highlight API not supported.");return}if(CSS.highlights.clear(),!h)return;const R=C[n()]?.querySelector("pre");if(!R)return;const E=R.firstChild;if(console.log(E,E.nodeType===Node.TEXT_NODE),E&&E.nodeType===Node.TEXT_NODE){const D=new Range;D.setStart(E,h.offset),D.setEnd(E,h.offset+h.byteLength),i=new Highlight(D),console.log(h.offset,h.offset,h.byteLength),CSS.highlights.set("raw-highlight",i),console.log(CSS.highlights.values().toArray())}}se(()=>(v[n()]||l(),r(),a(),d(),()=>{}));var p=rn(),m=L(p),w=T(L(m),2);me(w,1,s,be,(h,R,E)=>{var D=sn();let Y;var Q=L(D);Q.textContent=E+1;var M=T(Q,2),J=L(M),ee=L(J,!0);$(J),$(M),Nt(M,B=>nn?.(B)),mt(M,(B,u)=>C[u]=B,B=>C?.[B],()=>[E]),$(D),Z(B=>{Y=qe(D,1,"table-row svelte-1c8e44s",null,Y,{"current-record":n()===E}),ce(ee,B)},[()=>I.decode(g(R))]),he("inview_change",M,B=>v[E]=B.detail.inView),ge("click",M,()=>f(E)),A(h,D)}),$(m),$(p),A(t,p),H(),c()}Ee(["click"]);function an(t,e){F(e,!0);let n=oe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];ae(t,re({name:"chevrons-left"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=X(),c=_(o);ie(c,()=>e.children??k),A(a,o)},$$slots:{default:!0}})),H()}function cn(t,e){F(e,!0);let n=oe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];ae(t,re({name:"chevrons-right"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=X(),c=_(o);ie(c,()=>e.children??k),A(a,o)},$$slots:{default:!0}})),H()}var ln=V('<!> <span class="redef-value"> </span> <!>',1);function dn(t,e){F(e,!1);const n=()=>G(Ke,"$activeVariant",a),r=()=>G(Le,"$model",a),[a,s]=ue();function o(l,f){const d=n()[l]??l,p=f.indexOf(d),m=f[(p-1+f.length)%f.length];xe(l,m)}function c(l,f){const d=n()[l]??l,p=f.indexOf(d),m=f[(p+1)%f.length];xe(l,m)}function I(l){return r()?Ze(r(),n()).some(d=>d.variantPath?.some(p=>p.group===l)):!1}St();var C=X(),v=_(C);{var i=l=>{var f=X(),d=_(f);me(d,1,()=>Object.entries(r().redefineGroups),be,(p,m)=>{var w=Ne(()=>Et(g(m),2));let h=()=>g(w)[0],R=()=>g(w)[1];var E=X(),D=_(E);{var Y=M=>{Pe(M,{children:(J,ee)=>{var B=X(),u=_(B);{var b=P=>{var S=ln(),U=_(S);K(U,{onclick:()=>o(h(),R()),children:(y,nt)=>{an(y,{size:16,strokeWidth:3})},$$slots:{default:!0}});var z=T(U,2),te=L(z,!0);$(z);var O=T(z,2);K(O,{onclick:()=>c(h(),R()),children:(y,nt)=>{cn(y,{size:16,strokeWidth:3})},$$slots:{default:!0}}),Z(()=>ce(te,n()[h()]??h())),A(P,S)},N=Ne(()=>I(h()));le(u,P=>{g(N)&&P(b)})}A(J,B)},$$slots:{default:!0}})},Q=Ne(()=>R().length>1&&I(h()));le(D,M=>{g(Q)&&M(Y)})}A(p,E)}),A(l,f)};le(v,l=>{r()&&l(i)})}A(t,C),H(),s()}function fn(t,e){F(e,!0);let n=oe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];ae(t,re({name:"arrow-up-to-line"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=X(),c=_(o);ie(c,()=>e.children??k),A(a,o)},$$slots:{default:!0}})),H()}function un(t,e){F(e,!0);let n=oe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ae(t,re({name:"plus"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=X(),c=_(o);ie(c,()=>e.children??k),A(a,o)},$$slots:{default:!0}})),H()}function Cn(t,e){F(e,!0);let n=oe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];ae(t,re({name:"arrow-down-to-line"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=X(),c=_(o);ie(c,()=>e.children??k),A(a,o)},$$slots:{default:!0}})),H()}function In(t,e){F(e,!0);let n=oe(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];ae(t,re({name:"copy"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=X(),c=_(o);ie(c,()=>e.children??k),A(a,o)},$$slots:{default:!0}})),H()}function hn(t,e){F(e,!0);let n=oe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ae(t,re({name:"trash"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=X(),c=_(o);ie(c,()=>e.children??k),A(a,o)},$$slots:{default:!0}})),H()}var vn=V('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),pn=V("<!> <!> <!> <!> <!>",1),Rn=V('<div class="muted">Nenhum modelo ativo</div>'),Pn=V('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div class="form svelte-7p234s"><!></div> <!>',1);function En(t,e){F(e,!0);const n=()=>G(Le,"$model",c),r=()=>G(De,"$buffer",c),a=()=>G(Ke,"$activeVariant",c),s=()=>G(j,"$currentRecordIndex",c),o=()=>G(Ie,"$records",c),[c,I]=ue();let C=de(gt([])),v=de(1);se(()=>(x(C,n()&&r()?Ze(n(),a()):[],!0),x(v,s()+1),()=>{}));function i(){if(!n())return null;const u=new Uint8Array(n().recordLength);return u.fill(32),u}function l(u){const b=i();b&&(Ie.update(N=>{const P=N.slice();return P.splice(u+1,0,b),P}),Se.update(N=>{const P=N.slice();return P.splice(u+1,0,{}),P}),j.set(u+1))}function f(u){Ie.update(b=>{const N=b.slice(),P=b[u];if(!P)return b;const S=new Uint8Array(P);return N.splice(u+1,0,S),N}),Se.update(b=>{const N=b.slice();return N.splice(u+1,0,{...b[u]??{}}),N}),j.set(u+1)}function d(u){if(o().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${u+1}?`))return;Ie.update(P=>{const S=P.slice();return S.splice(u,1),S}),Se.update(P=>{const S=P.slice();return S.splice(u,1),S});const N=u>=o().length-1?u-1:u;j.set(Math.max(0,N))}function p(){j.update(u=>Math.max(0,u-1))}function m(){j.update(u=>Math.min(o().length-1,u+1))}function w(){const u=g(v)-1;if(u<0||u>=o().length){x(v,s()+1);return}j.set(u)}var h=Pn(),R=T(_(h),2),E=L(R);Pe(E,{gap:".1rem",children:(u,b)=>{var N=vn(),P=T(_(N),2);$e(P);let S;var U=T(P,2),z=L(U);$(U),Z(()=>{W(P,"max",o().length),W(P,"maxlength",o().length),S=qe(P,1,"svelte-7p234s",null,S,{invalid:g(v)<1||g(v)>o().length}),ce(z,`/ ${o().length??""}`)}),ge("change",P,w),Ae(P,()=>g(v),te=>x(v,te)),A(u,N)},$$slots:{default:!0}});var D=T(E,2);Pe(D,{children:(u,b)=>{var N=pn(),P=_(N);K(P,{onclick:p,[Ce()]:O=>(ne("Ir para linha anterior")||k)(O),children:(O,y)=>{fn(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var S=T(P,2);K(S,{onclick:()=>l(s()),[Ce()]:O=>(ne("Adicionar linha")||k)(O),children:(O,y)=>{un(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var U=T(S,2);K(U,{onclick:m,[Ce()]:O=>(ne("Ir para a próxima linha")||k)(O),children:(O,y)=>{Cn(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var z=T(U,2);K(z,{onclick:()=>f(s()),secondary:!0,[Ce()]:O=>(ne("Duplicar linha atual")||k)(O),children:(O,y)=>{In(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var te=T(z,2);K(te,{onclick:()=>d(s()),danger:!0,[Ce()]:O=>(ne("Deletar linha atual")||k)(O),children:(O,y)=>{hn(O,{size:16,strokeWidth:3})},$$slots:{default:!0}}),A(u,N)},$$slots:{default:!0}});var Y=T(D,2);dn(Y,{}),$(R);var Q=T(R,2),M=L(Q);{var J=u=>{var b=Rn();A(u,b)},ee=u=>{var b=X(),N=_(b);me(N,17,()=>g(C),P=>P.name+":"+P.offset,(P,S)=>{var U=X(),z=_(U);{var te=y=>{Wt(y,{get field(){return g(S)}})},O=y=>{Ut(y,{get field(){return g(S)}})};le(z,y=>{g(S).usage==="COMP-3"?y(te):y(O,-1)})}A(P,U)}),A(u,b)};le(M,u=>{!n()||!r()?u(J):u(ee,-1)})}$(Q);var B=T(Q,2);on(B,{}),A(t,h),H(),I()}Ee(["change"]);var gn=V('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),An=V('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function _n(t){var e=An();Ot("1uha8ag",o=>{var c=gn();Ue(()=>{At.title="Home"}),A(o,c)});var n=_(e),r=L(n);Ft(r,{}),$(n);var a=T(n,2),s=L(a);En(s,{}),$(a),A(t,e)}export{_n as component,Tn as universal};
