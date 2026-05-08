import{a as N,f as z,c as y,t as Ct,s as ce,d as Ze,e as It,b as Je}from"../chunks/Bz9pcTi_.js";import{K as dt,d as ft,aL as Pt,ap as Rt,h as De,aC as pt,aD as ye,g as $e,f as _e,i as Et,au as ht,j as be,b as et,c as At,a4 as gt,u as le,aM as vt,aN as Fe,C as v,aO as mt,a0 as Dt,aP as Ot,p as x,A as U,w as G,n as B,t as oe,o as Q,an as Nt,aQ as St,q as _,v as F,a6 as ue,x as V,a7 as de,B as Tt,aR as Lt,V as Mt,aS as bt}from"../chunks/R3T74W7k.js";import{a as Re,b as H,s as ne,r as K,p as Xt}from"../chunks/vGbNO2P5.js";import{i as te,b as Le}from"../chunks/D0UFlnsV.js";import{k as He,P as ge,l as Xe,e as me,B as q,i as Be,h as Bt,m as Ge,I as se,s as re,n as Gt,o as kt,t as ie,b as ve,p as yt,q as j,u as ke,v as $t,w as fe,j as Ie,x as Ve,y as tt,c as _t,r as Ft,a as xe,g as Ce,z as Oe}from"../chunks/DYeB0fAY.js";function Ht(t,e){let n=null,s=De;var a;if(De){n=Et;for(var r=ht(document.head);r!==null&&(r.nodeType!==pt||r.data!==t);)r=ye(r);if(r===null)$e(!1);else{var o=ye(r);r.remove(),_e(o)}}De||(a=document.head.appendChild(dt()));try{ft(()=>e(a),Pt|Rt)}finally{s&&($e(!0),_e(n))}}function nt(t,e,n){be(()=>{var s=et(()=>e(t,n?.())||{});if(s?.destroy)return()=>s.destroy()})}function Vt(t=!1){const e=At,n=e.l.u;if(!n)return;let s=()=>mt(e.s);if(t){let a=0,r={};const o=Dt(()=>{let i=!1;const l=e.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],i=!0);return i&&a++,a});s=()=>v(o)}n.b.length&&gt(()=>{Qe(e,s),Fe(n.b)}),le(()=>{const a=et(()=>n.m.map(vt));return()=>{for(const r of a)typeof r=="function"&&r()}}),n.a.length&&le(()=>{Qe(e,s),Fe(n.a)})}function Qe(t,e){if(t.l.s)for(const n of t.l.s)v(n);e()}const xt=!0,ss=Object.freeze(Object.defineProperty({__proto__:null,prerender:xt},Symbol.toStringTag,{value:"Module"}));Ot();const Qt=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,wt=/OCCURS\s+(\d+)\s+TIMES/i,Ut=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function zt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMP-1"||e==="COMP-2"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function we(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function Wt(t){const n=t.split(/\r?\n/).map(r=>r.length>6?r.slice(6):r).map(r=>r.replace(/\r$/,"")).filter(r=>r.trim().length>0).filter(r=>!r.trim().startsWith("*")),s=[];let a="";for(let r=0;r<n.length;r++){const o=n[r],i=o.trimEnd(),l=i.endsWith("-"),c=!i.endsWith(".");l||c?a+=i.replace(/-$/,""):(a+=o,s.push(a.trim()),a="")}return a.trim()&&s.push(a.trim()),s}function Yt(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const s=e.match(/X\((\d+)\)/),a=s?parseInt(s[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:a,signed:!1}}if(e.startsWith("9")){const s=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(s){const i=we(s[1]),l=we(s[2]);return{raw:t,type:"NUMERIC",length:i+l,decimals:l||void 0,signed:n}}const a=e.split("V"),r=(a[0].match(/9/g)||[]).length,o=a[1]?(a[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:r+o,decimals:o||void 0,signed:n}}}function jt(t){const e=Wt(t),n=[],s=[];let a=1;for(const r of e){const o=r.trim().split(/\s+/),i=parseInt(o[0],10),l=o[1];if(Number.isNaN(i)||!l)continue;let c=l.replace(/\.$/,"");const P={level:i,name:c,isFiller:c.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},C=r.match(Ut);C&&(P.redefines=C[1].replace(/\.$/,""));const u=r.match(Qt);if(u){const E=Yt(u[2]);E&&(P.pic=E)}const d=r.match(wt);d&&(P.occurs={times:parseInt(d[1],10)});let I;if(u){const E=r.slice(u.index+u[0].length);let f=E.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);f?I=f[1]:(f=E.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),f&&(I=f[1]))}else{let E=r.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);E||(E=r.match(/\b(COMP-1|COMP-2|COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),E&&(I=E[1])}for(I&&(P.usage=zt(I));s.length&&s[s.length-1].level>=i;)s.pop();s.length===0?n.push(P):s[s.length-1].children.push(P),s.push(P)}return(function r(o){for(const i of o)i.isFiller&&(i.name=`FILLER-${a++}`),r(i.children)})(n),n}function Ue(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP-1")return 4;if(e==="COMP-2")return 8;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const s=n.type==="NUMERIC"?n.length:0;return s<=4?2:s<=9?4:8}if(e==="COMP-3"){const s=n.type==="NUMERIC"?n.length:0;return Math.ceil((s+1)/2)}return n.length}function qt(t){const e=new Map;(function C(u){for(const d of u)e.set(d.name,d),C(d.children)})(t);const n={};(function C(u){for(const d of u){if(d.redefines){const I=d.redefines;n[I]||=new Set([I]),n[I].add(d.name)}C(d.children)}})(t);const s={};for(const[C,u]of Object.entries(n))s[C]=Array.from(u);const a={};for(const[C,u]of Object.entries(s))for(const d of u)a[d]=C;const r=C=>{if(C.children.length&&!C.pic&&!C.redefines){let I=0;for(const f of C.children)I+=r(f);const E=C.occurs?.times??1;return I*E}const u=C.pic?Ue(C):0,d=C.occurs?.times??1;return u*d},o={},i=[];let l=0;const c=[],P=(C,u)=>{let d=u;for(const I of C){let E=d;if(I.redefines){const h=I.redefines;h in o?E=o[h]:console.warn(`REDEFINES base not found yet: ${h}. Ensure base appears before redefiner.`)}I.name in o||(o[I.name]=E);const f=a[I.name];let m=!1;f&&(c.push({group:f,member:I.name}),m=!0);const A=r(I);if(I.children.length&&!I.pic){const h=I.occurs?.times??1,p=h?A/h:A;for(let D=0;D<h;D++)P(I.children,E+D*p)}else{const h=I.occurs?.times??1,p=I.pic?Ue(I):0;for(let D=0;D<h;D++)i.push({...I,offset:E+D*p,byteLength:p,variantPath:c.length?c.slice():void 0})}m&&c.pop(),I.redefines?l=Math.max(l,E+A):(d+=A,l=Math.max(l,d))}};return P(t,0),{root:t,fieldsFlat:i,recordLength:l,redefineGroups:s,nameIndex:Object.fromEntries(e)}}const ze={"CNAB240-PIX":`      *----------------------------CNAB240-----------------------------*
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
           03  TX-ID                    PIC X(035).
           03  INFO-11                  PIC X(060).
           03  IDENTIFICACAO-PIX        PIX X(099).
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
           03  FILLER                   PIC X(205).`,CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`,TESTE:`01  TEST-RECORD.
      * =========================================================
      * IDENTIFICACAO BASICA
      * =========================================================
           05  rec-id                  PIC X(10).
           05  rec-type                PIC X.

      * =========================================================
      * DISPLAY ALFANUMERICO
      * =========================================================
           05  alpha-simple            PIC X(5).
           05  alpha-large             PIC X(50).

      * =========================================================
      * DISPLAY NUMERICO
      * =========================================================
           05  num-display-unsigned    PIC 9(5).
           05  num-display-signed      PIC S9(6).
           05  num-display-decimal     PIC 9(4)V99.
           05  num-display-s-dec       PIC S9(3)V9.

      * =========================================================
      * BINARY / COMP (inteiros)
      * =========================================================
           05  bin-1-byte              PIC 9(2) COMP.
           05  bin-2-bytes             PIC S9(4) COMP.
           05  bin-4-bytes             PIC S9(9) COMP.

      * =========================================================
      * COMP-1 e COMP-2 (IEEE FLOAT)
      * =========================================================
           05  float-single            COMP-1.
           05  float-double            COMP-2.

      * =========================================================
      * PACKED DECIMAL (COMP-3)
      * =========================================================
           05  packed-unsigned-small   PIC 9(3) COMP-3.
           05  packed-signed-small     PIC S9(3) COMP-3.
           05  packed-decimal          PIC 9(2)V99 COMP-3.
           05  packed-signed-dec       PIC S9(4)V9 COMP-3.
           05  packed-large            PIC S9(9) COMP-3.

      * =========================================================
      * OCCURS FIXO
      * =========================================================
           05  occurs-group.
               10  occurs-item         PIC 9(2) OCCURS 5 TIMES.

      * =========================================================
      * OCCURS COM GRUPO E VARIOS TIPOS
      * =========================================================
           05  occurs-complex OCCURS 3 TIMES.
               10  oc-id               PIC X(3).
               10  oc-amount           PIC S9(5)V99 COMP-3.
               10  oc-flag             PIC X.

      * =========================================================
      * REDEFINES
      * =========================================================
           05  redefine-area.
               10  redefine-raw        PIC X(8).
               10  redefine-bin REDEFINES redefine-raw.
                   15 redefine-n1      PIC S9(4) COMP.
                   15 redefine-n2      PIC S9(4) COMP.

      * =========================================================
      * GRUPOS ANINHADOS
      * =========================================================
           05  nested-group.
               10  ng-header.
                   15 ng-code          PIC X(2).
                   15 ng-date          PIC 9(8).
               10  ng-body.
                   15 ng-value         PIC S9(6)V99 COMP-3.
                   15 ng-status        PIC X.

      * =========================================================
      * FILLER (NAO EDITAVEL)
      * =========================================================
           05  FILLER                  PIC X(4).

      * =========================================================
      * LIMITES E CASOS MINIMOS
      * =========================================================
           05  one-byte-alpha          PIC X.
           05  one-digit-num           PIC 9.
           05  signed-one-digit        PIC S9.
`};function Kt(t,e=250){let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>t(...s),e)}}var Zt=z('<span class="err"> </span>'),Jt=z('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function en(t,e){x(e,!0);const n=()=>H(Ge,"$model",s),[s,a]=Re();let r=ue(""),o=ue("");function i(A){try{const h=qt(jt(A));He(h);const p=new Uint8Array(h.recordLength);p.fill(32),Bt([p]),U(o,"")}catch(h){U(o,h?.message??"Erro ao processar copybook",!0)}}const l=Kt(i,300);function c(A){U(r,ze[A]+`
`),i(v(r))}le(()=>{if(!v(r)?.trim()){He(null),U(o,"");return}l(v(r))});var P=Jt(),C=G(B(P),2);ge(C,{children:(A,h)=>{var p=y(),D=B(p);me(D,17,()=>Object.keys(ze),Be,(b,k)=>{q(b,{onclick:()=>c(v(k)),children:($,O)=>{Nt();var L=Ct();oe(()=>ce(L,v(k))),N($,L)},$$slots:{default:!0}})}),N(A,p)},$$slots:{default:!0}});var u=G(C,2);St(u);var d=G(u,2),I=_(d),E=_(I);F(I);var f=G(I,2);{var m=A=>{var h=Zt(),p=_(h,!0);F(h),oe(()=>ce(p,v(o))),N(A,h)};te(f,A=>{v(o)&&A(m)})}F(d),oe(()=>ce(E,`len: ${(n()?n().recordLength:"—")??""}`)),Xe(u,()=>v(r),A=>U(r,A)),N(t,P),Q(),a()}function tn(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function st(t,e){return t.fieldsFlat.filter(n=>tn(n,e))}function nn(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];se(t,ne({name:"arrow-down-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function sn(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];se(t,ne({name:"arrow-up-to-line"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function rn(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];se(t,ne({name:"chevrons-left"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function an(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];se(t,ne({name:"chevrons-right"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function on(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];se(t,ne({name:"copy"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function cn(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];se(t,ne({name:"minus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function rt(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];se(t,ne({name:"plus"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function ln(t,e){x(e,!0);let n=K(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];se(t,ne({name:"trash"},()=>n,{get iconNode(){return s},children:(a,r)=>{var o=y(),i=B(o);re(i,()=>e.children??V),N(a,o)},$$slots:{default:!0}})),Q()}function un(t,e,n,s=!1){switch(e){case 1:return n?t.getInt8(0):t.getUint8(0);case 2:return n?t.getInt16(0,s):t.getUint16(0,s);case 4:return n?t.getInt32(0,s):t.getUint32(0,s);default:throw new Error("Unsupported binary size")}}function Cn(t,e){const n=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),s=e.pic?.signed??!1;return un(n,e.byteLength,s,!1).toString()}function In(t,e,n){const s=new DataView(t.buffer,t.byteOffset+e.offset,e.byteLength),a=Number(n);if(isNaN(a))return;const r=e.pic?.signed??!1;switch(e.byteLength){case 1:r?s.setInt8(0,a):s.setUint8(0,a);break;case 2:r?s.setInt16(0,a,!1):s.setUint16(0,a,!1);break;case 4:r?s.setInt32(0,a,!1):s.setUint32(0,a,!1);break}}function dn(t,e,n){const s=e.byteLength,a=!!e.pic?.signed;let r=!1,o=n;a&&(n[0]==="-"&&(r=!0),o=n.slice(1));const i=s*2-1,l=o.padStart(i,"0");let c=l.length-1;for(let P=s-1;P>=0;P--){let C,u;P===s-1?(C=Number(l[c--]),u=r?13:12):(u=Number(l[c--]),C=Number(l[c--])),t[e.offset+P]=C<<4|u}}function fn(t,e){const n=e.byteLength,s=!!e.pic?.signed;let a="",r=!1;for(let o=e.offset;o<e.offset+n;o++){const i=t[o],l=i>>4&15,c=i&15;o===e.offset+n-1?(c===13&&(r=!0),a+=l.toString()):a+=l.toString()+c.toString()}return s?(r?"-":"+")+a:a}const Ne=new TextEncoder,Pn=new TextDecoder("ascii"),at=["{","A","B","C","D","E","F","G","H","I"],ot=["}","J","K","L","M","N","O","P","Q","R"];function Rn(t,e){const n=t.buffer.slice(e.offset,e.offset+e.byteLength),s=Pn.decode(n);if(e.pic?.type==="NUMERIC"){const a=!!e.pic.signed,r=e.pic.decimals??0;let o=s;if(a){const i=s.at(-1),l=at.indexOf(i),c=ot.indexOf(i);l>=0?o=s.slice(0,-1)+l:c>=0&&(o=s.slice(0,-1)+c)}if(o.trim()==="")return"";if(r>0){const i=o.slice(0,-r),l=o.slice(-r);return`${i}.${l}`}return`${o}`}return s.replace(/[\u0000 ]+$/g,"")}function pn(t,e,n){const s=e.byteLength,a=String(n);if(e.pic?.type==="NUMERIC"){const o=!!e.pic.signed,i=e.pic.decimals??0,l=a.replace(",",".");let c=!1,P=l;o&&/^[+-]/.test(P)&&(c=P[0]==="-",P=P.slice(1));const[C="",u=""]=P.split("."),d=C.replace(/\D/g,""),I=u.replace(/\D/g,""),E=s,f=i,m=E-f,A=d.padStart(m," ")+I.padEnd(f," ");if(!o){t.set(Ne.encode(A),e.offset);return}const h=Number(A.at(-1)??0),p=c?ot[h]:at[h],D=A.slice(0,-1)+p;t.set(Ne.encode(D),e.offset);return}const r=a.padEnd(s," ");t.set(Ne.encode(r),e.offset)}function it(t){const e=t.usage?.toUpperCase();return!e||e==="DISPLAY"?"DISPLAY":e==="COMP-1"?"COMP-1":e==="COMP-2"?"COMP-2":e==="COMP-3"||e==="PACKED-DECIMAL"?"COMP-3":e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"?"BINARY":"DISPLAY"}function En(t,e,n){switch(it(e)){case"DISPLAY":return pn(t,e,n);case"COMP-3":return dn(t,e,n);case"BINARY":return In(t,e,n)}}function hn(t,e){switch(it(e)){case"DISPLAY":return Rn(t,e);case"COMP-3":return fn(t,e);case"BINARY":return Cn(t,e)}return""}var An=Object.defineProperty,gn=(t,e,n)=>e in t?An(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Pe=(t,e,n)=>gn(t,typeof e!="symbol"?e+"":e,n);const We={"#":{pattern:/[0-9]/},"@":{pattern:/[a-zA-Z]/},"*":{pattern:/[a-zA-Z0-9]/}},Ye=(t,e,n)=>t.replaceAll(e,"").replace(n,".").replace("..",".").replace(/[^.\d]/g,""),je=(t,e,n)=>{var s;return new Intl.NumberFormat(((s=n.number)==null?void 0:s.locale)??"en",{minimumFractionDigits:t,maximumFractionDigits:e,roundingMode:"trunc"})},vn=(t,e=!0,n)=>{var s,a,r,o;const i=((s=n.number)==null?void 0:s.unsigned)!==!0&&t.startsWith("-")?"-":"",l=((a=n.number)==null?void 0:a.fraction)??0;let c=je(0,l,n);const P=c.formatToParts(1000.12),C=((r=P.find(f=>f.type==="group"))==null?void 0:r.value)??" ",u=((o=P.find(f=>f.type==="decimal"))==null?void 0:o.value)??".",d=Ye(t,C,u);if(Number.isNaN(parseFloat(d)))return i;const I=d.split(".");if(I[1]!=null&&I[1].length>=1){const f=I[1].length<=l?I[1].length:l;c=je(f,l,n)}let E=c.format(parseFloat(d));return e?l>0&&d.endsWith(".")&&!d.slice(0,-1).includes(".")&&(E+=u):E=Ye(E,C,u),i+E},ct=t=>JSON.parse(t.replaceAll("'",'"')),mn=(t,e={})=>{const n={...e};t.dataset.maska!=null&&t.dataset.maska!==""&&(n.mask=Dn(t.dataset.maska)),t.dataset.maskaEager!=null&&(n.eager=pe(t.dataset.maskaEager)),t.dataset.maskaReversed!=null&&(n.reversed=pe(t.dataset.maskaReversed)),t.dataset.maskaTokensReplace!=null&&(n.tokensReplace=pe(t.dataset.maskaTokensReplace)),t.dataset.maskaTokens!=null&&(n.tokens=On(t.dataset.maskaTokens));const s={};return t.dataset.maskaNumberLocale!=null&&(s.locale=t.dataset.maskaNumberLocale),t.dataset.maskaNumberFraction!=null&&(s.fraction=parseInt(t.dataset.maskaNumberFraction)),t.dataset.maskaNumberUnsigned!=null&&(s.unsigned=pe(t.dataset.maskaNumberUnsigned)),(t.dataset.maskaNumber!=null||Object.values(s).length>0)&&(n.number=s),n},pe=t=>t!==""?!!JSON.parse(t):!0,Dn=t=>t.startsWith("[")&&t.endsWith("]")?ct(t):t,On=t=>{if(t.startsWith("{")&&t.endsWith("}"))return ct(t);const e={};return t.split("|").forEach(n=>{const s=n.split(":");e[s[0]]={pattern:lt()?new RegExp(s[1],"u"):new RegExp(s[1]),optional:s[2]==="optional",multiple:s[2]==="multiple",repeated:s[2]==="repeated"}}),e},lt=()=>{try{return new RegExp("\\p{L}","u"),!0}catch{return!1}};class Nn{constructor(e={}){Pe(this,"opts",{}),Pe(this,"memo",new Map);const n={...e};if(n.tokens!=null){n.tokens=n.tokensReplace?{...n.tokens}:{...We,...n.tokens};for(const s of Object.values(n.tokens))typeof s.pattern=="string"&&(s.pattern=lt()?new RegExp(s.pattern,"u"):new RegExp(s.pattern))}else n.tokens=We;Array.isArray(n.mask)&&(n.mask.length>1?n.mask=[...n.mask].sort((s,a)=>s.length-a.length):n.mask=n.mask[0]??""),n.mask===""&&(n.mask=null),this.opts=n}masked(e){return this.process(String(e),this.findMask(String(e)))}unmasked(e){return this.process(String(e),this.findMask(String(e)),!1)}isEager(){return this.opts.eager===!0}isReversed(){return this.opts.reversed===!0}completed(e){const n=this.findMask(String(e));if(this.opts.mask==null||n==null)return!1;const s=this.process(String(e),n).length;return typeof this.opts.mask=="string"?s>=this.opts.mask.length:s>=n.length}findMask(e){const n=this.opts.mask;if(n==null)return null;if(typeof n=="string")return n;if(typeof n=="function")return n(e);const s=this.process(e,n.slice(-1).pop()??"",!1);return n.find(a=>this.process(e,a,!1).length>=s.length)??""}escapeMask(e){const n=[],s=[];return e.split("").forEach((a,r)=>{a==="!"&&e[r-1]!=="!"?s.push(r-s.length):n.push(a)}),{mask:n.join(""),escaped:s}}process(e,n,s=!0){if(this.opts.number!=null)return vn(e,s,this.opts);if(n==null)return e;const a=`v=${e},mr=${n},m=${s?1:0}`;if(this.memo.has(a))return this.memo.get(a);const{mask:r,escaped:o}=this.escapeMask(n),i=[],l=this.opts.tokens!=null?this.opts.tokens:{},c=this.isReversed()?-1:1,P=this.isReversed()?"unshift":"push",C=this.isReversed()?0:r.length-1,u=this.isReversed()?()=>f>-1&&m>-1:()=>f<r.length&&m<e.length,d=h=>!this.isReversed()&&h<=C||this.isReversed()&&h>=C;let I,E=-1,f=this.isReversed()?r.length-1:0,m=this.isReversed()?e.length-1:0,A=!1;for(;u();){const h=r.charAt(f),p=l[h],D=p?.transform!=null?p.transform(e.charAt(m)):e.charAt(m);if(!o.includes(f)&&p!=null?(D.match(p.pattern)!=null?(i[P](D),p.repeated?(E===-1?E=f:f===C&&f!==E&&(f=E-c),C===E&&(f-=c)):p.multiple&&(A=!0,f-=c),f+=c):p.multiple?A&&(f+=c,m-=c,A=!1):D===I?I=void 0:p.optional&&(f+=c,m-=c),m+=c):(s&&!this.isEager()&&i[P](h),D===h&&!this.isEager()?m+=c:I=h,this.isEager()||(f+=c)),this.isEager())for(;d(f)&&(l[r.charAt(f)]==null||o.includes(f));){if(s){if(i[P](r.charAt(f)),e.charAt(m)===r.charAt(f)){f+=c,m+=c;continue}}else r.charAt(f)===e.charAt(m)&&(m+=c);f+=c}}return this.memo.set(a,i.join("")),this.memo.get(a)}}class Sn{constructor(e,n={}){Pe(this,"items",new Map),Pe(this,"eventAbortController"),Pe(this,"onInput",s=>{if(s instanceof CustomEvent&&s.type==="input"&&!s.isTrusted&&!s.bubbles)return;const a=s.target,r=this.items.get(a);if(r===void 0)return;const o="inputType"in s&&s.inputType.startsWith("delete"),i=r.isEager(),l=o&&i&&r.unmasked(a.value)===""?"":a.value;this.fixCursor(a,o,()=>this.setValue(a,l))}),this.options=n,this.eventAbortController=new AbortController,this.init(this.getInputs(e))}update(e={}){this.options={...e},this.init(Array.from(this.items.keys()))}updateValue(e){var n;e.value!==""&&e.value!==((n=this.processInput(e))==null?void 0:n.masked)&&this.setValue(e,e.value)}destroy(){this.eventAbortController.abort(),this.items.clear()}init(e){const n=this.getOptions(this.options);for(const s of e){if(!this.items.has(s)){const{signal:r}=this.eventAbortController;s.addEventListener("input",this.onInput,{capture:!0,signal:r})}const a=new Nn(mn(s,n));this.items.set(s,a),queueMicrotask(()=>this.updateValue(s)),s.selectionStart===null&&a.isEager()&&console.warn("Maska: input of `%s` type is not supported",s.type)}}getInputs(e){return typeof e=="string"?Array.from(document.querySelectorAll(e)):"length"in e?Array.from(e):[e]}getOptions(e){const{onMaska:n,preProcess:s,postProcess:a,...r}=e;return r}fixCursor(e,n,s){var a,r;const o=e.selectionStart,i=e.value;if(s(),o===null||o===i.length&&!n)return;const l=e.value,c=i.slice(0,o),P=l.slice(0,o),C=(a=this.processInput(e,c))==null?void 0:a.unmasked,u=(r=this.processInput(e,P))==null?void 0:r.unmasked;if(C===void 0||u===void 0)return;let d=o;c!==P&&(d+=n?l.length-i.length:C.length-u.length),e.setSelectionRange(d,d)}setValue(e,n){const s=this.processInput(e,n);s!==void 0&&(e.value=s.masked,this.options.onMaska!=null&&(Array.isArray(this.options.onMaska)?this.options.onMaska.forEach(a=>a(s)):this.options.onMaska(s)),e.dispatchEvent(new CustomEvent("maska",{detail:s})),e.dispatchEvent(new CustomEvent("input",{detail:s.masked})))}processInput(e,n){const s=this.items.get(e);if(s===void 0)return;let a=n??e.value;this.options.preProcess!=null&&(a=this.options.preProcess(a));let r=s.masked(a);return this.options.postProcess!=null&&(r=this.options.postProcess(r)),{masked:r,unmasked:s.unmasked(a),completed:s.completed(a)}}}const Se=new WeakMap,Tn=(t,e={})=>{const n=t instanceof HTMLInputElement?t:t.querySelector("input");if(n==null||n?.type==="file")return;let s=e;return typeof s=="string"&&(s={mask:s}),Se.set(n,new Sn(n,s)),{update(a){var r;typeof a=="string"&&(a={mask:a}),(r=Se.get(n))==null||r.update(a)},destroy(){var a;(a=Se.get(n))==null||a.destroy()}}};var Ln=z("<div><!> <input/></div>");function Mn(t,e){x(e,!0);const n=()=>H(fe,"$activeField",r),s=()=>H(j,"$currentRecordIndex",r),a=()=>H(ke,"$buffer",r),[r,o]=Re();let i=Xt(e,"tooltipText",3,""),l=K(e,["$$slots","$$events","$$legacy","field","tooltipText"]),c,P=ue(""),C=ue(!1),u=de(()=>n()?c===n().ref:!1),d=!0;le(()=>{s(),d&&U(P,hn(a(),e.field),!0),d=!0});function I(O){d=!1;const L=e.field.pic?.signed?(v(C)?"-":"+")+v(P):v(P);$t(W=>{En(W,e.field,L)})}function E(O){return f(O).replace(/9/g,"#").replace(/X/g,"*")}function f(O){if(!O.pic)return"";if(O.pic.type==="ALPHA")return"X".repeat(O.byteLength);if(O.pic.type==="NUMERIC"){O.pic.signed;const L=O.pic.decimals??0,Y=O.byteLength-L;let R="";return R+="9".repeat(Y),L>0&&(R+="."+"9".repeat(L)),R}return""}var m=Ln();let A,h;var p=_(m);{var D=O=>{q(O,{onmousedown:L=>{L.preventDefault()},onclick:()=>{U(C,!v(C)),c.focus(),c.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))},muted:!0,children:(L,W)=>{var Y=y(),R=B(Y);{var X=g=>{rt(g,{size:16,strokeWidth:3})},T=g=>{cn(g,{size:16,strokeWidth:3})};te(R,g=>{v(C)?g(T,-1):g(X)})}N(L,Y)},$$slots:{default:!0}})};te(p,O=>{e.field.pic?.signed&&O(D)})}var b=G(p,2),k=()=>{fe.set({...e.field,ref:c})},$=()=>{fe.set(null)};Gt(b,(O,L)=>({"data-maska":O,placeholder:L,oninput:I,onfocus:k,onblur:$,inputmode:e.field.pic?.type==="NUMERIC"?"decimal":"text",maxlength:e.field.byteLength+(e.field.pic?.decimals?1:0),autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off",...l}),[()=>E(e.field),()=>f(e.field)],void 0,void 0,"svelte-n1ol00",!0),Le(b,O=>c=O,()=>c),be(()=>Xe(b,()=>v(P),O=>U(P,O))),nt(b,O=>Tn?.(O)),kt(b,()=>ie(i(),"focus")),F(m),oe(()=>{A=ve(m,1,"field svelte-n1ol00",null,A,{active:v(u)}),h=yt(m,"",h,{"flex-basis":`calc(${e.field.byteLength}ch + 1rem ${e.field.pic?.signed?"+ 2.6rem":""} ${e.field.pic?.decimals?"+ 1CH":""})`})}),N(t,m),Q(),o()}function bn(t){return t()}function Xn(t){t.forEach(bn)}const Ee=[],qe=[],Ae=[],Ke=[],ut=Promise.resolve();let Me=!1;function Bn(){Me||(Me=!0,ut.then(yn))}function Gn(){return Bn(),ut}function kn(t){Ae.push(t)}const Te=new Set;let he=0;function yn(){do{for(;he<Ee.length;){const t=Ee[he];he++,$n(t.$$)}for(Ee.length=0,he=0;qe.length;)qe.pop()();for(let t=0;t<Ae.length;t+=1){const e=Ae[t];Te.has(e)||(Te.add(e),e())}Ae.length=0}while(Ee.length);for(;Ke.length;)Ke.pop()();Me=!1,Te.clear()}function $n(t){if(t.fragment!==null){t.update(),Xn(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(kn)}}const _n={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},ee=(t,e)=>new CustomEvent(t,{detail:e});function Fn(t,e={}){const{root:n,rootMargin:s,threshold:a,unobserveOnEnter:r}=Object.assign(Object.assign({},_n),e);let o={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const l=new IntersectionObserver((c,P)=>{c.forEach(C=>{o.y>C.boundingClientRect.y?i.vertical="up":i.vertical="down",o.x>C.boundingClientRect.x?i.horizontal="left":i.horizontal="right",o={y:C.boundingClientRect.y,x:C.boundingClientRect.x};const u={inView:C.isIntersecting,entry:C,scrollDirection:i,node:t,observer:P};t.dispatchEvent(ee("inview_change",u)),t.dispatchEvent(ee("change",u)),C.isIntersecting?(t.dispatchEvent(ee("inview_enter",u)),t.dispatchEvent(ee("enter",u)),r&&P.unobserve(t)):(t.dispatchEvent(ee("inview_leave",u)),t.dispatchEvent(ee("leave",u)))})},{root:n,rootMargin:s,threshold:a});return Gn().then(()=>{t.dispatchEvent(ee("inview_init",{observer:l,node:t})),t.dispatchEvent(ee("init",{observer:l,node:t}))}),l.observe(t),{destroy(){l.unobserve(t)}}}}var Hn=z('<div><span class="row-index svelte-1c8e44s"></span> <button type="button" class="svelte-1c8e44s"><pre class="svelte-1c8e44s"> </pre></button></div>'),Vn=z('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span class="svelte-1c8e44s"># Registro</span></div> <!></div></div>');function xn(t,e){x(e,!0);const n=()=>H(j,"$currentRecordIndex",o),s=()=>H(fe,"$activeField",o),a=()=>H(ke,"$buffer",o),r=()=>H(Ie,"$records",o),[o,i]=Re();new TextDecoder("ascii");const l=[];let c=[],P,C;function u(){l[n()]?.parentElement?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function d(p){p&&C.scrollTo({left:p.offset*8,behavior:"smooth"})}function I(p){j.set(p)}function E(){const p=Tt(fe);if(!CSS.highlights){console.log("CSS Custom Highlight API not supported.");return}if(CSS.highlights.clear(),!p)return;const D=l[n()]?.querySelector("pre");if(!D)return;const b=D.firstChild;if(b&&b.nodeType===Node.TEXT_NODE){const k=new Range;k.setStart(b,p.offset),k.setEnd(b,p.offset+p.byteLength),P=new Highlight(k),CSS.highlights.set("raw-highlight",P)}}function f(p){return Array.from(p).map(D=>D>=32&&D<=126?String.fromCharCode(D):"·").join("")}le(()=>(c[n()]||u(),d(s()),a(),E(),()=>{}));var m=Vn(),A=_(m),h=G(_(A),2);me(h,1,r,Be,(p,D,b)=>{var k=Hn();let $;var O=_(k);O.textContent=b+1;var L=G(O,2),W=_(L),Y=_(W,!0);F(W),F(L),nt(L,R=>Fn?.(R)),Le(L,(R,X)=>l[X]=R,R=>l?.[R],()=>[b]),F(k),oe(R=>{$=ve(k,1,"table-row svelte-1c8e44s",null,$,{"current-record":n()===b}),ce(Y,R)},[()=>f(v(D))]),It("inview_change",L,R=>c[b]=R.detail.inView),Je("click",L,()=>I(b)),N(p,k)}),F(A),F(m),Le(m,p=>C=p,()=>C),N(t,m),Q(),i()}Ze(["click"]);var Qn=z('<!> <span class="redef-value"> </span> <!>',1);function wn(t,e){x(e,!1);const n=()=>H(tt,"$activeVariant",a),s=()=>H(Ge,"$model",a),[a,r]=Re();function o(u,d){const I=n()[u]??u,E=d.indexOf(I),f=d[(E-1+d.length)%d.length];Ve(u,f)}function i(u,d){const I=n()[u]??u,E=d.indexOf(I),f=d[(E+1)%d.length];Ve(u,f)}function l(u){return s()?st(s(),n()).some(I=>I.variantPath?.some(E=>E.group===u)):!1}Vt();var c=y(),P=B(c);{var C=u=>{var d=y(),I=B(d);me(I,1,()=>Object.entries(s().redefineGroups),Be,(E,f)=>{var m=de(()=>Lt(v(f),2));let A=()=>v(m)[0],h=()=>v(m)[1];var p=y(),D=B(p);{var b=$=>{ge($,{children:(O,L)=>{var W=y(),Y=B(W);{var R=T=>{var g=Qn(),M=B(g);q(M,{onclick:()=>o(A(),h()),children:(S,J)=>{rn(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var w=G(M,2),Z=_(w,!0);F(w);var ae=G(w,2);q(ae,{onclick:()=>i(A(),h()),children:(S,J)=>{an(S,{size:16,strokeWidth:3})},$$slots:{default:!0}}),oe(()=>ce(Z,n()[A()]??A())),N(T,g)},X=de(()=>l(A()));te(Y,T=>{v(X)&&T(R)})}N(O,W)},$$slots:{default:!0}})},k=de(()=>h().length>1&&l(A()));te(D,$=>{v(k)&&$(b)})}N(E,p)}),N(u,d)};te(P,u=>{s()&&u(C)})}N(t,c),Q(),r()}var Un=z('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),zn=z("<!> <!> <!> <!> <!>",1),Wn=z('<div class="muted">Nenhum modelo ativo</div>'),Yn=z('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div><!></div> <!>',1);function jn(t,e){x(e,!0);const n=()=>H(Ge,"$model",i),s=()=>H(tt,"$activeVariant",i),a=()=>H(j,"$currentRecordIndex",i),r=()=>H(Ie,"$records",i),o=()=>H(ke,"$buffer",i),[i,l]=Re();let c=ue(Mt([])),P=ue(1),C="flex";le(()=>(U(c,n()?st(n(),s()):[],!0),U(P,a()+1),()=>{}));function u(){if(!n())return null;const R=new Uint8Array(n().recordLength);return R.fill(32),R}function d(R){const X=u();X&&(Ie.update(T=>{const g=T.slice();return g.splice(R+1,0,X),g}),Oe.update(T=>{const g=T.slice();return g.splice(R+1,0,{}),g}),j.set(R+1))}function I(R){Ie.update(X=>{const T=X.slice(),g=X[R];if(!g)return X;const M=new Uint8Array(g);return T.splice(R+1,0,M),T}),Oe.update(X=>{const T=X.slice();return T.splice(R+1,0,{...X[R]??{}}),T}),j.set(R+1)}function E(R){if(r().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${R+1}?`))return;Ie.update(g=>{const M=g.slice();return M.splice(R,1),M}),Oe.update(g=>{const M=g.slice();return M.splice(R,1),M});const T=R>=r().length-1?R-1:R;j.set(Math.max(0,T))}function f(){j.update(R=>Math.max(0,R-1))}function m(){j.update(R=>Math.min(r().length-1,R+1))}function A(){const R=v(P)-1;if(R<0||R>=r().length){U(P,a()+1);return}j.set(R)}var h=Yn(),p=G(B(h),2),D=_(p);ge(D,{gap:".1rem",children:(R,X)=>{var T=Un(),g=G(B(T),2);Ft(g);let M;var w=G(g,2),Z=_(w);F(w),oe(()=>{xe(g,"max",r().length),xe(g,"maxlength",r().length),M=ve(g,1,"svelte-7p234s",null,M,{invalid:v(P)<1||v(P)>r().length}),ce(Z,`/ ${r().length??""}`)}),Je("change",g,A),Xe(g,()=>v(P),ae=>U(P,ae)),N(R,T)},$$slots:{default:!0}});var b=G(D,2);ge(b,{children:(R,X)=>{var T=zn(),g=B(T);q(g,{onclick:f,[Ce()]:S=>(ie("Ir para linha anterior")||V)(S),children:(S,J)=>{sn(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var M=G(g,2);q(M,{onclick:()=>d(a()),[Ce()]:S=>(ie("Adicionar linha")||V)(S),children:(S,J)=>{rt(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var w=G(M,2);q(w,{onclick:m,[Ce()]:S=>(ie("Ir para a próxima linha")||V)(S),children:(S,J)=>{nn(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var Z=G(w,2);q(Z,{onclick:()=>I(a()),secondary:!0,[Ce()]:S=>(ie("Duplicar linha atual")||V)(S),children:(S,J)=>{on(S,{size:16,strokeWidth:3})},$$slots:{default:!0}});var ae=G(Z,2);q(ae,{onclick:()=>E(a()),danger:!0,[Ce()]:S=>(ie("Deletar linha atual")||V)(S),children:(S,J)=>{ln(S,{size:16,strokeWidth:3})},$$slots:{default:!0}}),N(R,T)},$$slots:{default:!0}});var k=G(b,2);wn(k,{}),F(p);var $=G(p,2);ve($,1,_t(["form",C]),"svelte-7p234s");var O=_($);{var L=R=>{var X=Wn();N(R,X)},W=R=>{var X=y(),T=B(X);me(T,17,()=>v(c),g=>g.name+":"+g.offset,(g,M)=>{var w=y(),Z=B(w);{var ae=S=>{{let J=de(()=>`${v(M).name} : ${v(M).pic?.raw} : [${v(M).offset}..${v(M).offset+v(M).byteLength-1}]`);Mn(S,{get name(){return v(M).name},get field(){return v(M)},get tooltipText(){return v(J)}})}};te(Z,S=>{S(ae,-1)})}N(g,w)}),N(R,X)};te(O,R=>{!n()||!o()?R(L):R(W,-1)})}F($);var Y=G($,2);xn(Y,{}),N(t,h),Q(),l()}Ze(["change"]);var qn=z('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),Kn=z('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function rs(t){var e=Kn();Ht("1uha8ag",o=>{var i=qn();be(()=>{bt.title="Home"}),N(o,i)});var n=B(e),s=_(n);en(s,{}),F(n);var a=G(n,2),r=_(a);jn(r,{}),F(a),N(t,e)}export{rs as component,ss as universal};
