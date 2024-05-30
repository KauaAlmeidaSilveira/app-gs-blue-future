import csv
import oracledb
import pandas as pd


def main():
    conexao, inst_SQL, conn = conecta_BD()
    opc = 0
    while (opc != 9 and conexao == True):
        print("1 - INSERIR DADOS ARQUIVO CSV POLUIÇÃO DE AGUA POR CIDADES")
        print("2 - INSERIR DADOS ARQUIVO CSV DESPERDICIO PLASTICO PER CAPITA")
        print("3 - EXIBIR DADOS POLUIÇÃO DE AGUA POR CIDADES")
        print("4 - EXIBIR DADOS DESPERDICIO PLASTICO PER CAPITA")
        print("5 - RELATORIO MÉDIA QUALIDADE AR E ÁGUA POR POR CIDADE E REGIÃO")
        print("6 - RELATORIO CIDADES E REGIÕES COM PIOR POLUIÇÃO DO AR E ÁGUA")
        print("7 - RELATORIO TOTAL DE LIXO PLÁSTICO ACUMULADO POR ENTIDADE E PESSOA")
        print("8 - RELATORIO MÉDIA DE LIXO PLÁSTICO MAL GERENCIADO POR PESSOAS PARA CADA ENTIDADE NO ANO")
        print("9 - SAIR")
        opc = int(input("Digite a opção desejada: "))

        if (opc == 1):
            caminho_arquivo = 'poluicao-agua-cidades.csv'
            total_linhas = sum(1 for linha in open(caminho_arquivo, encoding='utf-8'))
            with open(caminho_arquivo, mode='r', encoding='utf-8') as file:
                reader = csv.reader(file)
                next(reader)
                for i, row in enumerate(reader, start=1):
                    insercao_sql = f"INSERT INTO InformacoesPoluicao (Cidade, Regiao, Entidade, QualidadeDoAr, PoluicaoDaAgua) VALUES ('{row[0]}', '{row[1]}', '{row[2]}', {row[3]}, {row[4]})"
                    insert_tabela(inst_SQL, conn, insercao_sql)
                    print(f"Carregando dados... {round((i / total_linhas) * 100)}%")  # Atualiza a mensagem de progresso

        elif (opc == 2):
            caminho_arquivo = 'desperdicio-plastico-per-capita.csv'
            total_linhas = sum(1 for linha in open(caminho_arquivo, encoding='utf-8'))
            with open(caminho_arquivo, mode='r', encoding='utf-8') as file:
                reader = csv.reader(file)
                next(reader)
                for i, row in enumerate(reader, start=1):
                    insercao_sql = f"INSERT INTO DescartePlasticoPerCapita (Entidade, Codigo, Ano, LixoPlastico) VALUES ('{row[0]}', '{row[1]}', {row[2]}, {row[3]})"
                    insert_tabela(inst_SQL, conn, insercao_sql)
                    print(f"Carregando dados... {round((i / total_linhas) * 100)}%")

        elif (opc == 3):
            consulta_tabela(inst_SQL, "SELECT * FROM InformacoesPoluicao",
                            ["ID", "Cidade", "Regiao", "Entidade", "QualidadeDoAr", "PoluicaoDaAgua"], False)

        elif (opc == 4):
            consulta_tabela(inst_SQL, "SELECT * FROM DescartePlasticoPerCapita",
                            ["ID", "Entidade", "Codigo", "Ano", "LixoPlastico"], False)

        elif (opc == 5):
            str_consulta = """
            SELECT 
                Cidade, 
                Regiao, 
                AVG(QualidadeDoAr) AS MediaQualidadeDoAr, 
                AVG(PoluicaoDaAgua) AS MediaPoluicaoDaAgua 
            FROM 
                InformacoesPoluicao 
            GROUP BY 
                Cidade, 
                Regiao
            """
            consulta_tabela(inst_SQL, str_consulta, ["Cidade", "Regiao", "MediaQualidadeDoAr", "MediaPoluicaoDaAgua"],
                            False)
        elif (opc == 6):
            str_consulta = """
            SELECT 
                Cidade, 
                Regiao, 
                QualidadeDoAr, 
                PoluicaoDaAgua 
            FROM 
                InformacoesPoluicao 
            ORDER BY 
                QualidadeDoAr DESC, 
                PoluicaoDaAgua DESC
            """
            consulta_tabela(inst_SQL, str_consulta, ["Cidade", "Regiao", "QualidadeDoAr", "PoluicaoDaAgua"], False)
        elif (opc == 7):
            str_consulta = """
            SELECT 
                Entidade, 
                SUM(LixoPlastico) AS TotalAcumuladoLixoPlastico 
            FROM 
                DescartePlasticoPerCapita 
            GROUP BY 
                Entidade
            ORDER BY 
                TotalAcumuladoLixoPlastico DESC
            """
            consulta_tabela(inst_SQL, str_consulta, ["Entidade", "Total_Plastico_Acumulado"], False)

        elif (opc == 8):
            str_consulta = """
            SELECT 
                Entidade, 
                Ano, 
                AVG(LixoPlastico) AS MediaLixoPlasticoPorPessoa 
            FROM 
                DescartePlasticoPerCapita 
            GROUP BY 
                Entidade, 
                Ano
            """
            consulta_tabela(inst_SQL, str_consulta, ["Entidade", "Ano", "MediaLixoPlasticoPorPessoa"], False)


