import{a as m,f as Y,c as x,t as nt,s as ce,d as Qe,e as st,b as ze}from"../chunks/Bz9pcTi_.js";import{K as rt,d as ot,aL as at,ap as it,h as Ee,aC as ct,aD as Le,g as Me,f as ye,i as lt,au as ut,j as Ye,b as We,c as dt,a4 as ft,u as le,aM as Ct,aN as Be,C as E,aO as It,a0 as pt,aP as ht,p as k,A as z,w as M,n as b,t as ae,o as w,an as Pt,aQ as vt,q as X,v as V,a6 as ue,x as F,B as Rt,a7 as he,aR as gt,V as Et,aS as At}from"../chunks/R3T74W7k.js";import{a as Ce,b as H,s as te,r as q,p as mt}from"../chunks/vGbNO2P5.js";import{i as ee,b as Oe}from"../chunks/D0UFlnsV.js";import{k as Ge,P as ve,l as Te,e as ge,B as j,i as $e,h as Dt,m as be,I as ne,s as se,n as Ot,o as Nt,t as ie,p as St,q as _e,u as Tt,v as Re,w as W,b as Ne,j as fe,x as xe,y as je,c as $t,r as bt,a as Xe,g as de,z as Ae}from"../chunks/BKKvytwv.js";function _t(t,e){let n=null,s=Ee;var a;if(Ee){n=lt;for(var r=ut(document.head);r!==null&&(r.nodeType!==ct||r.data!==t);)r=Le(r);if(r===null)Me(!1);else{var o=Le(r);r.remove(),ye(o)}}Ee||(a=document.head.appendChild(rt()));try{ot(()=>e(a),at|it)}finally{s&&(Me(!0),ye(n))}}function Lt(t,e,n){Ye(()=>{var s=We(()=>e(t,n?.())||{});if(s?.destroy)return()=>s.destroy()})}function Mt(t=!1){const e=dt,n=e.l.u;if(!n)return;let s=()=>It(e.s);if(t){let a=0,r={};const o=pt(()=>{let i=!1;const l=e.s;for(const I in l)l[I]!==r[I]&&(r[I]=l[I],i=!0);return i&&a++,a});s=()=>E(o)}n.b.length&&ft(()=>{Ve(e,s),Be(n.b)}),le(()=>{const a=We(()=>n.m.map(Ct));return()=>{for(const r of a)typeof r=="function"&&r()}}),n.a.length&&le(()=>{Ve(e,s),Be(n.a)})}function Ve(t,e){if(t.l.s)for(const n of t.l.s)E(n);e()}const yt=!0,Fn=Object.freeze(Object.defineProperty({__proto__:null,prerender:yt},Symbol.toStringTag,{value:"Module"}));ht();const Bt=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,Gt=/OCCURS\s+(\d+)\s+TIMES/i,xt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function Xt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMP-1"||e==="COMP-2"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function Fe(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function Vt(t){const n=t.split(/\r?\n/).map(r=>r.length>6?r.slice(6):r).map(r=>r.replace(/\r$/,"")).filter(r=>r.trim().length>0).filter(r=>!r.trim().startsWith("*")),s=[];let a="";for(let r=0;r<n.length;r++){const o=n[r],i=o.trimEnd(),l=i.endsWith("-"),I=!i.endsWith(".");l||I?a+=i.replace(/-$/,""):(a+=o,s.push(a.trim()),a="")}return a.trim()&&s.push(a.trim()),s}function Ft(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),a=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:a,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=Fe(s[1]),l=Fe(s[2]);return{raw:t,type:"NUMERIC",length:i+l,decimals:l||void 0,signed:n}}const a=e.split("V"),r=(a[0].match(/9/g)||[]).length,o=a[1]?(a[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:r+o,decimals:o||void 0,signed:n}}}function Ht(t){const e=Vt(t),n=[],s=[];let a=1;for(const r of e){const o=r.trim().split(/\s+/),i=parseInt(o[0],10),l=o[1];if(Number.isNaN(i)||!l)continue;let I=l.replace(/\.$/,"");const p={level:i,name:I,isFiller:I.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},f=r.match(xt);f&&(p.redefines=f[1].replace(/\.$/,""));const u=r.match(Bt);if(u){const P=Ft(u[2]);P&&(p.pic=P)}const h=r.match(Gt);h&&(p.occurs={times:parseInt(h[1],10)});let d;if(u){const P=r.slice(u.index+u[0].length);let D=P.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);D?d=D[1]:(D=P.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),D&&(d=D[1]))}else{let P=r.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);P||(P=r.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),P&&(d=P[1])}for(d&&(p.usage=Xt(d));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?n.push(p):s[s.length-1].children.push(p),s.push(p)}return(function r(o){for(const i of o)i.isFiller&&(i.name=`FILLER-${a++}`),r(i.children)})(n),n}function He(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP-1")return 4;if(e==="COMP-2")return 8;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=n.type==="NUMERIC"?n.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=n.type==="NUMERIC"?n.length:0;return Math.ceil((s+1)/2)}return n.length}function kt(t){const e=new Map;(function f(u){for(const h of u)e.set(h.name,h),f(h.children)})(t);const n={};(function f(u){for(const h of u){if(h.redefines){const d=h.redefines;n[d]||=new Set([d]),n[d].add(h.name)}f(h.children)}})(t);const s={};for(const[f,u]of Object.entries(n))s[f]=Array.from(u);const a={};for(const[f,u]of Object.entries(s))for(const h of u)a[h]=f;const r=f=>{if(f.children.length&&!f.pic&&!f.redefines){let d=0;for(const D of f.children)d+=r(D);const P=f.occurs?.times??1;return d*P}const u=f.pic?He(f):0,h=f.occurs?.times??1;return u*h},o={},i=[];let l=0;const I=[],p=(f,u)=>{let h=u;for(const d of f){let P=h;if(d.redefines){const R=d.redefines;R in o?P=o[R]:console.warn(`REDEFINES base not found yet: ${R}. Ensure base appears before redefiner.`)}d.name in o||(o[d.name]=P);const D=a[d.name];let y=!1;D&&(I.push({group:D,member:d.name}),y=!0);const g=r(d);if(d.children.length&&!d.pic){const R=d.occurs?.times??1,v=R?g/R:g;for(let O=0;O<R;O++)p(d.children,P+O*v)}else{const R=d.occurs?.times??1,v=d.pic?He(d):0;for(let O=0;O<R;O++)i.push({...d,offset:P+O*v,byteLength:v,variantPath:I.length?I.slice():void 0})}y&&I.pop(),d.redefines?l=Math.max(l,P+g):(h+=g,l=Math.max(l,h))}};return p(t,0),{root:t,fieldsFlat:i,recordLength:l,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const ke={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};function wt(t,e=250){let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>t(...s),e)}}var Ut=Y('<span class="err"> </span>'),Qt=Y('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function zt(t,e){k(e,!0);const n=()=>H(be,"$model",s),[s,a]=Ce();let r=ue(""),o=ue("");function i(g){try{const R=kt(Ht(g));Ge(R);const v=new Uint8Array(R.recordLength);v.fill(32),Dt([v]),z(o,"")}catch(R){z(o,R?.message??"Erro ao processar copybook",!0)}}const l=wt(i,300);function I(g){z(r,ke[g]+`
`),i(E(r))}le(()=>{if(!E(r)?.trim()){Ge(null),z(o,"");return}l(E(r))});var p=Qt(),f=M(b(p),2);ve(f,{children:(g,R)=>{var v=x(),O=b(v);ge(O,17,()=>Object.keys(ke),$e,(C,N)=>{j(C,{onclick:()=>I(E(N)),children:(B,G)=>{Pt();var _=nt();ae(()=>ce(_,E(N))),m(B,_)},$$slots:{default:!0}})}),m(g,v)},$$slots:{default:!0}});var u=M(f,2);vt(u);var h=M(u,2),d=X(h),P=X(d);V(d);var D=M(d,2);{var y=g=>{var R=Ut(),v=X(R,!0);V(R),ae(()=>ce(v,E(o))),m(g,R)};ee(D,g=>{E(o)&&g(y)})}V(h),ae(()=>ce(P,`len: ${(n()?n().recordLength:"—")??""}`)),Te(u,()=>E(r),g=>z(r,g)),m(t,p),w(),a()}function Yt(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function qe(t,e){return t.fieldsFlat.filter(n=>Yt(n,e))}function Wt(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];ne(t,te({name:"arrow-down-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function jt(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];ne(t,te({name:"arrow-up-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function qt(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];ne(t,te({name:"chevrons-left"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function Kt(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];ne(t,te({name:"chevrons-right"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function Zt(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];ne(t,te({name:"copy"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function Jt(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];ne(t,te({name:"minus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function Ke(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ne(t,te({name:"plus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function en(t,e){k(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ne(t,te({name:"trash"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=x(),i=b(o);se(i,()=>e.children??F),m(a,o)},$$slots:{default:!0}})),w()}function tn(t,e,n,s=!1){switch(e){case 1:return n?t.getInt8(0):t.getUint8(0);case 2:return n?t.getInt16(0,s):t.getUint16(0,s);case 4:return n?t.getInt32(0,s):t.getUint32(0,s);default:throw new Error("Unsupported binary size")}}function nn(t,e){const n=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),s=e.pic?.signed??!1;return tn(n,e.byteLength,s,!1).toString()}function sn(t,e,n){const s=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),a=Number(n);if(isNaN(a))return;const r=e.pic?.signed??!1;switch(e.byteLength){case 1:r?s.setInt8(0,a):s.setUint8(0,a);break;case 2:r?s.setInt16(0,a,!1):s.setUint16(0,a,!1);break;case 4:r?s.setInt32(0,a,!1):s.setUint32(0,a,!1);break}}function rn(t,e,n){const s=e.byteLength,a=!!e.pic?.signed;let r=!1,o=n;a&&(n[0]==="-"&&(r=!0),o=n.slice(1));const i=s*2-1,l=o.padStart(i,"0");let I=l.length-1;for(let p=s-1;p>=0;p--){let f,u;p===s-1?(f=Number(l[I--]),u=r?13:12):(u=Number(l[I--]),f=Number(l[I--])),t[e.offset+p]=f<<4|u}}function on(t,e){const n=e.byteLength,s=!!e.pic?.signed;let a="",r=!1;for(let o=e.offset;o<e.offset+n;o++){const i=t[o],l=i>>4&15,I=i&15;o===e.offset+n-1?(I===13&&(r=!0),a+=l.toString()):a+=l.toString()+I.toString()}return s?(r?"-":"+")+a:a}const me=new TextEncoder,an=new TextDecoder("ascii"),Ze=["{","A","B","C","D","E","F","G","H","I"],Je=["}","J","K","L","M","N","O","P","Q","R"];function cn(t,e){const n=t.buffer.slice(e.offset,e.offset+e.byteLength),s=an.decode(n);if(e.pic?.type==="NUMERIC"){const a=!!e.pic.signed,r=e.pic.decimals??0;let o=s;if(a){const i=s.at(-1),l=Ze.indexOf(i),I=Je.indexOf(i);l>=0?o=s.slice(0,-1)+l:I>=0&&(o=s.slice(0,-1)+I)}if(o.trim()==="")return"";if(r>0){const i=o.slice(0,-r),l=o.slice(-r);return`${i}.${l}`}return`${o}`}return s.replace(/[\u0000 ]+$/g,"")}function ln(t,e,n){const s=e.byteLength,a=String(n);if(e.pic?.type==="NUMERIC"){const o=!!e.pic.signed,i=e.pic.decimals??0,l=a.replace(",",".");let I=!1,p=l;o&&/^[+-]/.test(p)&&(I=p[0]==="-",p=p.slice(1));const[f="",u=""]=p.split("."),h=f.replace(/\D/g,""),d=u.replace(/\D/g,""),P=s,D=i,y=P-D,g=h.padStart(y," ")+d.padEnd(D," ");if(!o){t.set(me.encode(g),e.offset);return}const R=Number(g.at(-1)??0),v=I?Je[R]:Ze[R],O=g.slice(0,-1)+v;t.set(me.encode(O),e.offset);return}const r=a.padEnd(s," ");t.set(me.encode(r),e.offset)}function et(t){const e=t.usage?.toUpperCase();return!e||e==="DISPLAY"?"DISPLAY":e==="COMP-1"?"COMP-1":e==="COMP-2"?"COMP-2":e==="COMP-3"||e==="PACKED-DECIMAL"?"COMP-3":e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"?"BINARY":"DISPLAY"}function un(t,e,n){switch(et(e)){case"DISPLAY":return ln(t,e,n);case"COMP-3":return rn(t,e,n);case"BINARY":return sn(t,e,n)}}function dn(t,e){switch(et(e)){case"DISPLAY":return cn(t,e);case"COMP-3":return on(t,e);case"BINARY":return nn(t,e)}return""}var fn=Y('<div class="field svelte-n1ol00"><!> <input/></div>');function Cn(t,e){k(e,!0);const n=()=>H(_e,"$buffer",s),[s,a]=Ce();let r=mt(e,"tooltipText",3,""),o=q(e,["$$slots","$$events","$$legacy","field","tooltipText"]),i,l=ue(""),I=ue(!1),p=!0;le(()=>{p&&z(l,h(dn(n(),e.field)),!0),p=!0});function f(C){p=!1,Tt(N=>{un(N,e.field,u(E(l)))})}function u(C){return e.field.pic?.type!=="NUMERIC"?C:(e.field.pic?.signed?E(I)?"-":"+":"")+C.replace(/\D/g,"")}function h(C){if(e.field.pic?.type!=="NUMERIC")return C;const N=e.field.pic;if(!N||!C)return C;if(N.type==="NUMERIC"){const B=e.field.byteLength-N.decimals;let G=C.replace(/\D/g,"");if(G.length>B){const _=G.slice(0,B),U=G.slice(-(G.length-B));G=U?`${_}.${U}`:_}return G}return C}function d(C){if(!C.pic)return"";if(C.pic.type==="ALPHA")return"X".repeat(C.byteLength);if(C.pic.type==="NUMERIC"){C.pic.signed;const N=C.pic.decimals??0,G=C.byteLength-N;let _="";return _+="9".repeat(G),N>0&&(_+="."+"9".repeat(N)),_}return""}var P=fn();let D;var y=X(P);{var g=C=>{j(C,{onclick:()=>{z(I,!E(I)),i.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))},muted:!0,children:(N,B)=>{var G=x(),_=b(G);{var U=c=>{Ke(c,{size:16,strokeWidth:3})},re=c=>{Jt(c,{size:16,strokeWidth:3})};ee(_,c=>{E(I)?c(re,-1):c(U)})}m(N,G)},$$slots:{default:!0}})};ee(y,C=>{e.field.pic?.signed&&C(g)})}var R=M(y,2),v=()=>Re.set(e.field),O=()=>Re.set(null);Ot(R,C=>({placeholder:C,oninput:f,onfocus:v,onblur:O,inputmode:e.field.pic?.type==="NUMERIC"?"decimal":"text",maxlength:e.field.byteLength+(e.field.pic?.decimals?1:0),autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off",...o}),[()=>d(e.field)],void 0,void 0,"svelte-n1ol00",!0),Oe(R,C=>i=C,()=>i),Nt(R,()=>ie(r(),"focus")),V(P),ae(()=>D=St(P,"",D,{"flex-basis":`calc(${e.field.byteLength+(e.field.pic?.signed?1:0)}ch + 2.4rem ${e.field.pic?.signed?"+ 2.6rem":""} ${e.field.pic?.decimals?"+ 1.5rem":""})`})),Te(R,()=>E(l),C=>z(l,C)),m(t,P),w(),a()}function In(t){return t()}function pn(t){t.forEach(In)}const Ie=[],we=[],Pe=[],Ue=[],tt=Promise.resolve();let Se=!1;function hn(){Se||(Se=!0,tt.then(Rn))}function Pn(){return hn(),tt}function vn(t){Pe.push(t)}const De=new Set;let pe=0;function Rn(){do{for(;pe<Ie.length;){const t=Ie[pe];pe++,gn(t.$$)}for(Ie.length=0,pe=0;we.length;)we.pop()();for(let t=0;t<Pe.length;t+=1){const e=Pe[t];De.has(e)||(De.add(e),e())}Pe.length=0}while(Ie.length);for(;Ue.length;)Ue.pop()();Se=!1,De.clear()}function gn(t){if(t.fragment!==null){t.update(),pn(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(vn)}}const En={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},J=(t,e)=>new CustomEvent(t,{detail:e});function An(t,e={}){const{root:n,rootMargin:s,threshold:a,unobserveOnEnter:r}=Object.assign(Object.assign({},En),e);let o={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const l=new IntersectionObserver((I,p)=>{I.forEach(f=>{o.y>f.boundingClientRect.y?i.vertical="up":i.vertical="down",o.x>f.boundingClientRect.x?i.horizontal="left":i.horizontal="right",o={y:f.boundingClientRect.y,x:f.boundingClientRect.x};const u={inView:f.isIntersecting,entry:f,scrollDirection:i,node:t,observer:p};t.dispatchEvent(J("inview_change",u)),t.dispatchEvent(J("change",u)),f.isIntersecting?(t.dispatchEvent(J("inview_enter",u)),t.dispatchEvent(J("enter",u)),r&&p.unobserve(t)):(t.dispatchEvent(J("inview_leave",u)),t.dispatchEvent(J("leave",u)))})},{root:n,rootMargin:s,threshold:a});return Pn().then(()=>{t.dispatchEvent(J("inview_init",{observer:l,node:t})),t.dispatchEvent(J("init",{observer:l,node:t}))}),l.observe(t),{destroy(){l.unobserve(t)}}}}var mn=Y('<div><span class="row-index svelte-1c8e44s"></span> <button type="button" class="svelte-1c8e44s"><pre class="svelte-1c8e44s"> </pre></button></div>'),Dn=Y('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span class="svelte-1c8e44s"># Registro</span></div> <!></div></div>');function On(t,e){k(e,!0);const n=()=>H(W,"$currentRecordIndex",o),s=()=>H(Re,"$activeField",o),a=()=>H(_e,"$buffer",o),r=()=>H(fe,"$records",o),[o,i]=Ce();new TextDecoder("ascii");const l=[];let I=[],p,f;function u(){l[n()]?.parentElement?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function h(v){v&&f.scrollTo({left:v.offset*8,behavior:"smooth"})}function d(v){W.set(v)}function P(){const v=Rt(Re);if(!CSS.highlights){console.log("CSS Custom Highlight API not supported.");return}if(CSS.highlights.clear(),!v)return;const O=l[n()]?.querySelector("pre");if(!O)return;const C=O.firstChild;if(C&&C.nodeType===Node.TEXT_NODE){const N=new Range;N.setStart(C,v.offset),N.setEnd(C,v.offset+v.byteLength),p=new Highlight(N),CSS.highlights.set("raw-highlight",p)}}function D(v){return Array.from(v).map(O=>O>=32&&O<=126?String.fromCharCode(O):"·").join("")}le(()=>(I[n()]||u(),h(s()),a(),P(),()=>{}));var y=Dn(),g=X(y),R=M(X(g),2);ge(R,1,r,$e,(v,O,C)=>{var N=mn();let B;var G=X(N);G.textContent=C+1;var _=M(G,2),U=X(_),re=X(U,!0);V(U),V(_),Lt(_,c=>An?.(c)),Oe(_,(c,L)=>l[L]=c,c=>l?.[c],()=>[C]),V(N),ae(c=>{B=Ne(N,1,"table-row svelte-1c8e44s",null,B,{"current-record":n()===C}),ce(re,c)},[()=>D(E(O))]),st("inview_change",_,c=>I[C]=c.detail.inView),ze("click",_,()=>d(C)),m(v,N)}),V(g),V(y),Oe(y,v=>f=v,()=>f),m(t,y),w(),i()}Qe(["click"]);var Nn=Y('<!> <span class="redef-value"> </span> <!>',1);function Sn(t,e){k(e,!1);const n=()=>H(je,"$activeVariant",a),s=()=>H(be,"$model",a),[a,r]=Ce();function o(u,h){const d=n()[u]??u,P=h.indexOf(d),D=h[(P-1+h.length)%h.length];xe(u,D)}function i(u,h){const d=n()[u]??u,P=h.indexOf(d),D=h[(P+1)%h.length];xe(u,D)}function l(u){return s()?qe(s(),n()).some(d=>d.variantPath?.some(P=>P.group===u)):!1}Mt();var I=x(),p=b(I);{var f=u=>{var h=x(),d=b(h);ge(d,1,()=>Object.entries(s().redefineGroups),$e,(P,D)=>{var y=he(()=>gt(E(D),2));let g=()=>E(y)[0],R=()=>E(y)[1];var v=x(),O=b(v);{var C=B=>{ve(B,{children:(G,_)=>{var U=x(),re=b(U);{var c=$=>{var A=Nn(),T=b(A);j(T,{onclick:()=>o(g(),R()),children:(S,Z)=>{qt(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Q=M(T,2),K=X(Q,!0);V(Q);var oe=M(Q,2);j(oe,{onclick:()=>i(g(),R()),children:(S,Z)=>{Kt(S,{size:16,strokeWidth:3})},$$slots:{default:!0}}),ae(()=>ce(K,n()[g()]??g())),m($,A)},L=he(()=>l(g()));ee(re,$=>{E(L)&&$(c)})}m(G,U)},$$slots:{default:!0}})},N=he(()=>R().length>1&&l(g()));ee(O,B=>{E(N)&&B(C)})}m(P,v)}),m(u,h)};ee(p,u=>{s()&&u(f)})}m(t,I),w(),r()}var Tn=Y('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),$n=Y("<!> <!> <!> <!> <!>",1),bn=Y('<div class="muted">Nenhum modelo ativo</div>'),_n=Y('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div><!></div> <!>',1);function Ln(t,e){k(e,!0);const n=()=>H(be,"$model",i),s=()=>H(je,"$activeVariant",i),a=()=>H(W,"$currentRecordIndex",i),r=()=>H(fe,"$records",i),o=()=>H(_e,"$buffer",i),[i,l]=Ce();let I=ue(Et([])),p=ue(1),f="flex";le(()=>(z(I,n()?qe(n(),s()):[],!0),z(p,a()+1),()=>{}));function u(){if(!n())return null;const c=new Uint8Array(n().recordLength);return c.fill(32),c}function h(c){const L=u();L&&(fe.update($=>{const A=$.slice();return A.splice(c+1,0,L),A}),Ae.update($=>{const A=$.slice();return A.splice(c+1,0,{}),A}),W.set(c+1))}function d(c){fe.update(L=>{const $=L.slice(),A=L[c];if(!A)return L;const T=new Uint8Array(A);return $.splice(c+1,0,T),$}),Ae.update(L=>{const $=L.slice();return $.splice(c+1,0,{...L[c]??{}}),$}),W.set(c+1)}function P(c){if(r().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${c+1}?`))return;fe.update(A=>{const T=A.slice();return T.splice(c,1),T}),Ae.update(A=>{const T=A.slice();return T.splice(c,1),T});const $=c>=r().length-1?c-1:c;W.set(Math.max(0,$))}function D(){W.update(c=>Math.max(0,c-1))}function y(){W.update(c=>Math.min(r().length-1,c+1))}function g(){const c=E(p)-1;if(c<0||c>=r().length){z(p,a()+1);return}W.set(c)}var R=_n(),v=M(b(R),2),O=X(v);ve(O,{gap:".1rem",children:(c,L)=>{var $=Tn(),A=M(b($),2);bt(A);let T;var Q=M(A,2),K=X(Q);V(Q),ae(()=>{Xe(A,"max",r().length),Xe(A,"maxlength",r().length),T=Ne(A,1,"svelte-7p234s",null,T,{invalid:E(p)<1||E(p)>r().length}),ce(K,`/ ${r().length??""}`)}),ze("change",A,g),Te(A,()=>E(p),oe=>z(p,oe)),m(c,$)},$$slots:{default:!0}});var C=M(O,2);ve(C,{children:(c,L)=>{var $=$n(),A=b($);j(A,{onclick:D,[de()]:S=>(ie("Ir para linha anterior")||F)(S),children:(S,Z)=>{jt(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var T=M(A,2);j(T,{onclick:()=>h(a()),[de()]:S=>(ie("Adicionar linha")||F)(S),children:(S,Z)=>{Ke(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Q=M(T,2);j(Q,{onclick:y,[de()]:S=>(ie("Ir para a próxima linha")||F)(S),children:(S,Z)=>{Wt(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var K=M(Q,2);j(K,{onclick:()=>d(a()),secondary:!0,[de()]:S=>(ie("Duplicar linha atual")||F)(S),children:(S,Z)=>{Zt(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var oe=M(K,2);j(oe,{onclick:()=>P(a()),danger:!0,[de()]:S=>(ie("Deletar linha atual")||F)(S),children:(S,Z)=>{en(S,{size:16,strokeWidth:3})},$$slots:{default:!0}}),m(c,$)},$$slots:{default:!0}});var N=M(C,2);Sn(N,{}),V(v);var B=M(v,2);Ne(B,1,$t(["form",f]),"svelte-7p234s");var G=X(B);{var _=c=>{var L=bn();m(c,L)},U=c=>{var L=x(),$=b(L);ge($,17,()=>E(I),A=>A.name+":"+A.offset,(A,T)=>{var Q=x(),K=b(Q);{var oe=S=>{{let Z=he(()=>`${E(T).name} : ${E(T).pic?.raw} : [${E(T).offset}..${E(T).offset+E(T).byteLength-1}]`);Cn(S,{get name(){return E(T).name},get field(){return E(T)},get tooltipText(){return E(Z)}})}};ee(K,S=>{S(oe,-1)})}m(A,Q)}),m(c,L)};ee(G,c=>{!n()||!o()?c(_):c(U,-1)})}V(B);var re=M(B,2);On(re,{}),m(t,R),w(),l()}Qe(["change"]);var Mn=Y('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),yn=Y('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function Hn(t){var e=yn();_t("1uha8ag",o=>{var i=Mn();Ye(()=>{At.title="Home"}),m(o,i)});var n=b(e),s=X(n);zt(s,{}),V(n);var a=M(n,2),r=X(a);Ln(r,{}),V(a),m(t,e)}export{Hn as component,Fn as universal};
