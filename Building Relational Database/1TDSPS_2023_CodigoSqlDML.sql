-- Kaua Almeida Silveira - RM 552618
-- Gustavo Araújo Maia - RM 553270
-- Rafael Vida Fernandes - RM 553721

DELETE FROM TB_INSTITUICAO;
DELETE FROM TB_USUARIO;
DELETE FROM TB_ENDERECO;
DELETE FROM TB_FONTE_POLUICAO;
DELETE FROM TB_REPORTE;
DELETE FROM TB_FEEDBACK;

--------------------- INSERTS ---------------------

-- Inserts na tabela TB_INSTITUICAO
INSERT INTO TB_INSTITUICAO (NOME, EMAIL, TELEFONE) VALUES ('Instituto de Pesquisa Ambiental', 'contato@ipambiental.org', '(11) 98765-4321');
INSERT INTO TB_INSTITUICAO (NOME, EMAIL, TELEFONE) VALUES ('Agência de Proteção ao Meio Ambiente', 'contato@apma.org', '(21) 99876-5432');
INSERT INTO TB_INSTITUICAO (NOME, EMAIL, TELEFONE) VALUES ('Fórum de Sustentabilidade', 'contato@fsustentabilidade.org', '(31) 98765-1234');
INSERT INTO TB_INSTITUICAO (NOME, EMAIL, TELEFONE) VALUES ('Rede de Monitoramento Ambiental', 'contato@rma.org', '(41) 99876-2345');
INSERT INTO TB_INSTITUICAO (NOME, EMAIL, TELEFONE) VALUES ('Centro de Estudos Ecológicos', 'contato@ceecologia.org', '(51) 98765-3456');

-- Inserts na tabela TB_USUARIO
INSERT INTO TB_USUARIO (NOME, EMAIL, TELEFONE) VALUES ('Ana Silva', 'ana.silva@gmail.com', '(11) 91234-5678');
INSERT INTO TB_USUARIO (NOME, EMAIL, TELEFONE) VALUES ('Bruno Costa', 'bruno.costa@hotmail.com', '(21) 92345-6789');
INSERT INTO TB_USUARIO (NOME, EMAIL, TELEFONE) VALUES ('Carla Souza', 'carla.souza@yahoo.com', '(31) 93456-7890');
INSERT INTO TB_USUARIO (NOME, EMAIL, TELEFONE) VALUES ('Daniel Oliveira', 'daniel.oliveira@outlook.com', '(41) 94567-8901');
INSERT INTO TB_USUARIO (NOME, EMAIL, TELEFONE) VALUES ('Eduarda Pereira', 'eduarda.pereira@icloud.com', '(51) 95678-9012');

-- Inserts na tabela TB_ENDERECO
INSERT INTO TB_ENDERECO (ENDERECO, BAIRRO, CIDADE, ESTADO, CEP, PAIS, LAT, LNG) VALUES ('Av. Paulista, 1000', 'Bela Vista', 'São Paulo', 'SP', '01310-100', 'Brasil', '-23.561684', '-46.656139');
INSERT INTO TB_ENDERECO (ENDERECO, BAIRRO, CIDADE, ESTADO, CEP, PAIS, LAT, LNG) VALUES ('R. Voluntários da Pátria, 200', 'Botafogo', 'Rio de Janeiro', 'RJ', '22270-010', 'Brasil', '-22.950819', '-43.184331');
INSERT INTO TB_ENDERECO (ENDERECO, BAIRRO, CIDADE, ESTADO, CEP, PAIS, LAT, LNG) VALUES ('Av. Afonso Pena, 300', 'Centro', 'Belo Horizonte', 'MG', '30130-003', 'Brasil', '-19.919140', '-43.938659');
INSERT INTO TB_ENDERECO (ENDERECO, BAIRRO, CIDADE, ESTADO, CEP, PAIS, LAT, LNG) VALUES ('R. XV de Novembro, 400', 'Centro', 'Curitiba', 'PR', '80020-310', 'Brasil', '-25.428356', '-49.273251');
INSERT INTO TB_ENDERECO (ENDERECO, BAIRRO, CIDADE, ESTADO, CEP, PAIS, LAT, LNG) VALUES ('Av. Ipiranga, 500', 'Cidade Baixa', 'Porto Alegre', 'RS', '90160-093', 'Brasil', '-30.039298', '-51.220703');