'''CONEXÃO BANCO DE DADOS'''
def conecta_BD():
    try:
        dnStr = oracledb.makedsn("oracle.fiap.com.br", "1521", "ORCL")
        conn = oracledb.connect(user='RM553270', password='200601', dsn=dnStr)

        inst_SQL = conn.cursor()

    except Exception as e:
        print("Erro: ", e)
        conexao = False
        inst_SQL = ""
        conn = ""
    else:
        conexao = True

    return (conexao, inst_SQL, conn)

'''INSERÇÃO DE DADOS'''
def insert_tabela(inst_SQL, conn, insercao):
    try:
        inst_SQL.execute(insercao)
        conn.commit()
    except:
        print("Erro de transação com o BD")
    else:
        print("Dados gravados com sucesso")

'''CONSULTA A TABELA'''
def consulta_tabela(inst_SQL, str_consulta, colunas, gera_txt):
    lista = []

    inst_SQL.execute(str_consulta)

    dados = inst_SQL.fetchall()

    for registro in dados:
        lista.append(registro)

    lista = [[str(item) if item is None else item for item in sublista] for sublista in lista]

    lista = sorted(lista)

    base_df = pd.DataFrame.from_records(lista, columns=colunas, index=colunas[0])

    if (base_df.empty):
        print("Não há registros cadastrados")
    else:
        if (gera_txt):
            texto = base_df.to_string()
            nome_arq = input("Digite o nome do arquivo texto a ser gerado: ")
            with open(nome_arq, "w", encoding="utf-8") as arq:
                arq.write(texto)
            print("Arquivo gerado com sucesso!")
        else:
            print(base_df)
        print("\n")


def gerar_relatorio(inst_SQL, str_relatorio, colunas, gera_json):
    lista_dados = []

    inst_SQL.execute(str_relatorio)
    dados = inst_SQL.fetchall()

    for dado in dados:
        lista_dados.append(dado)

    lista_dados = sorted(lista_dados)

    base_df = pd.DataFrame.from_records(lista_dados, columns=colunas)

    if (base_df.empty):
        print("Não há registros na tabela")
    else:
        if (gera_json):
            nome_arq = input("Digite o nome do arquivo JSON a ser gerado: ")
            base_df.reset_index(drop=True, inplace=True)  # Reseta o índice do DataFrame
            base_df.to_json(nome_arq, orient='records')
            print("Arquivo JSON gerado com sucesso!")
        else:
            print(base_df)
        print("\n")

if (__name__ == "__main__"):
    main()