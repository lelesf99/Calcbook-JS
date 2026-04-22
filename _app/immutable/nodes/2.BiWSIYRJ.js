import{a as m,f as Y,c as X,t as nt,s as ce,d as Qe,e as st,b as ze}from"../chunks/Bz9pcTi_.js";import{K as rt,d as ot,aL as at,ap as it,h as Ee,aC as ct,aD as Le,g as Me,f as ye,i as lt,au as ut,j as Ye,b as We,c as dt,a4 as ft,u as le,aM as Ct,aN as Be,C as R,aO as It,a0 as pt,aP as ht,p as w,A as F,w as M,n as b,t as ae,o as U,an as Pt,aQ as vt,q as x,v as V,a6 as ue,x as H,a7 as Ce,B as gt,aR as Rt,V as Et,aS as At}from"../chunks/R3T74W7k.js";import{a as Ie,b as k,s as te,r as q,p as mt}from"../chunks/vGbNO2P5.js";import{i as ee,b as Oe}from"../chunks/D0UFlnsV.js";import{k as Ge,P as ve,l as $e,e as Re,B as j,i as Te,h as Dt,m as be,I as ne,s as se,n as Ot,o as Nt,t as ie,p as St,q as _e,u as $t,v as ge,w as W,b as Ne,j as fe,x as Xe,y as je,c as Tt,r as bt,a as xe,g as de,z as Ae}from"../chunks/BKKvytwv.js";function _t(t,e){let n=null,s=Ee;var a;if(Ee){n=lt;for(var r=ut(document.head);r!==null&&(r.nodeType!==ct||r.data!==t);)r=Le(r);if(r===null)Me(!1);else{var o=Le(r);r.remove(),ye(o)}}Ee||(a=document.head.appendChild(rt()));try{ot(()=>e(a),at|it)}finally{s&&(Me(!0),ye(n))}}function Lt(t,e,n){Ye(()=>{var s=We(()=>e(t,n?.())||{});if(s?.destroy)return()=>s.destroy()})}function Mt(t=!1){const e=dt,n=e.l.u;if(!n)return;let s=()=>It(e.s);if(t){let a=0,r={};const o=pt(()=>{let i=!1;const u=e.s;for(const p in u)u[p]!==r[p]&&(r[p]=u[p],i=!0);return i&&a++,a});s=()=>R(o)}n.b.length&&ft(()=>{Ve(e,s),Be(n.b)}),le(()=>{const a=We(()=>n.m.map(Ct));return()=>{for(const r of a)typeof r=="function"&&r()}}),n.a.length&&le(()=>{Ve(e,s),Be(n.a)})}function Ve(t,e){if(t.l.s)for(const n of t.l.s)R(n);e()}const yt=!0,Fn=Object.freeze(Object.defineProperty({__proto__:null,prerender:yt},Symbol.toStringTag,{value:"Module"}));ht();const Bt=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,Gt=/OCCURS\s+(\d+)\s+TIMES/i,Xt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function xt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMP-1"||e==="COMP-2"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function Fe(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function Vt(t){const n=t.split(/\r?\n/).map(r=>r.length>6?r.slice(6):r).map(r=>r.replace(/\r$/,"")).filter(r=>r.trim().length>0).filter(r=>!r.trim().startsWith("*")),s=[];let a="";for(let r=0;r<n.length;r++){const o=n[r],i=o.trimEnd(),u=i.endsWith("-"),p=!i.endsWith(".");u||p?a+=i.replace(/-$/,""):(a+=o,s.push(a.trim()),a="")}return a.trim()&&s.push(a.trim()),s}function Ft(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),a=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:a,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=Fe(s[1]),u=Fe(s[2]);return{raw:t,type:"NUMERIC",length:i+u,decimals:u||void 0,signed:n}}const a=e.split("V"),r=(a[0].match(/9/g)||[]).length,o=a[1]?(a[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:r+o,decimals:o||void 0,signed:n}}}function Ht(t){const e=Vt(t),n=[],s=[];let a=1;for(const r of e){const o=r.trim().split(/\s+/),i=parseInt(o[0],10),u=o[1];if(Number.isNaN(i)||!u)continue;let p=u.replace(/\.$/,"");const C={level:i,name:p,isFiller:p.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},f=r.match(Xt);f&&(C.redefines=f[1].replace(/\.$/,""));const c=r.match(Bt);if(c){const P=Ft(c[2]);P&&(C.pic=P)}const h=r.match(Gt);h&&(C.occurs={times:parseInt(h[1],10)});let d;if(c){const P=r.slice(c.index+c[0].length);let D=P.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);D?d=D[1]:(D=P.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),D&&(d=D[1]))}else{let P=r.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);P||(P=r.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),P&&(d=P[1])}for(d&&(C.usage=xt(d));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?n.push(C):s[s.length-1].children.push(C),s.push(C)}return(function r(o){for(const i of o)i.isFiller&&(i.name=`FILLER-${a++}`),r(i.children)})(n),n}function He(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP-1")return 4;if(e==="COMP-2")return 8;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=n.type==="NUMERIC"?n.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=n.type==="NUMERIC"?n.length:0;return Math.ceil((s+1)/2)}return n.length}function kt(t){const e=new Map;(function f(c){for(const h of c)e.set(h.name,h),f(h.children)})(t);const n={};(function f(c){for(const h of c){if(h.redefines){const d=h.redefines;n[d]||=new Set([d]),n[d].add(h.name)}f(h.children)}})(t);const s={};for(const[f,c]of Object.entries(n))s[f]=Array.from(c);const a={};for(const[f,c]of Object.entries(s))for(const h of c)a[h]=f;const r=f=>{if(f.children.length&&!f.pic&&!f.redefines){let d=0;for(const D of f.children)d+=r(D);const P=f.occurs?.times??1;return d*P}const c=f.pic?He(f):0,h=f.occurs?.times??1;return c*h},o={},i=[];let u=0;const p=[],C=(f,c)=>{let h=c;for(const d of f){let P=h;if(d.redefines){const g=d.redefines;g in o?P=o[g]:console.warn(`REDEFINES base not found yet: ${g}. Ensure base appears before redefiner.`)}d.name in o||(o[d.name]=P);const D=a[d.name];let G=!1;D&&(p.push({group:D,member:d.name}),G=!0);const E=r(d);if(d.children.length&&!d.pic){const g=d.occurs?.times??1,v=g?E/g:E;for(let $=0;$<g;$++)C(d.children,P+$*v)}else{const g=d.occurs?.times??1,v=d.pic?He(d):0;for(let $=0;$<g;$++)i.push({...d,offset:P+$*v,byteLength:v,variantPath:p.length?p.slice():void 0})}G&&p.pop(),d.redefines?u=Math.max(u,P+E):(h+=E,u=Math.max(u,h))}};return C(t,0),{root:t,fieldsFlat:i,recordLength:u,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const ke={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};function wt(t,e=250){let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>t(...s),e)}}var Ut=Y('<span class="err"> </span>'),Qt=Y('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function zt(t,e){w(e,!0);const n=()=>k(be,"$model",s),[s,a]=Ie();let r=ue(""),o=ue("");function i(E){try{const g=kt(Ht(E));Ge(g);const v=new Uint8Array(g.recordLength);v.fill(32),Dt([v]),F(o,"")}catch(g){F(o,g?.message??"Erro ao processar copybook",!0)}}const u=wt(i,300);function p(E){F(r,ke[E]+`
`),i(R(r))}le(()=>{if(!R(r)?.trim()){Ge(null),F(o,"");return}u(R(r))});var C=Qt(),f=M(b(C),2);ve(f,{children:(E,g)=>{var v=X(),$=b(v);Re($,17,()=>Object.keys(ke),Te,(I,O)=>{j(I,{onclick:()=>p(R(O)),children:(y,B)=>{Pt();var _=nt();ae(()=>ce(_,R(O))),m(y,_)},$$slots:{default:!0}})}),m(E,v)},$$slots:{default:!0}});var c=M(f,2);vt(c);var h=M(c,2),d=x(h),P=x(d);V(d);var D=M(d,2);{var G=E=>{var g=Ut(),v=x(g,!0);V(g),ae(()=>ce(v,R(o))),m(E,g)};ee(D,E=>{R(o)&&E(G)})}V(h),ae(()=>ce(P,`len: ${(n()?n().recordLength:"—")??""}`)),$e(c,()=>R(r),E=>F(r,E)),m(t,C),U(),a()}function Yt(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function qe(t,e){return t.fieldsFlat.filter(n=>Yt(n,e))}function Wt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];ne(t,te({name:"arrow-down-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function jt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];ne(t,te({name:"arrow-up-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function qt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];ne(t,te({name:"chevrons-left"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Kt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];ne(t,te({name:"chevrons-right"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Zt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];ne(t,te({name:"copy"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Jt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];ne(t,te({name:"minus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Ke(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ne(t,te({name:"plus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function en(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ne(t,te({name:"trash"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=X(),i=b(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function tn(t,e,n,s=!1){switch(e){case 1:return n?t.getInt8(0):t.getUint8(0);case 2:return n?t.getInt16(0,s):t.getUint16(0,s);case 4:return n?t.getInt32(0,s):t.getUint32(0,s);default:throw new Error("Unsupported binary size")}}function nn(t,e){const n=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),s=e.pic?.signed??!1;return tn(n,e.byteLength,s,!1).toString()}function sn(t,e,n){const s=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),a=Number(n);if(isNaN(a))return;const r=e.pic?.signed??!1;switch(e.byteLength){case 1:r?s.setInt8(0,a):s.setUint8(0,a);break;case 2:r?s.setInt16(0,a,!1):s.setUint16(0,a,!1);break;case 4:r?s.setInt32(0,a,!1):s.setUint32(0,a,!1);break}}function rn(t,e,n){const s=e.byteLength,a=!!e.pic?.signed;let r=!1,o=n;a&&(n[0]==="-"&&(r=!0),o=n.slice(1));const i=s*2-1,u=o.padStart(i,"0");let p=u.length-1;for(let C=s-1;C>=0;C--){let f,c;C===s-1?(f=Number(u[p--]),c=r?13:12):(c=Number(u[p--]),f=Number(u[p--])),t[e.offset+C]=f<<4|c}}function on(t,e){const n=e.byteLength,s=!!e.pic?.signed;let a="",r=!1;for(let o=e.offset;o<e.offset+n;o++){const i=t[o],u=i>>4&15,p=i&15;o===e.offset+n-1?(p===13&&(r=!0),a+=u.toString()):a+=u.toString()+p.toString()}return s?(r?"-":"+")+a:a}const me=new TextEncoder,an=new TextDecoder("ascii"),Ze=["{","A","B","C","D","E","F","G","H","I"],Je=["}","J","K","L","M","N","O","P","Q","R"];function cn(t,e){const n=t.buffer.slice(e.offset,e.offset+e.byteLength),s=an.decode(n);if(e.pic?.type==="NUMERIC"){const a=!!e.pic.signed,r=e.pic.decimals??0;let o=s;if(a){const i=s.at(-1),u=Ze.indexOf(i),p=Je.indexOf(i);u>=0?o=s.slice(0,-1)+u:p>=0&&(o=s.slice(0,-1)+p)}if(o.trim()==="")return"";if(r>0){const i=o.slice(0,-r),u=o.slice(-r);return`${i}.${u}`}return`${o}`}return s.replace(/[\u0000 ]+$/g,"")}function ln(t,e,n){const s=e.byteLength,a=String(n);if(console.log(`raw: ${a}`),e.pic?.type==="NUMERIC"){const o=!!e.pic.signed,i=e.pic.decimals??0,u=a.replace(",",".");console.log(`normalized: ${u}`);let p=!1,C=u;o&&/^[+-]/.test(C)&&(p=C[0]==="-",C=C.slice(1)),console.log(`numeric: ${C}`);const[f="",c=""]=C.split(".");console.log(`iRaw: ${f}`,`dRaw: ${c}`);const h=f.replace(/\D/g,""),d=c.replace(/\D/g,""),P=s,D=i,G=P-D,E=h.padStart(G," ")+d.padEnd(D," ");if(!o){t.set(me.encode(E),e.offset);return}const g=Number(E.at(-1)??0),v=p?Je[g]:Ze[g],$=E.slice(0,-1)+v;t.set(me.encode($),e.offset);return}const r=a.padEnd(s," ");t.set(me.encode(r),e.offset)}function et(t){const e=t.usage?.toUpperCase();return!e||e==="DISPLAY"?"DISPLAY":e==="COMP-1"?"COMP-1":e==="COMP-2"?"COMP-2":e==="COMP-3"||e==="PACKED-DECIMAL"?"COMP-3":e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"?"BINARY":"DISPLAY"}function un(t,e,n){switch(et(e)){case"DISPLAY":return ln(t,e,n);case"COMP-3":return rn(t,e,n);case"BINARY":return sn(t,e,n)}}function dn(t,e){switch(et(e)){case"DISPLAY":return cn(t,e);case"COMP-3":return on(t,e);case"BINARY":return nn(t,e)}return""}var fn=Y('<div class="field svelte-n1ol00"><!> <input/></div>');function Cn(t,e){w(e,!0);const n=()=>k(_e,"$buffer",s),[s,a]=Ie();let r=mt(e,"tooltipText",3,""),o=q(e,["$$slots","$$events","$$legacy","field","tooltipText"]),i,u=ue(""),p=Ce(()=>h(R(u))),C=ue(!1);le(()=>{F(u,h(dn(n(),e.field)),!0)});function f(I){e.field.pic?.type==="NUMERIC"&&F(u,I.target.value,!0),$t(O=>{un(O,e.field,c(R(u)))})}function c(I){return console.log(`parsing: ${I}`),(e.field.pic?.signed?R(C)?"-":"+":"")+I.replace(/\D/g,"")}function h(I){const O=e.field.pic;if(!O||!I)return I;if(O.type==="NUMERIC"){const y=e.field.byteLength-O.decimals;let B=I.replace(/\D/g,"");if(B.length>y){const _=B.slice(0,y),Q=B.slice(-(B.length-y));console.log(-Math.max(0,B.length-y)),B=Q?`${_}.${Q}`:_}return B}return I}function d(I){if(!I.pic)return"";if(I.pic.type==="ALPHA")return"X".repeat(I.byteLength);if(I.pic.type==="NUMERIC"){I.pic.signed;const O=I.pic.decimals??0,B=I.byteLength-O;let _="";return _+="9".repeat(B),O>0&&(_+="."+"9".repeat(O)),_}return""}var P=fn();let D;var G=x(P);{var E=I=>{j(I,{onclick:()=>{F(C,!R(C)),i.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))},muted:!0,children:(O,y)=>{var B=X(),_=b(B);{var Q=l=>{Ke(l,{size:16,strokeWidth:3})},re=l=>{Jt(l,{size:16,strokeWidth:3})};ee(_,l=>{R(C)?l(re,-1):l(Q)})}m(O,B)},$$slots:{default:!0}})};ee(G,I=>{e.field.pic?.signed&&I(E)})}var g=M(G,2),v=()=>ge.set(e.field),$=()=>ge.set(null);Ot(g,I=>({placeholder:I,oninput:f,onfocus:v,onblur:$,inputmode:e.field.pic?.type==="NUMERIC"?"decimal":"text",maxlength:e.field.byteLength+(e.field.pic?.decimals?1:0),autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off",...o}),[()=>d(e.field)],void 0,void 0,"svelte-n1ol00",!0),Oe(g,I=>i=I,()=>i),Nt(g,()=>ie(r(),"focus")),V(P),ae(()=>D=St(P,"",D,{"flex-basis":`calc(${e.field.byteLength+(e.field.pic?.signed?1:0)}ch + 2.4rem ${e.field.pic?.signed?"+ 2.6rem":""} ${e.field.pic?.decimals?"+ 1.5rem":""})`})),$e(g,()=>R(p),I=>F(p,I)),m(t,P),U(),a()}function In(t){return t()}function pn(t){t.forEach(In)}const pe=[],we=[],Pe=[],Ue=[],tt=Promise.resolve();let Se=!1;function hn(){Se||(Se=!0,tt.then(gn))}function Pn(){return hn(),tt}function vn(t){Pe.push(t)}const De=new Set;let he=0;function gn(){do{for(;he<pe.length;){const t=pe[he];he++,Rn(t.$$)}for(pe.length=0,he=0;we.length;)we.pop()();for(let t=0;t<Pe.length;t+=1){const e=Pe[t];De.has(e)||(De.add(e),e())}Pe.length=0}while(pe.length);for(;Ue.length;)Ue.pop()();Se=!1,De.clear()}function Rn(t){if(t.fragment!==null){t.update(),pn(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(vn)}}const En={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},J=(t,e)=>new CustomEvent(t,{detail:e});function An(t,e={}){const{root:n,rootMargin:s,threshold:a,unobserveOnEnter:r}=Object.assign(Object.assign({},En),e);let o={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const u=new IntersectionObserver((p,C)=>{p.forEach(f=>{o.y>f.boundingClientRect.y?i.vertical="up":i.vertical="down",o.x>f.boundingClientRect.x?i.horizontal="left":i.horizontal="right",o={y:f.boundingClientRect.y,x:f.boundingClientRect.x};const c={inView:f.isIntersecting,entry:f,scrollDirection:i,node:t,observer:C};t.dispatchEvent(J("inview_change",c)),t.dispatchEvent(J("change",c)),f.isIntersecting?(t.dispatchEvent(J("inview_enter",c)),t.dispatchEvent(J("enter",c)),r&&C.unobserve(t)):(t.dispatchEvent(J("inview_leave",c)),t.dispatchEvent(J("leave",c)))})},{root:n,rootMargin:s,threshold:a});return Pn().then(()=>{t.dispatchEvent(J("inview_init",{observer:u,node:t})),t.dispatchEvent(J("init",{observer:u,node:t}))}),u.observe(t),{destroy(){u.unobserve(t)}}}}var mn=Y('<div><span class="row-index svelte-1c8e44s"></span> <button type="button" class="svelte-1c8e44s"><pre class="svelte-1c8e44s"> </pre></button></div>'),Dn=Y('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span class="svelte-1c8e44s"># Registro</span></div> <!></div></div>');function On(t,e){w(e,!0);const n=()=>k(W,"$currentRecordIndex",o),s=()=>k(ge,"$activeField",o),a=()=>k(_e,"$buffer",o),r=()=>k(fe,"$records",o),[o,i]=Ie(),u=new TextDecoder("ascii"),p=[];let C=[],f,c;function h(){p[n()]?.parentElement?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function d(v){v&&c.scrollTo({left:v.offset*8,behavior:"smooth"})}function P(v){W.set(v)}function D(){const v=gt(ge);if(!CSS.highlights){console.log("CSS Custom Highlight API not supported.");return}if(CSS.highlights.clear(),!v)return;const $=p[n()]?.querySelector("pre");if(!$)return;const I=$.firstChild;if(I&&I.nodeType===Node.TEXT_NODE){const O=new Range;O.setStart(I,v.offset),O.setEnd(I,v.offset+v.byteLength),f=new Highlight(O),CSS.highlights.set("raw-highlight",f)}}le(()=>(C[n()]||h(),d(s()),a(),D(),()=>{}));var G=Dn(),E=x(G),g=M(x(E),2);Re(g,1,r,Te,(v,$,I)=>{var O=mn();let y;var B=x(O);B.textContent=I+1;var _=M(B,2),Q=x(_),re=x(Q,!0);V(Q),V(_),Lt(_,l=>An?.(l)),Oe(_,(l,L)=>p[L]=l,l=>p?.[l],()=>[I]),V(O),ae(l=>{y=Ne(O,1,"table-row svelte-1c8e44s",null,y,{"current-record":n()===I}),ce(re,l)},[()=>u.decode(R($))]),st("inview_change",_,l=>C[I]=l.detail.inView),ze("click",_,()=>P(I)),m(v,O)}),V(E),V(G),Oe(G,v=>c=v,()=>c),m(t,G),U(),i()}Qe(["click"]);var Nn=Y('<!> <span class="redef-value"> </span> <!>',1);function Sn(t,e){w(e,!1);const n=()=>k(je,"$activeVariant",a),s=()=>k(be,"$model",a),[a,r]=Ie();function o(c,h){const d=n()[c]??c,P=h.indexOf(d),D=h[(P-1+h.length)%h.length];Xe(c,D)}function i(c,h){const d=n()[c]??c,P=h.indexOf(d),D=h[(P+1)%h.length];Xe(c,D)}function u(c){return s()?qe(s(),n()).some(d=>d.variantPath?.some(P=>P.group===c)):!1}Mt();var p=X(),C=b(p);{var f=c=>{var h=X(),d=b(h);Re(d,1,()=>Object.entries(s().redefineGroups),Te,(P,D)=>{var G=Ce(()=>Rt(R(D),2));let E=()=>R(G)[0],g=()=>R(G)[1];var v=X(),$=b(v);{var I=y=>{ve(y,{children:(B,_)=>{var Q=X(),re=b(Q);{var l=T=>{var A=Nn(),S=b(A);j(S,{onclick:()=>o(E(),g()),children:(N,Z)=>{qt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var z=M(S,2),K=x(z,!0);V(z);var oe=M(z,2);j(oe,{onclick:()=>i(E(),g()),children:(N,Z)=>{Kt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}}),ae(()=>ce(K,n()[E()]??E())),m(T,A)},L=Ce(()=>u(E()));ee(re,T=>{R(L)&&T(l)})}m(B,Q)},$$slots:{default:!0}})},O=Ce(()=>g().length>1&&u(E()));ee($,y=>{R(O)&&y(I)})}m(P,v)}),m(c,h)};ee(C,c=>{s()&&c(f)})}m(t,p),U(),r()}var $n=Y('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),Tn=Y("<!> <!> <!> <!> <!>",1),bn=Y('<div class="muted">Nenhum modelo ativo</div>'),_n=Y('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div><!></div> <!>',1);function Ln(t,e){w(e,!0);const n=()=>k(be,"$model",i),s=()=>k(je,"$activeVariant",i),a=()=>k(W,"$currentRecordIndex",i),r=()=>k(fe,"$records",i),o=()=>k(_e,"$buffer",i),[i,u]=Ie();let p=ue(Et([])),C=ue(1),f="flex";le(()=>(F(p,n()?qe(n(),s()):[],!0),F(C,a()+1),()=>{}));function c(){if(!n())return null;const l=new Uint8Array(n().recordLength);return l.fill(32),l}function h(l){const L=c();L&&(fe.update(T=>{const A=T.slice();return A.splice(l+1,0,L),A}),Ae.update(T=>{const A=T.slice();return A.splice(l+1,0,{}),A}),W.set(l+1))}function d(l){fe.update(L=>{const T=L.slice(),A=L[l];if(!A)return L;const S=new Uint8Array(A);return T.splice(l+1,0,S),T}),Ae.update(L=>{const T=L.slice();return T.splice(l+1,0,{...L[l]??{}}),T}),W.set(l+1)}function P(l){if(r().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${l+1}?`))return;fe.update(A=>{const S=A.slice();return S.splice(l,1),S}),Ae.update(A=>{const S=A.slice();return S.splice(l,1),S});const T=l>=r().length-1?l-1:l;W.set(Math.max(0,T))}function D(){W.update(l=>Math.max(0,l-1))}function G(){W.update(l=>Math.min(r().length-1,l+1))}function E(){const l=R(C)-1;if(l<0||l>=r().length){F(C,a()+1);return}W.set(l)}var g=_n(),v=M(b(g),2),$=x(v);ve($,{gap:".1rem",children:(l,L)=>{var T=$n(),A=M(b(T),2);bt(A);let S;var z=M(A,2),K=x(z);V(z),ae(()=>{xe(A,"max",r().length),xe(A,"maxlength",r().length),S=Ne(A,1,"svelte-7p234s",null,S,{invalid:R(C)<1||R(C)>r().length}),ce(K,`/ ${r().length??""}`)}),ze("change",A,E),$e(A,()=>R(C),oe=>F(C,oe)),m(l,T)},$$slots:{default:!0}});var I=M($,2);ve(I,{children:(l,L)=>{var T=Tn(),A=b(T);j(A,{onclick:D,[de()]:N=>(ie("Ir para linha anterior")||H)(N),children:(N,Z)=>{jt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var S=M(A,2);j(S,{onclick:()=>h(a()),[de()]:N=>(ie("Adicionar linha")||H)(N),children:(N,Z)=>{Ke(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var z=M(S,2);j(z,{onclick:G,[de()]:N=>(ie("Ir para a próxima linha")||H)(N),children:(N,Z)=>{Wt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var K=M(z,2);j(K,{onclick:()=>d(a()),secondary:!0,[de()]:N=>(ie("Duplicar linha atual")||H)(N),children:(N,Z)=>{Zt(N,{size:16,strokeWidth:3})},$$slots:{default:!0}});var oe=M(K,2);j(oe,{onclick:()=>P(a()),danger:!0,[de()]:N=>(ie("Deletar linha atual")||H)(N),children:(N,Z)=>{en(N,{size:16,strokeWidth:3})},$$slots:{default:!0}}),m(l,T)},$$slots:{default:!0}});var O=M(I,2);Sn(O,{}),V(v);var y=M(v,2);Ne(y,1,Tt(["form",f]),"svelte-7p234s");var B=x(y);{var _=l=>{var L=bn();m(l,L)},Q=l=>{var L=X(),T=b(L);Re(T,17,()=>R(p),A=>A.name+":"+A.offset,(A,S)=>{var z=X(),K=b(z);{var oe=N=>{{let Z=Ce(()=>`${R(S).name} : ${R(S).pic?.raw} : [${R(S).offset}..${R(S).offset+R(S).byteLength-1}]`);Cn(N,{get name(){return R(S).name},get field(){return R(S)},get tooltipText(){return R(Z)}})}};ee(K,N=>{N(oe,-1)})}m(A,z)}),m(l,L)};ee(B,l=>{!n()||!o()?l(_):l(Q,-1)})}V(y);var re=M(y,2);On(re,{}),m(t,g),U(),u()}Qe(["change"]);var Mn=Y('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),yn=Y('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function Hn(t){var e=yn();_t("1uha8ag",o=>{var i=Mn();Ye(()=>{At.title="Home"}),m(o,i)});var n=b(e),s=x(n);zt(s,{}),V(n);var a=M(n,2),r=x(a);Ln(r,{}),V(a),m(t,e)}export{Hn as component,Fn as universal};
