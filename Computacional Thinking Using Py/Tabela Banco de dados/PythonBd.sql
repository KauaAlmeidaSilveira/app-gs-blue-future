CREATE TABLE InformacoesPoluicao (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Cidade VARCHAR2(100),
    Regiao VARCHAR2(50),
    Entidade VARCHAR2(100),
    QualidadeDoAr NUMBER,
    PoluicaoDaAgua NUMBER
);

CREATE TABLE DescartePlasticoPerCapita (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Entidade VARCHAR2(100),
    Codigo VARCHAR2(100),
    Ano INT,
    LixoPlastico NUMBER
);