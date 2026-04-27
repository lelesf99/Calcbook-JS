import{a as m,f as z,c as B,t as nt,s as ie,d as Qe,e as st,b as ze}from"../chunks/Bz9pcTi_.js";import{K as rt,d as ot,aL as at,ap as it,h as Ee,aC as ct,aD as Le,g as Me,f as ye,i as lt,au as ut,j as Ye,b as We,c as dt,a4 as ft,u as fe,aM as Ct,aN as Be,C as R,aO as It,a0 as pt,aP as ht,p as w,A as F,w as b,n as $,t as oe,o as U,an as Pt,aQ as vt,q as G,v as x,a6 as ce,x as H,B as Rt,a7 as he,aR as gt,V as Et,aS as At}from"../chunks/R3T74W7k.js";import{a as Ce,b as k,s as te,r as q,p as mt}from"../chunks/vGbNO2P5.js";import{i as ee,b as Oe}from"../chunks/D0UFlnsV.js";import{k as Ge,P as ve,l as $e,e as ge,B as j,i as Te,h as Dt,m as _e,I as ne,s as se,n as Ot,o as Nt,t as ae,p as St,q as be,u as $t,v as Re,w as W,b as Ne,j as de,x as xe,y as je,c as Tt,r as _t,a as Xe,g as ue,z as Ae}from"../chunks/BKKvytwv.js";import{o as bt}from"../chunks/BEDde3Uw.js";function Lt(t,e){let n=null,s=Ee;var a;if(Ee){n=lt;for(var r=ut(document.head);r!==null&&(r.nodeType!==ct||r.data!==t);)r=Le(r);if(r===null)Me(!1);else{var o=Le(r);r.remove(),ye(o)}}Ee||(a=document.head.appendChild(rt()));try{ot(()=>e(a),at|it)}finally{s&&(Me(!0),ye(n))}}function Mt(t,e,n){Ye(()=>{var s=We(()=>e(t,n?.())||{});if(s?.destroy)return()=>s.destroy()})}function yt(t=!1){const e=dt,n=e.l.u;if(!n)return;let s=()=>It(e.s);if(t){let a=0,r={};const o=pt(()=>{let i=!1;const l=e.s;for(const p in l)l[p]!==r[p]&&(r[p]=l[p],i=!0);return i&&a++,a});s=()=>R(o)}n.b.length&&ft(()=>{Ve(e,s),Be(n.b)}),fe(()=>{const a=We(()=>n.m.map(Ct));return()=>{for(const r of a)typeof r=="function"&&r()}}),n.a.length&&fe(()=>{Ve(e,s),Be(n.a)})}function Ve(t,e){if(t.l.s)for(const n of t.l.s)R(n);e()}const Bt=!0,kn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Bt},Symbol.toStringTag,{value:"Module"}));ht();const Gt=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,xt=/OCCURS\s+(\d+)\s+TIMES/i,Xt=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function Vt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMP-1"||e==="COMP-2"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function Fe(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function Ft(t){const n=t.split(/\r?\n/).map(r=>r.length>6?r.slice(6):r).map(r=>r.replace(/\r$/,"")).filter(r=>r.trim().length>0).filter(r=>!r.trim().startsWith("*")),s=[];let a="";for(let r=0;r<n.length;r++){const o=n[r],i=o.trimEnd(),l=i.endsWith("-"),p=!i.endsWith(".");l||p?a+=i.replace(/-$/,""):(a+=o,s.push(a.trim()),a="")}return a.trim()&&s.push(a.trim()),s}function Ht(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),a=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:a,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=Fe(s[1]),l=Fe(s[2]);return{raw:t,type:"NUMERIC",length:i+l,decimals:l||void 0,signed:n}}const a=e.split("V"),r=(a[0].match(/9/g)||[]).length,o=a[1]?(a[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:r+o,decimals:o||void 0,signed:n}}}function kt(t){const e=Ft(t),n=[],s=[];let a=1;for(const r of e){const o=r.trim().split(/\s+/),i=parseInt(o[0],10),l=o[1];if(Number.isNaN(i)||!l)continue;let p=l.replace(/\.$/,"");const h={level:i,name:p,isFiller:p.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},C=r.match(Xt);C&&(h.redefines=C[1].replace(/\.$/,""));const u=r.match(Gt);if(u){const P=Ht(u[2]);P&&(h.pic=P)}const I=r.match(xt);I&&(h.occurs={times:parseInt(I[1],10)});let d;if(u){const P=r.slice(u.index+u[0].length);let D=P.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);D?d=D[1]:(D=P.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),D&&(d=D[1]))}else{let P=r.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);P||(P=r.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),P&&(d=P[1])}for(d&&(h.usage=Vt(d));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?n.push(h):s[s.length-1].children.push(h),s.push(h)}return(function r(o){for(const i of o)i.isFiller&&(i.name=`FILLER-${a++}`),r(i.children)})(n),n}function He(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP-1")return 4;if(e==="COMP-2")return 8;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=n.type==="NUMERIC"?n.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=n.type==="NUMERIC"?n.length:0;return Math.ceil((s+1)/2)}return n.length}function wt(t){const e=new Map;(function C(u){for(const I of u)e.set(I.name,I),C(I.children)})(t);const n={};(function C(u){for(const I of u){if(I.redefines){const d=I.redefines;n[d]||=new Set([d]),n[d].add(I.name)}C(I.children)}})(t);const s={};for(const[C,u]of Object.entries(n))s[C]=Array.from(u);const a={};for(const[C,u]of Object.entries(s))for(const I of u)a[I]=C;const r=C=>{if(C.children.length&&!C.pic&&!C.redefines){let d=0;for(const D of C.children)d+=r(D);const P=C.occurs?.times??1;return d*P}const u=C.pic?He(C):0,I=C.occurs?.times??1;return u*I},o={},i=[];let l=0;const p=[],h=(C,u)=>{let I=u;for(const d of C){let P=I;if(d.redefines){const g=d.redefines;g in o?P=o[g]:console.warn(`REDEFINES base not found yet: ${g}. Ensure base appears before redefiner.`)}d.name in o||(o[d.name]=P);const D=a[d.name];let T=!1;D&&(p.push({group:D,member:d.name}),T=!0);const v=r(d);if(d.children.length&&!d.pic){const g=d.occurs?.times??1,c=g?v/g:v;for(let E=0;E<g;E++)h(d.children,P+E*c)}else{const g=d.occurs?.times??1,c=d.pic?He(d):0;for(let E=0;E<g;E++)i.push({...d,offset:P+E*c,byteLength:c,variantPath:p.length?p.slice():void 0})}T&&p.pop(),d.redefines?l=Math.max(l,P+v):(I+=v,l=Math.max(l,I))}};return h(t,0),{root:t,fieldsFlat:i,recordLength:l,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const ke={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};function Ut(t,e=250){let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>t(...s),e)}}var Qt=z('<span class="err"> </span>'),zt=z('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function Yt(t,e){w(e,!0);const n=()=>k(_e,"$model",s),[s,a]=Ce();let r=ce(""),o=ce("");function i(v){try{const g=wt(kt(v));Ge(g);const c=new Uint8Array(g.recordLength);c.fill(32),Dt([c]),F(o,"")}catch(g){F(o,g?.message??"Erro ao processar copybook",!0)}}const l=Ut(i,300);function p(v){F(r,ke[v]+`
`),i(R(r))}fe(()=>{if(!R(r)?.trim()){Ge(null),F(o,"");return}l(R(r))});var h=zt(),C=b($(h),2);ve(C,{children:(v,g)=>{var c=B(),E=$(c);ge(E,17,()=>Object.keys(ke),Te,(M,L)=>{j(M,{onclick:()=>p(R(L)),children:(y,Y)=>{Pt();var X=nt();oe(()=>ie(X,R(L))),m(y,X)},$$slots:{default:!0}})}),m(v,c)},$$slots:{default:!0}});var u=b(C,2);vt(u);var I=b(u,2),d=G(I),P=G(d);x(d);var D=b(d,2);{var T=v=>{var g=Qt(),c=G(g,!0);x(g),oe(()=>ie(c,R(o))),m(v,g)};ee(D,v=>{R(o)&&v(T)})}x(I),oe(()=>ie(P,`len: ${(n()?n().recordLength:"—")??""}`)),$e(u,()=>R(r),v=>F(r,v)),m(t,h),U(),a()}function Wt(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function qe(t,e){return t.fieldsFlat.filter(n=>Wt(n,e))}function jt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];ne(t,te({name:"arrow-down-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function qt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];ne(t,te({name:"arrow-up-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Kt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];ne(t,te({name:"chevrons-left"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Zt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];ne(t,te({name:"chevrons-right"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Jt(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];ne(t,te({name:"copy"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function en(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];ne(t,te({name:"minus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function Ke(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ne(t,te({name:"plus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function tn(t,e){w(e,!0);let n=q(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ne(t,te({name:"trash"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=B(),i=$(o);se(i,()=>e.children??H),m(a,o)},$$slots:{default:!0}})),U()}function nn(t,e,n,s=!1){switch(e){case 1:return n?t.getInt8(0):t.getUint8(0);case 2:return n?t.getInt16(0,s):t.getUint16(0,s);case 4:return n?t.getInt32(0,s):t.getUint32(0,s);default:throw new Error("Unsupported binary size")}}function sn(t,e){const n=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),s=e.pic?.signed??!1;return nn(n,e.byteLength,s,!1).toString()}function rn(t,e,n){const s=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),a=Number(n);if(isNaN(a))return;const r=e.pic?.signed??!1;switch(e.byteLength){case 1:r?s.setInt8(0,a):s.setUint8(0,a);break;case 2:r?s.setInt16(0,a,!1):s.setUint16(0,a,!1);break;case 4:r?s.setInt32(0,a,!1):s.setUint32(0,a,!1);break}}function on(t,e,n){const s=e.byteLength,a=!!e.pic?.signed;let r=!1,o=n;a&&(n[0]==="-"&&(r=!0),o=n.slice(1));const i=s*2-1,l=o.padStart(i,"0");let p=l.length-1;for(let h=s-1;h>=0;h--){let C,u;h===s-1?(C=Number(l[p--]),u=r?13:12):(u=Number(l[p--]),C=Number(l[p--])),t[e.offset+h]=C<<4|u}}function an(t,e){const n=e.byteLength,s=!!e.pic?.signed;let a="",r=!1;for(let o=e.offset;o<e.offset+n;o++){const i=t[o],l=i>>4&15,p=i&15;o===e.offset+n-1?(p===13&&(r=!0),a+=l.toString()):a+=l.toString()+p.toString()}return s?(r?"-":"+")+a:a}const me=new TextEncoder,cn=new TextDecoder("ascii"),Ze=["{","A","B","C","D","E","F","G","H","I"],Je=["}","J","K","L","M","N","O","P","Q","R"];function ln(t,e){const n=t.buffer.slice(e.offset,e.offset+e.byteLength),s=cn.decode(n);if(e.pic?.type==="NUMERIC"){const a=!!e.pic.signed,r=e.pic.decimals??0;let o=s;if(a){const i=s.at(-1),l=Ze.indexOf(i),p=Je.indexOf(i);l>=0?o=s.slice(0,-1)+l:p>=0&&(o=s.slice(0,-1)+p)}if(o.trim()==="")return"";if(r>0){const i=o.slice(0,-r),l=o.slice(-r);return`${i}.${l}`}return`${o}`}return s.replace(/[\u0000 ]+$/g,"")}function un(t,e,n){const s=e.byteLength,a=String(n);if(console.log(`raw: ${a}`),e.pic?.type==="NUMERIC"){const o=!!e.pic.signed,i=e.pic.decimals??0,l=a.replace(",",".");console.log(`normalized: ${l}`);let p=!1,h=l;o&&/^[+-]/.test(h)&&(p=h[0]==="-",h=h.slice(1)),console.log(`numeric: ${h}`);const[C="",u=""]=h.split(".");console.log(`iRaw: ${C}`,`dRaw: ${u}`);const I=C.replace(/\D/g,""),d=u.replace(/\D/g,""),P=s,D=i,T=P-D,v=I.padStart(T," ")+d.padEnd(D," ");if(!o){t.set(me.encode(v),e.offset);return}const g=Number(v.at(-1)??0),c=p?Je[g]:Ze[g],E=v.slice(0,-1)+c;t.set(me.encode(E),e.offset);return}const r=a.padEnd(s," ");t.set(me.encode(r),e.offset)}function et(t){const e=t.usage?.toUpperCase();return!e||e==="DISPLAY"?"DISPLAY":e==="COMP-1"?"COMP-1":e==="COMP-2"?"COMP-2":e==="COMP-3"||e==="PACKED-DECIMAL"?"COMP-3":e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"?"BINARY":"DISPLAY"}function dn(t,e,n){switch(et(e)){case"DISPLAY":return un(t,e,n);case"COMP-3":return on(t,e,n);case"BINARY":return rn(t,e,n)}}function fn(t,e){switch(et(e)){case"DISPLAY":return ln(t,e);case"COMP-3":return an(t,e);case"BINARY":return sn(t,e)}return""}var Cn=z('<div class="field svelte-n1ol00"><!> <input/></div>');function In(t,e){w(e,!0);const n=()=>k(be,"$buffer",s),[s,a]=Ce();let r=mt(e,"tooltipText",3,""),o=q(e,["$$slots","$$events","$$legacy","field","tooltipText"]),i,l=ce(""),p=ce(!1);bt(()=>{F(l,fn(n(),e.field),!0)});function h(c){e.field.pic?.type==="NUMERIC"&&F(l,c.target.value,!0),$t(E=>{dn(E,e.field,C(R(l)))})}function C(c){return console.log(`parsing: ${c}`),(e.field.pic?.signed?R(p)?"-":"+":"")+c.replace(/\D/g,"")}function u(c){if(!c.pic)return"";if(c.pic.type==="ALPHA")return"X".repeat(c.byteLength);if(c.pic.type==="NUMERIC"){c.pic.signed;const E=c.pic.decimals??0,L=c.byteLength-E;let y="";return y+="9".repeat(L),E>0&&(y+="."+"9".repeat(E)),y}return""}var I=Cn();let d;var P=G(I);{var D=c=>{j(c,{onclick:()=>{F(p,!R(p)),i.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))},muted:!0,children:(E,M)=>{var L=B(),y=$(L);{var Y=V=>{Ke(V,{size:16,strokeWidth:3})},X=V=>{en(V,{size:16,strokeWidth:3})};ee(y,V=>{R(p)?V(X,-1):V(Y)})}m(E,L)},$$slots:{default:!0}})};ee(P,c=>{e.field.pic?.signed&&c(D)})}var T=b(P,2),v=()=>Re.set(e.field),g=()=>Re.set(null);Ot(T,c=>({placeholder:c,oninput:h,onfocus:v,onblur:g,inputmode:e.field.pic?.type==="NUMERIC"?"decimal":"text",maxlength:e.field.byteLength+(e.field.pic?.decimals?1:0),autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off",...o}),[()=>u(e.field)],void 0,void 0,"svelte-n1ol00",!0),Oe(T,c=>i=c,()=>i),Nt(T,()=>ae(r(),"focus")),x(I),oe(()=>d=St(I,"",d,{"flex-basis":`calc(${e.field.byteLength+(e.field.pic?.signed?1:0)}ch + 2.4rem ${e.field.pic?.signed?"+ 2.6rem":""} ${e.field.pic?.decimals?"+ 1.5rem":""})`})),$e(T,()=>R(l),c=>F(l,c)),m(t,I),U(),a()}function pn(t){return t()}function hn(t){t.forEach(pn)}const Ie=[],we=[],Pe=[],Ue=[],tt=Promise.resolve();let Se=!1;function Pn(){Se||(Se=!0,tt.then(gn))}function vn(){return Pn(),tt}function Rn(t){Pe.push(t)}const De=new Set;let pe=0;function gn(){do{for(;pe<Ie.length;){const t=Ie[pe];pe++,En(t.$$)}for(Ie.length=0,pe=0;we.length;)we.pop()();for(let t=0;t<Pe.length;t+=1){const e=Pe[t];De.has(e)||(De.add(e),e())}Pe.length=0}while(Ie.length);for(;Ue.length;)Ue.pop()();Se=!1,De.clear()}function En(t){if(t.fragment!==null){t.update(),hn(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Rn)}}const An={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},J=(t,e)=>new CustomEvent(t,{detail:e});function mn(t,e={}){const{root:n,rootMargin:s,threshold:a,unobserveOnEnter:r}=Object.assign(Object.assign({},An),e);let o={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const l=new IntersectionObserver((p,h)=>{p.forEach(C=>{o.y>C.boundingClientRect.y?i.vertical="up":i.vertical="down",o.x>C.boundingClientRect.x?i.horizontal="left":i.horizontal="right",o={y:C.boundingClientRect.y,x:C.boundingClientRect.x};const u={inView:C.isIntersecting,entry:C,scrollDirection:i,node:t,observer:h};t.dispatchEvent(J("inview_change",u)),t.dispatchEvent(J("change",u)),C.isIntersecting?(t.dispatchEvent(J("inview_enter",u)),t.dispatchEvent(J("enter",u)),r&&h.unobserve(t)):(t.dispatchEvent(J("inview_leave",u)),t.dispatchEvent(J("leave",u)))})},{root:n,rootMargin:s,threshold:a});return vn().then(()=>{t.dispatchEvent(J("inview_init",{observer:l,node:t})),t.dispatchEvent(J("init",{observer:l,node:t}))}),l.observe(t),{destroy(){l.unobserve(t)}}}}var Dn=z('<div><span class="row-index svelte-1c8e44s"></span> <button type="button" class="svelte-1c8e44s"><pre class="svelte-1c8e44s"> </pre></button></div>'),On=z('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span class="svelte-1c8e44s"># Registro</span></div> <!></div></div>');function Nn(t,e){w(e,!0);const n=()=>k(W,"$currentRecordIndex",o),s=()=>k(Re,"$activeField",o),a=()=>k(be,"$buffer",o),r=()=>k(de,"$records",o),[o,i]=Ce();new TextDecoder("ascii");const l=[];let p=[],h,C;function u(){l[n()]?.parentElement?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function I(c){c&&C.scrollTo({left:c.offset*8,behavior:"smooth"})}function d(c){W.set(c)}function P(){const c=Rt(Re);if(!CSS.highlights){console.log("CSS Custom Highlight API not supported.");return}if(CSS.highlights.clear(),!c)return;const E=l[n()]?.querySelector("pre");if(!E)return;const M=E.firstChild;if(M&&M.nodeType===Node.TEXT_NODE){const L=new Range;L.setStart(M,c.offset),L.setEnd(M,c.offset+c.byteLength),h=new Highlight(L),CSS.highlights.set("raw-highlight",h)}}function D(c){return Array.from(c).map(E=>E>=32&&E<=126?String.fromCharCode(E):"·").join("")}fe(()=>(p[n()]||u(),I(s()),a(),P(),()=>{}));var T=On(),v=G(T),g=b(G(v),2);ge(g,1,r,Te,(c,E,M)=>{var L=Dn();let y;var Y=G(L);Y.textContent=M+1;var X=b(Y,2),V=G(X),le=G(V,!0);x(V),x(X),Mt(X,f=>mn?.(f)),Oe(X,(f,_)=>l[_]=f,f=>l?.[f],()=>[M]),x(L),oe(f=>{y=Ne(L,1,"table-row svelte-1c8e44s",null,y,{"current-record":n()===M}),ie(le,f)},[()=>D(R(E))]),st("inview_change",X,f=>p[M]=f.detail.inView),ze("click",X,()=>d(M)),m(c,L)}),x(v),x(T),Oe(T,c=>C=c,()=>C),m(t,T),U(),i()}Qe(["click"]);var Sn=z('<!> <span class="redef-value"> </span> <!>',1);function $n(t,e){w(e,!1);const n=()=>k(je,"$activeVariant",a),s=()=>k(_e,"$model",a),[a,r]=Ce();function o(u,I){const d=n()[u]??u,P=I.indexOf(d),D=I[(P-1+I.length)%I.length];xe(u,D)}function i(u,I){const d=n()[u]??u,P=I.indexOf(d),D=I[(P+1)%I.length];xe(u,D)}function l(u){return s()?qe(s(),n()).some(d=>d.variantPath?.some(P=>P.group===u)):!1}yt();var p=B(),h=$(p);{var C=u=>{var I=B(),d=$(I);ge(d,1,()=>Object.entries(s().redefineGroups),Te,(P,D)=>{var T=he(()=>gt(R(D),2));let v=()=>R(T)[0],g=()=>R(T)[1];var c=B(),E=$(c);{var M=y=>{ve(y,{children:(Y,X)=>{var V=B(),le=$(V);{var f=S=>{var A=Sn(),N=$(A);j(N,{onclick:()=>o(v(),g()),children:(O,Z)=>{Kt(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Q=b(N,2),K=G(Q,!0);x(Q);var re=b(Q,2);j(re,{onclick:()=>i(v(),g()),children:(O,Z)=>{Zt(O,{size:16,strokeWidth:3})},$$slots:{default:!0}}),oe(()=>ie(K,n()[v()]??v())),m(S,A)},_=he(()=>l(v()));ee(le,S=>{R(_)&&S(f)})}m(Y,V)},$$slots:{default:!0}})},L=he(()=>g().length>1&&l(v()));ee(E,y=>{R(L)&&y(M)})}m(P,c)}),m(u,I)};ee(h,u=>{s()&&u(C)})}m(t,p),U(),r()}var Tn=z('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),_n=z("<!> <!> <!> <!> <!>",1),bn=z('<div class="muted">Nenhum modelo ativo</div>'),Ln=z('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div><!></div> <!>',1);function Mn(t,e){w(e,!0);const n=()=>k(_e,"$model",i),s=()=>k(je,"$activeVariant",i),a=()=>k(W,"$currentRecordIndex",i),r=()=>k(de,"$records",i),o=()=>k(be,"$buffer",i),[i,l]=Ce();let p=ce(Et([])),h=ce(1),C="flex";fe(()=>(F(p,n()?qe(n(),s()):[],!0),F(h,a()+1),()=>{}));function u(){if(!n())return null;const f=new Uint8Array(n().recordLength);return f.fill(32),f}function I(f){const _=u();_&&(de.update(S=>{const A=S.slice();return A.splice(f+1,0,_),A}),Ae.update(S=>{const A=S.slice();return A.splice(f+1,0,{}),A}),W.set(f+1))}function d(f){de.update(_=>{const S=_.slice(),A=_[f];if(!A)return _;const N=new Uint8Array(A);return S.splice(f+1,0,N),S}),Ae.update(_=>{const S=_.slice();return S.splice(f+1,0,{..._[f]??{}}),S}),W.set(f+1)}function P(f){if(r().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${f+1}?`))return;de.update(A=>{const N=A.slice();return N.splice(f,1),N}),Ae.update(A=>{const N=A.slice();return N.splice(f,1),N});const S=f>=r().length-1?f-1:f;W.set(Math.max(0,S))}function D(){W.update(f=>Math.max(0,f-1))}function T(){W.update(f=>Math.min(r().length-1,f+1))}function v(){const f=R(h)-1;if(f<0||f>=r().length){F(h,a()+1);return}W.set(f)}var g=Ln(),c=b($(g),2),E=G(c);ve(E,{gap:".1rem",children:(f,_)=>{var S=Tn(),A=b($(S),2);_t(A);let N;var Q=b(A,2),K=G(Q);x(Q),oe(()=>{Xe(A,"max",r().length),Xe(A,"maxlength",r().length),N=Ne(A,1,"svelte-7p234s",null,N,{invalid:R(h)<1||R(h)>r().length}),ie(K,`/ ${r().length??""}`)}),ze("change",A,v),$e(A,()=>R(h),re=>F(h,re)),m(f,S)},$$slots:{default:!0}});var M=b(E,2);ve(M,{children:(f,_)=>{var S=_n(),A=$(S);j(A,{onclick:D,[ue()]:O=>(ae("Ir para linha anterior")||H)(O),children:(O,Z)=>{qt(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var N=b(A,2);j(N,{onclick:()=>I(a()),[ue()]:O=>(ae("Adicionar linha")||H)(O),children:(O,Z)=>{Ke(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Q=b(N,2);j(Q,{onclick:T,[ue()]:O=>(ae("Ir para a próxima linha")||H)(O),children:(O,Z)=>{jt(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var K=b(Q,2);j(K,{onclick:()=>d(a()),secondary:!0,[ue()]:O=>(ae("Duplicar linha atual")||H)(O),children:(O,Z)=>{Jt(O,{size:16,strokeWidth:3})},$$slots:{default:!0}});var re=b(K,2);j(re,{onclick:()=>P(a()),danger:!0,[ue()]:O=>(ae("Deletar linha atual")||H)(O),children:(O,Z)=>{tn(O,{size:16,strokeWidth:3})},$$slots:{default:!0}}),m(f,S)},$$slots:{default:!0}});var L=b(M,2);$n(L,{}),x(c);var y=b(c,2);Ne(y,1,Tt(["form",C]),"svelte-7p234s");var Y=G(y);{var X=f=>{var _=bn();m(f,_)},V=f=>{var _=B(),S=$(_);ge(S,17,()=>R(p),A=>A.name+":"+A.offset,(A,N)=>{var Q=B(),K=$(Q);{var re=O=>{{let Z=he(()=>`${R(N).name} : ${R(N).pic?.raw} : [${R(N).offset}..${R(N).offset+R(N).byteLength-1}]`);In(O,{get name(){return R(N).name},get field(){return R(N)},get tooltipText(){return R(Z)}})}};ee(K,O=>{O(re,-1)})}m(A,Q)}),m(f,_)};ee(Y,f=>{!n()||!o()?f(X):f(V,-1)})}x(y);var le=b(y,2);Nn(le,{}),m(t,g),U(),l()}Qe(["change"]);var yn=z('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),Bn=z('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function wn(t){var e=Bn();Lt("1uha8ag",o=>{var i=yn();Ye(()=>{At.title="Home"}),m(o,i)});var n=$(e),s=G(n);Yt(s,{}),x(n);var a=b(n,2),r=G(a);Mn(r,{}),x(a),m(t,e)}export{wn as component,kn as universal};
