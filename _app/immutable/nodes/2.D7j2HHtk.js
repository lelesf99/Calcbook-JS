import{a as D,f as Y,c as x,t as nt,s as ce,d as Qe,e as st,b as ze}from"../chunks/Bz9pcTi_.js";import{K as rt,d as ot,aL as at,ap as it,h as Ee,aC as ct,aD as Le,g as Me,f as ye,i as lt,au as ut,j as Ye,b as We,c as dt,a4 as ft,u as le,aM as Ct,aN as Be,C as R,aO as It,a0 as pt,aP as ht,p as w,A as F,w as M,n as _,t as ae,o as U,an as Pt,aQ as vt,q as X,v as V,a6 as ue,x as H,B as gt,a7 as he,aR as Rt,V as Et,aS as At}from"../chunks/R3T74W7k.js";import{a as Ce,b as k,s as ne,r as K,p as mt}from"../chunks/vGbNO2P5.js";import{i as te,b as Oe}from"../chunks/D0UFlnsV.js";import{k as Ge,P as ve,l as $e,e as Re,B as q,i as Te,h as Dt,m as be,I as se,s as re,n as Ot,o as Nt,t as ie,p as St,q as _e,u as $t,v as ge,w as j,b as Ne,j as fe,x as xe,y as je,c as Tt,r as bt,a as Xe,g as de,z as Ae}from"../chunks/BKKvytwv.js";function _t(t,e){let n=null,s=Ee;var a;if(Ee){n=lt;for(var r=ut(document.head);r!==null&&(r.nodeType!==ct||r.data!==t);)r=Le(r);if(r===null)Me(!1);else{var o=Le(r);r.remove(),ye(o)}}Ee||(a=document.head.appendChild(rt()));try{ot(()=>e(a),at|it)}finally{s&&(Me(!0),ye(n))}}function Lt(t,e,n){Ye(()=>{var s=We(()=>e(t,n?.())||{});if(s?.destroy)return()=>s.destroy()})}function Mt(t=!1){const e=dt,n=e.l.u;if(!n)return;let s=()=>It(e.s);if(t){let a=0,r={};const o=pt(()=>{let i=!1;const c=e.s;for(const I in c)c[I]!==r[I]&&(r[I]=c[I],i=!0);return i&&a++,a});s=()=>R(o)}n.b.length&&ft(()=>{Ve(e,s),Be(n.b)}),le(()=>{const a=We(()=>n.m.map(Ct));return()=>{for(const r of a)typeof r=="function"&&r()}}),n.a.length&&le(()=>{Ve(e,s),Be(n.a)})}function Ve(t,e){if(t.l.s)for(const n of t.l.s)R(n);e()}const yt=!0,Fn=Object.freeze(Object.defineProperty({__proto__:null,prerender:yt},Symbol.toStringTag,{value:"Module"}));ht();const Bt=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,Gt=/OCCURS\s+(\d+)\s+TIMES/i,xt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function Xt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMP-1"||e==="COMP-2"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function Fe(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function Vt(t){const n=t.split(/\r?\n/).map(r=>r.length>6?r.slice(6):r).map(r=>r.replace(/\r$/,"")).filter(r=>r.trim().length>0).filter(r=>!r.trim().startsWith("*")),s=[];let a="";for(let r=0;r<n.length;r++){const o=n[r],i=o.trimEnd(),c=i.endsWith("-"),I=!i.endsWith(".");c||I?a+=i.replace(/-$/,""):(a+=o,s.push(a.trim()),a="")}return a.trim()&&s.push(a.trim()),s}function Ft(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),a=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:a,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=Fe(s[1]),c=Fe(s[2]);return{raw:t,type:"NUMERIC",length:i+c,decimals:c||void 0,signed:n}}const a=e.split("V"),r=(a[0].match(/9/g)||[]).length,o=a[1]?(a[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:r+o,decimals:o||void 0,signed:n}}}function Ht(t){const e=Vt(t),n=[],s=[];let a=1;for(const r of e){const o=r.trim().split(/\s+/),i=parseInt(o[0],10),c=o[1];if(Number.isNaN(i)||!c)continue;let I=c.replace(/\.$/,"");const p={level:i,name:I,isFiller:I.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},C=r.match(xt);C&&(p.redefines=C[1].replace(/\.$/,""));const l=r.match(Bt);if(l){const v=Ft(l[2]);v&&(p.pic=v)}const h=r.match(Gt);h&&(p.occurs={times:parseInt(h[1],10)});let d;if(l){const v=r.slice(l.index+l[0].length);let O=v.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);O?d=O[1]:(O=v.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),O&&(d=O[1]))}else{let v=r.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);v||(v=r.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),v&&(d=v[1])}for(d&&(p.usage=Xt(d));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?n.push(p):s[s.length-1].children.push(p),s.push(p)}return(function r(o){for(const i of o)i.isFiller&&(i.name=`FILLER-${a++}`),r(i.children)})(n),n}function He(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP-1")return 4;if(e==="COMP-2")return 8;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=n.type==="NUMERIC"?n.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=n.type==="NUMERIC"?n.length:0;return Math.ceil((s+1)/2)}return n.length}function kt(t){const e=new Map;(function C(l){for(const h of l)e.set(h.name,h),C(h.children)})(t);const n={};(function C(l){for(const h of l){if(h.redefines){const d=h.redefines;n[d]||=new Set([d]),n[d].add(h.name)}C(h.children)}})(t);const s={};for(const[C,l]of Object.entries(n))s[C]=Array.from(l);const a={};for(const[C,l]of Object.entries(s))for(const h of l)a[h]=C;const r=C=>{if(C.children.length&&!C.pic&&!C.redefines){let d=0;for(const O of C.children)d+=r(O);const v=C.occurs?.times??1;return d*v}const l=C.pic?He(C):0,h=C.occurs?.times??1;return l*h},o={},i=[];let c=0;const I=[],p=(C,l)=>{let h=l;for(const d of C){let v=h;if(d.redefines){const E=d.redefines;E in o?v=o[E]:console.warn(`REDEFINES base not found yet: ${E}. Ensure base appears before redefiner.`)}d.name in o||(o[d.name]=v);const O=a[d.name];let y=!1;O&&(I.push({group:O,member:d.name}),y=!0);const g=r(d);if(d.children.length&&!d.pic){const E=d.occurs?.times??1,P=E?g/E:g;for(let u=0;u<E;u++)p(d.children,v+u*P)}else{const E=d.occurs?.times??1,P=d.pic?He(d):0;for(let u=0;u<E;u++)i.push({...d,offset:v+u*P,byteLength:P,variantPath:I.length?I.slice():void 0})}y&&I.pop(),d.redefines?c=Math.max(c,v+g):(h+=g,c=Math.max(c,h))}};return p(t,0),{root:t,fieldsFlat:i,recordLength:c,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const ke={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};function wt(t,e=250){let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>t(...s),e)}}var Ut=Y('<span class="err"> </span>'),Qt=Y('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function zt(t,e){w(e,!0);const n=()=>k(be,"$model",s),[s,a]=Ce();let r=ue(""),o=ue("");function i(g){try{const E=kt(Ht(g));Ge(E);const P=new Uint8Array(E.recordLength);P.fill(32),Dt([P]),F(o,"")}catch(E){F(o,E?.message??"Erro ao processar copybook",!0)}}const c=wt(i,300);function I(g){F(r,ke[g]+`
`),i(R(r))}le(()=>{if(!R(r)?.trim()){Ge(null),F(o,"");return}c(R(r))});var p=Qt(),C=M(_(p),2);ve(C,{children:(g,E)=>{var P=x(),u=_(P);Re(u,17,()=>Object.keys(ke),Te,(m,b)=>{q(m,{onclick:()=>I(R(b)),children:(S,G)=>{Pt();var B=nt();ae(()=>ce(B,R(b))),D(S,B)},$$slots:{default:!0}})}),D(g,P)},$$slots:{default:!0}});var l=M(C,2);vt(l);var h=M(l,2),d=X(h),v=X(d);V(d);var O=M(d,2);{var y=g=>{var E=Ut(),P=X(E,!0);V(E),ae(()=>ce(P,R(o))),D(g,E)};te(O,g=>{R(o)&&g(y)})}V(h),ae(()=>ce(v,`len: ${(n()?n().recordLength:"—")??""}`)),$e(l,()=>R(r),g=>F(r,g)),D(t,p),U(),a()}function Yt(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function qe(t,e){return t.fieldsFlat.filter(n=>Yt(n,e))}function Wt(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];se(t,ne({name:"arrow-down-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function jt(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];se(t,ne({name:"arrow-up-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function qt(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];se(t,ne({name:"chevrons-left"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function Kt(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];se(t,ne({name:"chevrons-right"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function Zt(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];se(t,ne({name:"copy"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function Jt(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];se(t,ne({name:"minus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function Ke(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];se(t,ne({name:"plus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function en(t,e){w(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];se(t,ne({name:"trash"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=_(o);re(i,()=>e.children??H),D(a,o)},$$slots:{default:!0}})),U()}function tn(t,e,n,s=!1){switch(e){case 1:return n?t.getInt8(0):t.getUint8(0);case 2:return n?t.getInt16(0,s):t.getUint16(0,s);case 4:return n?t.getInt32(0,s):t.getUint32(0,s);default:throw new Error("Unsupported binary size")}}function nn(t,e){const n=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),s=e.pic?.signed??!1;return tn(n,e.byteLength,s,!1).toString()}function sn(t,e,n){const s=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),a=Number(n);if(isNaN(a))return;const r=e.pic?.signed??!1;switch(e.byteLength){case 1:r?s.setInt8(0,a):s.setUint8(0,a);break;case 2:r?s.setInt16(0,a,!1):s.setUint16(0,a,!1);break;case 4:r?s.setInt32(0,a,!1):s.setUint32(0,a,!1);break}}function rn(t,e,n){const s=e.byteLength,a=!!e.pic?.signed;let r=!1,o=n;a&&(n[0]==="-"&&(r=!0),o=n.slice(1));const i=s*2-1,c=o.padStart(i,"0");let I=c.length-1;for(let p=s-1;p>=0;p--){let C,l;p===s-1?(C=Number(c[I--]),l=r?13:12):(l=Number(c[I--]),C=Number(c[I--])),t[e.offset+p]=C<<4|l}}function on(t,e){const n=e.byteLength,s=!!e.pic?.signed;let a="",r=!1;for(let o=e.offset;o<e.offset+n;o++){const i=t[o],c=i>>4&15,I=i&15;o===e.offset+n-1?(I===13&&(r=!0),a+=c.toString()):a+=c.toString()+I.toString()}return s?(r?"-":"+")+a:a}const me=new TextEncoder,an=new TextDecoder("ascii"),Ze=["{","A","B","C","D","E","F","G","H","I"],Je=["}","J","K","L","M","N","O","P","Q","R"];function cn(t,e){const n=t.buffer.slice(e.offset,e.offset+e.byteLength),s=an.decode(n);if(e.pic?.type==="NUMERIC"){const a=!!e.pic.signed,r=e.pic.decimals??0;let o=s;if(a){const i=s.at(-1),c=Ze.indexOf(i),I=Je.indexOf(i);c>=0?o=s.slice(0,-1)+c:I>=0&&(o=s.slice(0,-1)+I)}if(o.trim()==="")return"";if(r>0){const i=o.slice(0,-r),c=o.slice(-r);return`${i}.${c}`}return`${o}`}return s.replace(/[\u0000 ]+$/g,"")}function ln(t,e,n){const s=e.byteLength,a=String(n);if(console.log(`raw: ${a}`),e.pic?.type==="NUMERIC"){const o=!!e.pic.signed,i=e.pic.decimals??0,c=a.replace(",",".");console.log(`normalized: ${c}`);let I=!1,p=c;o&&/^[+-]/.test(p)&&(I=p[0]==="-",p=p.slice(1)),console.log(`numeric: ${p}`);const[C="",l=""]=p.split(".");console.log(`iRaw: ${C}`,`dRaw: ${l}`);const h=C.replace(/\D/g,""),d=l.replace(/\D/g,""),v=s,O=i,y=v-O,g=h.padStart(y," ")+d.padEnd(O," ");if(!o){t.set(me.encode(g),e.offset);return}const E=Number(g.at(-1)??0),P=I?Je[E]:Ze[E],u=g.slice(0,-1)+P;t.set(me.encode(u),e.offset);return}const r=a.padEnd(s," ");t.set(me.encode(r),e.offset)}function et(t){const e=t.usage?.toUpperCase();return!e||e==="DISPLAY"?"DISPLAY":e==="COMP-1"?"COMP-1":e==="COMP-2"?"COMP-2":e==="COMP-3"||e==="PACKED-DECIMAL"?"COMP-3":e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"?"BINARY":"DISPLAY"}function un(t,e,n){switch(et(e)){case"DISPLAY":return ln(t,e,n);case"COMP-3":return rn(t,e,n);case"BINARY":return sn(t,e,n)}}function dn(t,e){switch(et(e)){case"DISPLAY":return cn(t,e);case"COMP-3":return on(t,e);case"BINARY":return nn(t,e)}return""}var fn=Y('<div class="field svelte-n1ol00"><!> <input/></div>');function Cn(t,e){w(e,!0);const n=()=>k(_e,"$buffer",s),[s,a]=Ce();let r=mt(e,"tooltipText",3,""),o=K(e,["$$slots","$$events","$$legacy","field","tooltipText"]),i,c=ue(""),I=ue(!1);le(()=>{n()&&F(c,l(dn(n(),e.field)),!0)});function p(u){e.field.pic?.type==="NUMERIC"&&F(c,u.target.value,!0),$t(m=>{un(m,e.field,C(R(c)))})}function C(u){return console.log(`parsing: ${u}`),(e.field.pic?.signed?R(I)?"-":"+":"")+u.replace(/\D/g,"")}function l(u){const m=e.field.pic;if(!m||!u)return u;if(m.type==="NUMERIC"){const b=e.field.byteLength-m.decimals;let S=u.replace(/\D/g,"");if(S.length>b){const G=S.slice(0,b),B=S.slice(-(S.length-b));console.log(-Math.max(0,S.length-b)),S=B?`${G}.${B}`:G}return S}return u}function h(u){if(!u.pic)return"";if(u.pic.type==="ALPHA")return"X".repeat(u.byteLength);if(u.pic.type==="NUMERIC"){u.pic.signed;const m=u.pic.decimals??0,S=u.byteLength-m;let G="";return G+="9".repeat(S),m>0&&(G+="."+"9".repeat(m)),G}return""}var d=fn();let v;var O=X(d);{var y=u=>{q(u,{onclick:()=>{F(I,!R(I)),i.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))},muted:!0,children:(m,b)=>{var S=x(),G=_(S);{var B=Q=>{Ke(Q,{size:16,strokeWidth:3})},W=Q=>{Jt(Q,{size:16,strokeWidth:3})};te(G,Q=>{R(I)?Q(W,-1):Q(B)})}D(m,S)},$$slots:{default:!0}})};te(O,u=>{e.field.pic?.signed&&u(y)})}var g=M(O,2),E=()=>ge.set(e.field),P=()=>ge.set(null);Ot(g,u=>({placeholder:u,oninput:p,onfocus:E,onblur:P,inputmode:e.field.pic?.type==="NUMERIC"?"decimal":"text",maxlength:e.field.byteLength+(e.field.pic?.decimals?1:0),autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off",...o}),[()=>h(e.field)],void 0,void 0,"svelte-n1ol00",!0),Oe(g,u=>i=u,()=>i),Nt(g,()=>ie(r(),"focus")),V(d),ae(()=>v=St(d,"",v,{"flex-basis":`calc(${e.field.byteLength+(e.field.pic?.signed?1:0)}ch + 2.4rem ${e.field.pic?.signed?"+ 2.6rem":""} ${e.field.pic?.decimals?"+ 1.5rem":""})`})),$e(g,()=>R(c),u=>F(c,u)),D(t,d),U(),a()}function In(t){return t()}function pn(t){t.forEach(In)}const Ie=[],we=[],Pe=[],Ue=[],tt=Promise.resolve();let Se=!1;function hn(){Se||(Se=!0,tt.then(gn))}function Pn(){return hn(),tt}function vn(t){Pe.push(t)}const De=new Set;let pe=0;function gn(){do{for(;pe<Ie.length;){const t=Ie[pe];pe++,Rn(t.$$)}for(Ie.length=0,pe=0;we.length;)we.pop()();for(let t=0;t<Pe.length;t+=1){const e=Pe[t];De.has(e)||(De.add(e),e())}Pe.length=0}while(Ie.length);for(;Ue.length;)Ue.pop()();Se=!1,De.clear()}function Rn(t){if(t.fragment!==null){t.update(),pn(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(vn)}}const En={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},ee=(t,e)=>new CustomEvent(t,{detail:e});function An(t,e={}){const{root:n,rootMargin:s,threshold:a,unobserveOnEnter:r}=Object.assign(Object.assign({},En),e);let o={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const c=new IntersectionObserver((I,p)=>{I.forEach(C=>{o.y>C.boundingClientRect.y?i.vertical="up":i.vertical="down",o.x>C.boundingClientRect.x?i.horizontal="left":i.horizontal="right",o={y:C.boundingClientRect.y,x:C.boundingClientRect.x};const l={inView:C.isIntersecting,entry:C,scrollDirection:i,node:t,observer:p};t.dispatchEvent(ee("inview_change",l)),t.dispatchEvent(ee("change",l)),C.isIntersecting?(t.dispatchEvent(ee("inview_enter",l)),t.dispatchEvent(ee("enter",l)),r&&p.unobserve(t)):(t.dispatchEvent(ee("inview_leave",l)),t.dispatchEvent(ee("leave",l)))})},{root:n,rootMargin:s,threshold:a});return Pn().then(()=>{t.dispatchEvent(ee("inview_init",{observer:c,node:t})),t.dispatchEvent(ee("init",{observer:c,node:t}))}),c.observe(t),{destroy(){c.unobserve(t)}}}}var mn=Y('<div><span class="row-index svelte-1c8e44s"></span> <button type="button" class="svelte-1c8e44s"><pre class="svelte-1c8e44s"> </pre></button></div>'),Dn=Y('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span class="svelte-1c8e44s"># Registro</span></div> <!></div></div>');function On(t,e){w(e,!0);const n=()=>k(j,"$currentRecordIndex",o),s=()=>k(ge,"$activeField",o),a=()=>k(_e,"$buffer",o),r=()=>k(fe,"$records",o),[o,i]=Ce();new TextDecoder("ascii");const c=[];let I=[],p,C;function l(){c[n()]?.parentElement?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function h(P){P&&C.scrollTo({left:P.offset*8,behavior:"smooth"})}function d(P){j.set(P)}function v(){const P=gt(ge);if(!CSS.highlights){console.log("CSS Custom Highlight API not supported.");return}if(CSS.highlights.clear(),!P)return;const u=c[n()]?.querySelector("pre");if(!u)return;const m=u.firstChild;if(m&&m.nodeType===Node.TEXT_NODE){const b=new Range;b.setStart(m,P.offset),b.setEnd(m,P.offset+P.byteLength),p=new Highlight(b),CSS.highlights.set("raw-highlight",p)}}function O(P){return Array.from(P).map(u=>u>=32&&u<=126?String.fromCharCode(u):"·").join("")}le(()=>(I[n()]||l(),h(s()),a(),v(),()=>{}));var y=Dn(),g=X(y),E=M(X(g),2);Re(E,1,r,Te,(P,u,m)=>{var b=mn();let S;var G=X(b);G.textContent=m+1;var B=M(G,2),W=X(B),Q=X(W,!0);V(W),V(B),Lt(B,f=>An?.(f)),Oe(B,(f,L)=>c[L]=f,f=>c?.[f],()=>[m]),V(b),ae(f=>{S=Ne(b,1,"table-row svelte-1c8e44s",null,S,{"current-record":n()===m}),ce(Q,f)},[()=>O(R(u))]),st("inview_change",B,f=>I[m]=f.detail.inView),ze("click",B,()=>d(m)),D(P,b)}),V(g),V(y),Oe(y,P=>C=P,()=>C),D(t,y),U(),i()}Qe(["click"]);var Nn=Y('<!> <span class="redef-value"> </span> <!>',1);function Sn(t,e){w(e,!1);const n=()=>k(je,"$activeVariant",a),s=()=>k(be,"$model",a),[a,r]=Ce();function o(l,h){const d=n()[l]??l,v=h.indexOf(d),O=h[(v-1+h.length)%h.length];xe(l,O)}function i(l,h){const d=n()[l]??l,v=h.indexOf(d),O=h[(v+1)%h.length];xe(l,O)}function c(l){return s()?qe(s(),n()).some(d=>d.variantPath?.some(v=>v.group===l)):!1}Mt();var I=x(),p=_(I);{var C=l=>{var h=x(),d=_(h);Re(d,1,()=>Object.entries(s().redefineGroups),Te,(v,O)=>{var y=he(()=>Rt(R(O),2));let g=()=>R(y)[0],E=()=>R(y)[1];var P=x(),u=_(P);{var m=S=>{ve(S,{children:(G,B)=>{var W=x(),Q=_(W);{var f=T=>{var A=Nn(),$=_(A);q($,{onclick:()=>o(g(),E()),children:(N,J)=>{qt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var z=M($,2),Z=X(z,!0);V(z);var oe=M(z,2);q(oe,{onclick:()=>i(g(),E()),children:(N,J)=>{Kt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}}),ae(()=>ce(Z,n()[g()]??g())),D(T,A)},L=he(()=>c(g()));te(Q,T=>{R(L)&&T(f)})}D(G,W)},$$slots:{default:!0}})},b=he(()=>E().length>1&&c(g()));te(u,S=>{R(b)&&S(m)})}D(v,P)}),D(l,h)};te(p,l=>{s()&&l(C)})}D(t,I),U(),r()}var $n=Y('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),Tn=Y("<!> <!> <!> <!> <!>",1),bn=Y('<div class="muted">Nenhum modelo ativo</div>'),_n=Y('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div><!></div> <!>',1);function Ln(t,e){w(e,!0);const n=()=>k(be,"$model",i),s=()=>k(je,"$activeVariant",i),a=()=>k(j,"$currentRecordIndex",i),r=()=>k(fe,"$records",i),o=()=>k(_e,"$buffer",i),[i,c]=Ce();let I=ue(Et([])),p=ue(1),C="flex";le(()=>(F(I,n()?qe(n(),s()):[],!0),F(p,a()+1),()=>{}));function l(){if(!n())return null;const f=new Uint8Array(n().recordLength);return f.fill(32),f}function h(f){const L=l();L&&(fe.update(T=>{const A=T.slice();return A.splice(f+1,0,L),A}),Ae.update(T=>{const A=T.slice();return A.splice(f+1,0,{}),A}),j.set(f+1))}function d(f){fe.update(L=>{const T=L.slice(),A=L[f];if(!A)return L;const $=new Uint8Array(A);return T.splice(f+1,0,$),T}),Ae.update(L=>{const T=L.slice();return T.splice(f+1,0,{...L[f]??{}}),T}),j.set(f+1)}function v(f){if(r().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${f+1}?`))return;fe.update(A=>{const $=A.slice();return $.splice(f,1),$}),Ae.update(A=>{const $=A.slice();return $.splice(f,1),$});const T=f>=r().length-1?f-1:f;j.set(Math.max(0,T))}function O(){j.update(f=>Math.max(0,f-1))}function y(){j.update(f=>Math.min(r().length-1,f+1))}function g(){const f=R(p)-1;if(f<0||f>=r().length){F(p,a()+1);return}j.set(f)}var E=_n(),P=M(_(E),2),u=X(P);ve(u,{gap:".1rem",children:(f,L)=>{var T=$n(),A=M(_(T),2);bt(A);let $;var z=M(A,2),Z=X(z);V(z),ae(()=>{Xe(A,"max",r().length),Xe(A,"maxlength",r().length),$=Ne(A,1,"svelte-7p234s",null,$,{invalid:R(p)<1||R(p)>r().length}),ce(Z,`/ ${r().length??""}`)}),ze("change",A,g),$e(A,()=>R(p),oe=>F(p,oe)),D(f,T)},$$slots:{default:!0}});var m=M(u,2);ve(m,{children:(f,L)=>{var T=Tn(),A=_(T);q(A,{onclick:O,[de()]:N=>(ie("Ir para linha anterior")||H)(N),children:(N,J)=>{jt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var $=M(A,2);q($,{onclick:()=>h(a()),[de()]:N=>(ie("Adicionar linha")||H)(N),children:(N,J)=>{Ke(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var z=M($,2);q(z,{onclick:y,[de()]:N=>(ie("Ir para a próxima linha")||H)(N),children:(N,J)=>{Wt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Z=M(z,2);q(Z,{onclick:()=>d(a()),secondary:!0,[de()]:N=>(ie("Duplicar linha atual")||H)(N),children:(N,J)=>{Zt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var oe=M(Z,2);q(oe,{onclick:()=>v(a()),danger:!0,[de()]:N=>(ie("Deletar linha atual")||H)(N),children:(N,J)=>{en(N,{size:16,strokeWidth:3})},$$slots:{default:!0}}),D(f,T)},$$slots:{default:!0}});var b=M(m,2);Sn(b,{}),V(P);var S=M(P,2);Ne(S,1,Tt(["form",C]),"svelte-7p234s");var G=X(S);{var B=f=>{var L=bn();D(f,L)},W=f=>{var L=x(),T=_(L);Re(T,17,()=>R(I),A=>A.name+":"+A.offset,(A,$)=>{var z=x(),Z=_(z);{var oe=N=>{{let J=he(()=>`${R($).name} : ${R($).pic?.raw} : [${R($).offset}..${R($).offset+R($).byteLength-1}]`);Cn(N,{get name(){return R($).name},get field(){return R($)},get tooltipText(){return R(J)}})}};te(Z,N=>{N(oe,-1)})}D(A,z)}),D(f,L)};te(G,f=>{!n()||!o()?f(B):f(W,-1)})}V(S);var Q=M(S,2);On(Q,{}),D(t,E),U(),c()}Qe(["change"]);var Mn=Y('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),yn=Y('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function Hn(t){var e=yn();_t("1uha8ag",o=>{var i=Mn();Ye(()=>{At.title="Home"}),D(o,i)});var n=_(e),s=X(n);zt(s,{}),V(n);var a=M(n,2),r=X(a);Ln(r,{}),V(a),D(t,e)}export{Hn as component,Fn as universal};
