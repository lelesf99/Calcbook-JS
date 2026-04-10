import{a as A,f as X,c as B,t as Je,s as se,d as Oe,b as Ne,e as me}from"../chunks/B_MQ6pLL.js";import{K as et,d as tt,aL as nt,ap as rt,h as ve,aC as st,aD as $e,g as Le,f as be,i as ot,au as at,j as we,b as Qe,c as it,a4 as ct,u as ae,aM as Me,aN as lt,B as E,aO as dt,a0 as ut,aP as ft,p as x,F as k,w as S,n as T,t as K,o as V,an as Ct,aQ as It,q as y,v as G,a6 as ue,A as pt,x as F,a7 as Ee,aR as ht,V as Rt,aS as Pt}from"../chunks/BM9RnDFQ.js";import{a as ie,b as w,p as vt,s as Z,r as J}from"../chunks/fHv9BiRk.js";import{i as oe,b as Et}from"../chunks/BOrli5kJ.js";import{l as Be,P as Re,n as Se,e as Pe,B as j,i as Te,j as At,m as _e,r as Ue,o as gt,t as ne,p as mt,a as re,h as ze,u as Dt,q as ye,v as z,b as We,k as de,I as ee,s as te,w as Ge,x as je,g as le,y as Ae}from"../chunks/CDw3VkTU.js";function Ot(t,e){let n=null,r=ve;var a;if(ve){n=ot;for(var s=at(document.head);s!==null&&(s.nodeType!==st||s.data!==t);)s=$e(s);if(s===null)Le(!1);else{var o=$e(s);s.remove(),be(o)}}ve||(a=document.head.appendChild(et()));try{tt(()=>e(a),nt|rt)}finally{r&&(Le(!0),be(n))}}function Nt(t,e,n){we(()=>{var r=Qe(()=>e(t,n?.())||{});if(r?.destroy)return()=>r.destroy()})}function Ye(t=!1){const e=it,n=e.l.u;if(!n)return;let r=()=>dt(e.s);if(t){let a=0,s={};const o=ut(()=>{let i=!1;const C=e.s;for(const R in C)C[R]!==s[R]&&(s[R]=C[R],i=!0);return i&&a++,a});r=()=>E(o)}n.b.length&&ct(()=>{Xe(e,r),Me(n.b)}),ae(()=>{const a=Qe(()=>n.m.map(lt));return()=>{for(const s of a)typeof s=="function"&&s()}}),n.a.length&&ae(()=>{Xe(e,r),Me(n.a)})}function Xe(t,e){if(t.l.s)for(const n of t.l.s)E(n);e()}const St=!0,_n=Object.freeze(Object.defineProperty({__proto__:null,prerender:St},Symbol.toStringTag,{value:"Module"}));ft();const Tt=/PIC(TURE)?\s+([A-Za-z0-9()V\.]+)/i,_t=/OCCURS\s+(\d+)\s+TIMES/i,$t=/REDEFINES\s+([A-Za-z0-9\-]+)/i;function Lt(t){if(!t)return;const e=t.toUpperCase();return e==="COMP"||e==="COMPUTATIONAL"||e==="BINARY"||e==="COMP-5"?e:e==="COMP-3"||e==="COMPUTATIONAL-3"||e==="PACKED-DECIMAL"?"COMP-3":"DISPLAY"}function xe(t){if(!t)return 0;if(/^9+$/.test(t))return t.length;const e=t.match(/^9\((\d+)\)$/);if(e)return parseInt(e[1],10)}function bt(t){const n=t.split(/\r?\n/).map(s=>s.length>6?s.slice(6):s).map(s=>s.replace(/\r$/,"")).filter(s=>s.trim().length>0).filter(s=>!s.trim().startsWith("*")),r=[];let a="";for(let s=0;s<n.length;s++){const o=n[s],i=o.trimEnd(),C=i.endsWith("-"),R=!i.endsWith(".");C||R?a+=i.replace(/-$/,""):(a+=o,r.push(a.trim()),a="")}return a.trim()&&r.push(a.trim()),r}function Mt(t){let e=t.toUpperCase().replace(".",""),n=!1;if(e.startsWith("S")&&(n=!0,e=e.slice(1)),e.startsWith("X")){const r=e.match(/X\((\d+)\)/),a=r?parseInt(r[1],10):(e.match(/X/g)||[]).length;return{raw:t,type:"ALPHA",length:a,signed:!1}}if(e.startsWith("9")){const r=e.match(/^(9+|9\(\d+\))(?:V(9+|9\(\d+\)))?$/);if(r){const i=xe(r[1]),C=xe(r[2]);return{raw:t,type:"NUMERIC",length:i+C,decimals:C||void 0,signed:n}}const a=e.split("V"),s=(a[0].match(/9/g)||[]).length,o=a[1]?(a[1].match(/9/g)||[]).length:0;return{raw:t,type:"NUMERIC",length:s+o,decimals:o||void 0,signed:n}}}function Bt(t){const e=bt(t),n=[],r=[];let a=1;for(const s of e){const o=s.trim().split(/\s+/),i=parseInt(o[0],10),C=o[1];if(Number.isNaN(i)||!C)continue;let R=C.replace(/\.$/,"");const p={level:i,name:R,isFiller:R.toUpperCase()==="FILLER",redefines:void 0,pic:void 0,occurs:void 0,children:[]},u=s.match($t);u&&(p.redefines=u[1].replace(/\.$/,""));const l=s.match(Tt);if(l){const I=Mt(l[2]);I&&(p.pic=I)}const d=s.match(_t);d&&(p.occurs={times:parseInt(d[1],10)});let c;if(l){const I=s.slice(l.index+l[0].length);let g=I.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);g?c=g[1]:(g=I.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i),g&&(c=g[1]))}else{let I=s.match(/\bUSAGE\s+(?:IS\s+)?([A-Z0-9\-]+)\b/i);I||(I=s.match(/\b(COMP-3|COMP-5|COMP|COMPUTATIONAL-3|COMPUTATIONAL|BINARY|DISPLAY)\b/i)),I&&(c=I[1])}for(c&&(p.usage=Lt(c));r.length&&r[r.length-1].level>=i;)r.pop();r.length===0?n.push(p):r[r.length-1].children.push(p),r.push(p)}return(function s(o){for(const i of o)i.isFiller&&(i.name=`FILLER-${a++}`),s(i.children)})(n),n}function Ve(t){const e=(t.usage||"DISPLAY").toUpperCase(),n=t.pic;if(!n)return 0;if(e==="DISPLAY")return n.length;if(e==="COMP"||e==="BINARY"||e==="COMP-5"){const r=n.type==="NUMERIC"?n.length:0;return r<=4?2:r<=9?4:8}if(e==="COMP-3"){const r=n.type==="NUMERIC"?n.length:0;return Math.ceil((r+1)/2)}return n.length}function yt(t){const e=new Map;(function u(l){for(const d of l)e.set(d.name,d),u(d.children)})(t);const n={};(function u(l){for(const d of l){if(d.redefines){const c=d.redefines;n[c]||=new Set([c]),n[c].add(d.name)}u(d.children)}})(t);const r={};for(const[u,l]of Object.entries(n))r[u]=Array.from(l);const a={};for(const[u,l]of Object.entries(r))for(const d of l)a[d]=u;const s=u=>{if(u.children.length&&!u.pic&&!u.redefines){let c=0;for(const g of u.children)c+=s(g);const I=u.occurs?.times??1;return c*I}const l=u.pic?Ve(u):0,d=u.occurs?.times??1;return l*d},o={},i=[];let C=0;const R=[],p=(u,l)=>{let d=l;for(const c of u){let I=d;if(c.redefines){const P=c.redefines;P in o?I=o[P]:console.warn(`REDEFINES base not found yet: ${P}. Ensure base appears before redefiner.`)}c.name in o||(o[c.name]=I);const g=a[c.name];let $=!1;g&&(R.push({group:g,member:c.name}),$=!0);const v=s(c);if(c.children.length&&!c.pic){const P=c.occurs?.times??1,O=P?v/P:v;for(let L=0;L<P;L++)p(c.children,I+L*O)}else{const P=c.occurs?.times??1,O=c.pic?Ve(c):0;for(let L=0;L<P;L++)i.push({...c,offset:I+L*O,byteLength:O,variantPath:R.length?R.slice():void 0})}$&&R.pop(),c.redefines?C=Math.max(C,I+v):(d+=v,C=Math.max(C,d))}};return p(t,0),{root:t,fieldsFlat:i,recordLength:C,redefineGroups:r,nameIndex:Object.fromEntries(e)}}const Fe={CNAB240:`      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`};function Gt(t,e=250){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>t(...r),e)}}var Xt=X('<span class="err"> </span>'),xt=X('<h3 class="svelte-122fts7">Editor Copybook</h3> <!> <textarea class="svelte-122fts7"></textarea> <div class="status"><b> </b> <!></div>',1);function Vt(t,e){x(e,!0);const n=()=>w(_e,"$model",r),[r,a]=ie();let s=ue(""),o=ue("");function i(v){try{const P=yt(Bt(v));Be(P);const O=new Uint8Array(P.recordLength);O.fill(32),At([O]),k(o,"")}catch(P){k(o,P?.message??"Erro ao processar copybook",!0)}}const C=Gt(i,300);function R(v){k(s,Fe[v]+`
`),i(E(s))}ae(()=>{if(!E(s)?.trim()){Be(null),k(o,"");return}C(E(s))});var p=xt(),u=S(T(p),2);Re(u,{children:(v,P)=>{var O=B(),L=T(O);Pe(L,17,()=>Object.keys(Fe),Te,(b,Q)=>{j(b,{onclick:()=>R(E(Q)),children:(Y,fe)=>{Ct();var ce=Je();K(()=>se(ce,E(Q))),A(Y,ce)},$$slots:{default:!0}})}),A(v,O)},$$slots:{default:!0}});var l=S(u,2);It(l);var d=S(l,2),c=y(d),I=y(c);G(c);var g=S(c,2);{var $=v=>{var P=Xt(),O=y(P,!0);G(P),K(()=>se(O,E(o))),A(v,P)};oe(g,v=>{E(o)&&v($)})}G(d),K(()=>se(I,`len: ${(n()?n().recordLength:"—")??""}`)),Se(l,()=>E(s),v=>k(s,v)),A(t,p),V(),a()}function Ft(t,e){if(!t.variantPath||t.variantPath.length===0)return!0;for(const n of t.variantPath)if((e[n.group]||n.group)!==n.member)return!1;return!0}function qe(t,e){return t.fieldsFlat.filter(n=>Ft(n,e))}const Ht=new TextEncoder,kt=new TextDecoder("ascii");function wt(t,e){const n=t.slice(e.offset,e.offset+e.byteLength),r=kt.decode(n);if(e.pic?.type==="NUMERIC"){if(e.pic.decimals){const a=e.pic.decimals;if(r.trim()==="")return"";const s=r.slice(0,r.length-a),o=r.slice(r.length-a);return`${s}.${o}`.replace(/\.$/,"")}return r.replace(/[\u0000 ]+$/g,"")}return r.replace(/[\u0000 ]+$/g,"")}function Qt(t,e,n){let r="";const a=e.byteLength;if(e.pic?.type==="NUMERIC")if(e.pic.decimals){const s=e.pic.decimals,[o,i=""]=String(n).split("."),C=e.byteLength-s,R=(o??"").replace(/\D/g,"").padStart(C," ").slice(-C),p=(i??"").replace(/\D/g,"").padEnd(s," ").slice(0,s);r=R+p}else r=String(n).replace(/\D/g,"").padStart(a," ").slice(-a);else r=String(n);t.set(Ht.encode(r.padEnd(a," ")),e.offset)}var Ut=X('<div class="field svelte-n1ol00"><input autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" class="svelte-n1ol00"/></div>');function zt(t,e){x(e,!0);const n=()=>w(ze,"$buffer",r),[r,a]=ie();let s=ue(""),o=!0;const i=`${e.field.name} : ${e.field.pic?.raw} : [${e.field.offset}..${e.field.offset+e.field.byteLength-1}]`;ae(()=>{n()&&o&&k(s,wt(n(),e.field),!0),o=!0});function C(c){o=!1,Dt(I=>{Qt(I,e.field,E(s))})}function R(){ye.set({recordIndex:pt(z),offset:e.field.offset,length:e.field.byteLength})}function p(){ye.set(null)}var u=Ut();let l;var d=y(u);Ue(d),gt(d,()=>ne(i)),G(u),K(c=>{l=mt(u,"",l,{"flex-basis":`calc(${e.field.byteLength}ch + 3.5rem)`}),re(d,"placeholder",c),re(d,"name",e.field.name),re(d,"maxlength",e.field.byteLength),re(d,"inputmode",e.field.pic?.type==="NUMERIC"?"decimal":"text")},[()=>e.field.pic?.type==="NUMERIC"?"9".repeat(e.field.byteLength):"X".repeat(e.field.byteLength)]),Ne("input",d,C),me("focus",d,R),me("blur",d,p),Se(d,()=>E(s),c=>k(s,c)),A(t,u),V(),a()}Oe(["input"]);var Wt=X("<span>Estamos trabalhando nisso...</span>");function jt(t,e){x(e,!1);const[n,r]=ie();vt(e,"field",8),Ye();var a=Wt();A(t,a),V(),r()}function Yt(t){return t()}function qt(t){t.forEach(Yt)}const Ie=[],He=[],he=[],ke=[],Ke=Promise.resolve();let De=!1;function Kt(){De||(De=!0,Ke.then(en))}function Zt(){return Kt(),Ke}function Jt(t){he.push(t)}const ge=new Set;let pe=0;function en(){do{for(;pe<Ie.length;){const t=Ie[pe];pe++,tn(t.$$)}for(Ie.length=0,pe=0;He.length;)He.pop()();for(let t=0;t<he.length;t+=1){const e=he[t];ge.has(e)||(ge.add(e),e())}he.length=0}while(Ie.length);for(;ke.length;)ke.pop()();De=!1,ge.clear()}function tn(t){if(t.fragment!==null){t.update(),qt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Jt)}}const nn={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},W=(t,e)=>new CustomEvent(t,{detail:e});function rn(t,e={}){const{root:n,rootMargin:r,threshold:a,unobserveOnEnter:s}=Object.assign(Object.assign({},nn),e);let o={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&t){const C=new IntersectionObserver((R,p)=>{R.forEach(u=>{o.y>u.boundingClientRect.y?i.vertical="up":i.vertical="down",o.x>u.boundingClientRect.x?i.horizontal="left":i.horizontal="right",o={y:u.boundingClientRect.y,x:u.boundingClientRect.x};const l={inView:u.isIntersecting,entry:u,scrollDirection:i,node:t,observer:p};t.dispatchEvent(W("inview_change",l)),t.dispatchEvent(W("change",l)),u.isIntersecting?(t.dispatchEvent(W("inview_enter",l)),t.dispatchEvent(W("enter",l)),s&&p.unobserve(t)):(t.dispatchEvent(W("inview_leave",l)),t.dispatchEvent(W("leave",l)))})},{root:n,rootMargin:r,threshold:a});return Zt().then(()=>{t.dispatchEvent(W("inview_init",{observer:C,node:t})),t.dispatchEvent(W("init",{observer:C,node:t}))}),C.observe(t),{destroy(){C.unobserve(t)}}}}var sn=X('<button type="button"><span class="row-index svelte-1c8e44s"></span> <pre> </pre></button>'),on=X('<div class="container svelte-1c8e44s"><div class="file-table svelte-1c8e44s"><div class="table-header table-row svelte-1c8e44s"><span># Registro</span></div> <!></div></div>');function an(t,e){x(e,!0);const n=()=>w(z,"$currentRecordIndex",a),r=()=>w(de,"$records",a),[a,s]=ie(),o=new TextDecoder("ascii"),i=[];let C=[];function R(){i[n()]?.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function p(c){z.set(c)}ae(()=>(C[n()]||R(),()=>{}));var u=on(),l=y(u),d=S(y(l),2);Pe(d,1,r,Te,(c,I,g)=>{var $=sn();let v;var P=y($);P.textContent=g+1;var O=S(P,2),L=y(O,!0);G(O),G($),Nt($,b=>rn?.(b)),Et($,(b,Q)=>i[Q]=b,b=>i?.[b],()=>[g]),K(b=>{v=We($,1,"table-row svelte-1c8e44s",null,v,{"current-record":n()===g}),se(L,b)},[()=>o.decode(E(I))]),me("inview_change",$,b=>C[g]=b.detail.inView),Ne("click",$,()=>p(g)),A(c,$)}),G(l),G(u),A(t,u),V(),s()}Oe(["click"]);function cn(t,e){x(e,!0);let n=J(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];ee(t,Z({name:"chevrons-left"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=B(),i=T(o);te(i,()=>e.children??F),A(a,o)},$$slots:{default:!0}})),V()}function ln(t,e){x(e,!0);let n=J(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];ee(t,Z({name:"chevrons-right"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=B(),i=T(o);te(i,()=>e.children??F),A(a,o)},$$slots:{default:!0}})),V()}var dn=X('<!> <span class="redef-value"> </span> <!>',1);function un(t,e){x(e,!1);const n=()=>w(je,"$activeVariant",a),r=()=>w(_e,"$model",a),[a,s]=ie();function o(l,d){const c=n()[l]??l,I=d.indexOf(c),g=d[(I-1+d.length)%d.length];Ge(l,g)}function i(l,d){const c=n()[l]??l,I=d.indexOf(c),g=d[(I+1)%d.length];Ge(l,g)}function C(l){return r()?qe(r(),n()).some(c=>c.variantPath?.some(I=>I.group===l)):!1}Ye();var R=B(),p=T(R);{var u=l=>{var d=B(),c=T(d);Pe(c,1,()=>Object.entries(r().redefineGroups),Te,(I,g)=>{var $=Ee(()=>ht(E(g),2));let v=()=>E($)[0],P=()=>E($)[1];var O=B(),L=T(O);{var b=Y=>{Re(Y,{children:(fe,ce)=>{var Ce=B(),f=T(Ce);{var _=h=>{var m=dn(),H=T(m);j(H,{onclick:()=>o(v(),P()),children:(M,Ze)=>{cn(M,{size:16,strokeWidth:3})},$$slots:{default:!0}});var U=S(H,2),q=y(U,!0);G(U);var D=S(U,2);j(D,{onclick:()=>i(v(),P()),children:(M,Ze)=>{ln(M,{size:16,strokeWidth:3})},$$slots:{default:!0}}),K(()=>se(q,n()[v()]??v())),A(h,m)},N=Ee(()=>C(v()));oe(f,h=>{E(N)&&h(_)})}A(fe,Ce)},$$slots:{default:!0}})},Q=Ee(()=>P().length>1&&C(v()));oe(L,Y=>{E(Q)&&Y(b)})}A(I,O)}),A(l,d)};oe(p,l=>{r()&&l(u)})}A(t,R),V(),s()}function fn(t,e){x(e,!0);let n=J(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];ee(t,Z({name:"arrow-up-to-line"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=B(),i=T(o);te(i,()=>e.children??F),A(a,o)},$$slots:{default:!0}})),V()}function Cn(t,e){x(e,!0);let n=J(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ee(t,Z({name:"plus"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=B(),i=T(o);te(i,()=>e.children??F),A(a,o)},$$slots:{default:!0}})),V()}function In(t,e){x(e,!0);let n=J(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];ee(t,Z({name:"arrow-down-to-line"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=B(),i=T(o);te(i,()=>e.children??F),A(a,o)},$$slots:{default:!0}})),V()}function pn(t,e){x(e,!0);let n=J(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];ee(t,Z({name:"copy"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=B(),i=T(o);te(i,()=>e.children??F),A(a,o)},$$slots:{default:!0}})),V()}function hn(t,e){x(e,!0);let n=J(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ee(t,Z({name:"trash"},()=>n,{get iconNode(){return r},children:(a,s)=>{var o=B(),i=T(o);te(i,()=>e.children??F),A(a,o)},$$slots:{default:!0}})),V()}var Rn=X('<label for="recInput" class="svelte-7p234s">Registro</label> <input type="number" name="recInput" id="recInput" min="1"/> <span id="recLenSpan" class="svelte-7p234s"> </span>',1),Pn=X("<!> <!> <!> <!> <!>",1),vn=X('<div class="muted">Nenhum modelo ativo</div>'),En=X('<h3 class="svelte-7p234s">Editor Arquivo</h3> <div class="controls svelte-7p234s"><!> <!> <!></div> <div class="form svelte-7p234s"><!></div> <!>',1);function An(t,e){x(e,!0);const n=()=>w(_e,"$model",i),r=()=>w(ze,"$buffer",i),a=()=>w(je,"$activeVariant",i),s=()=>w(z,"$currentRecordIndex",i),o=()=>w(de,"$records",i),[i,C]=ie();let R=ue(Rt([])),p=ue(1);ae(()=>(k(R,n()&&r()?qe(n(),a()):[],!0),k(p,s()+1),()=>{}));function u(){if(!n())return null;const f=new Uint8Array(n().recordLength);return f.fill(32),f}function l(f){const _=u();_&&(de.update(N=>{const h=N.slice();return h.splice(f+1,0,_),h}),Ae.update(N=>{const h=N.slice();return h.splice(f+1,0,{}),h}),z.set(f+1))}function d(f){de.update(_=>{const N=_.slice(),h=_[f];if(!h)return _;const m=new Uint8Array(h);return N.splice(f+1,0,m),N}),Ae.update(_=>{const N=_.slice();return N.splice(f+1,0,{..._[f]??{}}),N}),z.set(f+1)}function c(f){if(o().length===1){alert("Não é possível remover o último registro.");return}if(!confirm(`Deseja remover o registro ${f+1}?`))return;de.update(h=>{const m=h.slice();return m.splice(f,1),m}),Ae.update(h=>{const m=h.slice();return m.splice(f,1),m});const N=f>=o().length-1?f-1:f;z.set(Math.max(0,N))}function I(){z.update(f=>Math.max(0,f-1))}function g(){z.update(f=>Math.min(o().length-1,f+1))}function $(){const f=E(p)-1;if(f<0||f>=o().length){k(p,s()+1);return}z.set(f)}var v=En(),P=S(T(v),2),O=y(P);Re(O,{gap:".1rem",children:(f,_)=>{var N=Rn(),h=S(T(N),2);Ue(h);let m;var H=S(h,2),U=y(H);G(H),K(()=>{re(h,"max",o().length),re(h,"maxlength",o().length),m=We(h,1,"svelte-7p234s",null,m,{invalid:E(p)<1||E(p)>o().length}),se(U,`/ ${o().length??""}`)}),Ne("change",h,$),Se(h,()=>E(p),q=>k(p,q)),A(f,N)},$$slots:{default:!0}});var L=S(O,2);Re(L,{children:(f,_)=>{var N=Pn(),h=T(N);j(h,{onclick:I,[le()]:D=>(ne("Ir para linha anterior")||F)(D),children:(D,M)=>{fn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var m=S(h,2);j(m,{onclick:()=>l(s()),[le()]:D=>(ne("Adicionar linha")||F)(D),children:(D,M)=>{Cn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var H=S(m,2);j(H,{onclick:g,[le()]:D=>(ne("Ir para a próxima linha")||F)(D),children:(D,M)=>{In(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var U=S(H,2);j(U,{onclick:()=>d(s()),secondary:!0,[le()]:D=>(ne("Duplicar linha atual")||F)(D),children:(D,M)=>{pn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}});var q=S(U,2);j(q,{onclick:()=>c(s()),danger:!0,[le()]:D=>(ne("Deletar linha atual")||F)(D),children:(D,M)=>{hn(D,{size:16,strokeWidth:3})},$$slots:{default:!0}}),A(f,N)},$$slots:{default:!0}});var b=S(L,2);un(b,{}),G(P);var Q=S(P,2),Y=y(Q);{var fe=f=>{var _=vn();A(f,_)},ce=f=>{var _=B(),N=T(_);Pe(N,17,()=>E(R),h=>h.name+":"+h.offset,(h,m)=>{var H=B(),U=T(H);{var q=M=>{jt(M,{get field(){return E(m)}})},D=M=>{zt(M,{get field(){return E(m)}})};oe(U,M=>{E(m).usage==="COMP-3"||E(m).usage==="COMP"||E(m).usage==="BINARY"||E(m).usage==="COMP-5"?M(q):M(D,-1)})}A(h,H)}),A(f,_)};oe(Y,f=>{!n()||!r()?f(fe):f(ce,-1)})}G(Q);var Ce=S(Q,2);an(Ce,{}),A(t,v),V(),C()}Oe(["change"]);var gn=X('<meta name="description" content="Calcbook JS - Editor de arquivos via copybook"/>'),mn=X('<section class="copybook-area svelte-1uha8ag"><!></section> <section class="arquivo-area svelte-1uha8ag"><!></section>',1);function $n(t){var e=mn();Ot("1uha8ag",o=>{var i=gn();we(()=>{Pt.title="Home"}),A(o,i)});var n=T(e),r=y(n);Vt(r,{}),G(n);var a=S(n,2),s=y(a);An(s,{}),G(a),A(t,e)}export{$n as component,_n as universal};
