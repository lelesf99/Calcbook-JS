export const PRESET_COPYBOOKS = {
	CNAB240: `      *----------------------------CNAB240-----------------------------*
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
           03  FILLER                   PIC X(205).`,
	TESTE: `01  TEST-RECORD.
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
`
};