-- Inserts na tabela TB_FONTE_POLUICAO
INSERT INTO TB_FONTE_POLUICAO (TIPO, DESCRICAO) VALUES ('Industrial', 'Emissões de fábricas e indústrias');
INSERT INTO TB_FONTE_POLUICAO (TIPO, DESCRICAO) VALUES ('Veicular', 'Emissões de veículos automotores');
INSERT INTO TB_FONTE_POLUICAO (TIPO, DESCRICAO) VALUES ('Doméstica', 'Resíduos domésticos, como lixo e esgoto');
INSERT INTO TB_FONTE_POLUICAO (TIPO, DESCRICAO) VALUES ('Agrícola', 'Uso de pesticidas e fertilizantes');
INSERT INTO TB_FONTE_POLUICAO (TIPO, DESCRICAO) VALUES ('Comercial', 'Resíduos gerados por estabelecimentos comerciais');

-- Inserts na tabela TB_REPORTE
INSERT INTO TB_REPORTE (DESCRICAO, DATA, HORA, URGENCIA, STATUS, IMG_URL, ENDERECO_ID, ID_USUARIO, FONTE_POLUICAO_ID) VALUES ('Vazamento de óleo em área industrial', TO_DATE('2024-01-10', 'YYYY-MM-DD'), TO_TIMESTAMP('2024-01-10 08:30:00', 'YYYY-MM-DD HH24:MI:SS'), 'Alta', 'Aberto', 'https://exemplo.com/img1.jpg', 1, 1, 1);
INSERT INTO TB_REPORTE (DESCRICAO, DATA, HORA, URGENCIA, STATUS, IMG_URL, ENDERECO_ID, ID_USUARIO, FONTE_POLUICAO_ID) VALUES ('Queima de resíduos em terreno baldio', TO_DATE('2024-02-15', 'YYYY-MM-DD'), TO_TIMESTAMP('2024-02-15 14:45:00', 'YYYY-MM-DD HH24:MI:SS'), 'Média', 'Fechado', 'https://exemplo.com/img2.jpg', 2, 2, 3);
INSERT INTO TB_REPORTE (DESCRICAO, DATA, HORA, URGENCIA, STATUS, IMG_URL, ENDERECO_ID, ID_USUARIO, FONTE_POLUICAO_ID) VALUES ('Fumaça excessiva de veículos na avenida principal', TO_DATE('2024-03-20', 'YYYY-MM-DD'), TO_TIMESTAMP('2024-03-20 09:15:00', 'YYYY-MM-DD HH24:MI:SS'), 'Baixa', 'Aberto', 'https://exemplo.com/img3.jpg', 3, 3, 2);
INSERT INTO TB_REPORTE (DESCRICAO, DATA, HORA, URGENCIA, STATUS, IMG_URL, ENDERECO_ID, ID_USUARIO, FONTE_POLUICAO_ID) VALUES ('Descarte irregular de lixo doméstico', TO_DATE('2024-04-25', 'YYYY-MM-DD'), TO_TIMESTAMP('2024-04-25 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'Alta', 'Fechado', 'https://exemplo.com/img4.jpg', 4, 4, 3);
INSERT INTO TB_REPORTE (DESCRICAO, DATA, HORA, URGENCIA, STATUS, IMG_URL, ENDERECO_ID, ID_USUARIO, FONTE_POLUICAO_ID) VALUES ('Uso excessivo de pesticidas em área rural', TO_DATE('2024-05-30', 'YYYY-MM-DD'), TO_TIMESTAMP('2024-05-30 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'Média', 'Aberto', 'https://exemplo.com/img5.jpg', 5, 5, 4);

-- Inserts na tabela TB_FEEDBACK
INSERT INTO TB_FEEDBACK (DATA, STATUS, DESCRICAO, RESPONSAVEL, IMG_URL, REPORTE_ID, INSTITUICAO_ID) VALUES (CURRENT_TIMESTAMP, 'Resolvido', 'Medidas de contenção implementadas', 'Carlos Almeida', 'https://exemplo.com/feedback1.jpg', 1, 1);
INSERT INTO TB_FEEDBACK (DATA, STATUS, DESCRICAO, RESPONSAVEL, IMG_URL, REPORTE_ID, INSTITUICAO_ID) VALUES (CURRENT_TIMESTAMP, 'Pendente', 'Aguardando avaliação do impacto', 'Mariana Lima', 'https://exemplo.com/feedback2.jpg', 2, 2);
INSERT INTO TB_FEEDBACK (DATA, STATUS, DESCRICAO, RESPONSAVEL, IMG_URL, REPORTE_ID, INSTITUICAO_ID) VALUES (CURRENT_TIMESTAMP, 'Em andamento', 'Análise de amostras coletadas', 'Pedro Silva', 'https://exemplo.com/feedback3.jpg', 3, 3);
INSERT INTO TB_FEEDBACK (DATA, STATUS, DESCRICAO, RESPONSAVEL, IMG_URL, REPORTE_ID, INSTITUICAO_ID) VALUES (CURRENT_TIMESTAMP, 'Resolvido', 'Área limpa e monitorada', 'Juliana Costa', 'https://exemplo.com/feedback4.jpg', 4, 4);
INSERT INTO TB_FEEDBACK (DATA, STATUS, DESCRICAO, RESPONSAVEL, IMG_URL, REPORTE_ID, INSTITUICAO_ID) VALUES (CURRENT_TIMESTAMP, 'Pendente', 'Programação de ação conjunta', 'Rodrigo Oliveira', 'https://exemplo.com/feedback5.jpg', 5, 5);


-- RELATÓRIOS --

-- Relatório de Usuários ordenados pelo nome em ordem crescente
SELECT ID, NOME, EMAIL, TELEFONE
FROM TB_USUARIO
ORDER BY NOME ASC;

-- Relatório de Reportes com data entre 2024-02-01 e 2024-05-01 e descrição contendo a palavra 'lixo'
SELECT ID, DESCRICAO, DATA, URGENCIA, STATUS
FROM TB_REPORTE
WHERE DATA BETWEEN TO_DATE('2024-01-01', 'YYYY-MM-DD') AND TO_DATE('2024-05-01', 'YYYY-MM-DD')
AND STATUS LIKE '%Fechado%';

-- Relatório de Instituições com o nome em maiúsculas
SELECT ID, UPPER(NOME) AS NOME, EMAIL, TELEFONE
FROM TB_INSTITUICAO;

-- Relatório de Feedbacks com o ano da data de criação
SELECT ID, EXTRACT(YEAR FROM DATA) AS ANO, STATUS, DESCRICAO, RESPONSAVEL
FROM TB_FEEDBACK;

-- Relatório de contagem de Reportes por urgência
SELECT URGENCIA, COUNT(*) AS TOTAL_REPORTES
FROM TB_REPORTE
GROUP BY URGENCIA;

-- Relatório de Reportes com detalhes do usuário e do endereço
SELECT R.ID, R.DESCRICAO, R.DATA, R.URGENCIA, E.ENDERECO, E.CIDADE
FROM TB_REPORTE R
JOIN TB_ENDERECO E ON R.ENDERECO_ID = E.ID;

-- Relatório de Reportes que não possuem feedbacks
SELECT R.ID, R.DESCRICAO, R.DATA, R.URGENCIA, R.STATUS
FROM TB_REPORTE R
LEFT JOIN TB_FEEDBACK F ON R.ID = F.REPORTE_ID
WHERE F.ID IS NULL;

COMMIT;







