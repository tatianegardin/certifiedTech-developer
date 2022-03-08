# Autor: Tatiane L. Gardin Turma 9nt. 2021
# 22/09/2021
# V1
# Em um laboratório de prótese dentária nós trabalhamos diretamente com o dentista, excluindo qualquer conexão com o paciente, sendo assim descartamos informações pessoais do mesmo, sua identicação é através do dentista.
# Se caso aconteça de um paciente optar em passar com outro dentista, teríamos que criar aquele ID_Paciente novamente, com a referencia do novo dentista que irá prestar o serviço. 
# As notas são criadas para cada dentista efetuar o pagamento no dia do mês fixado, sendo acrescentada nela os trabalhos efetuados no decorrer do mês. 
# Os trabalhos são os serviços disponibilizados pelo laboratório, muitas vezes um pedido pode haver mais de um trabalho, alguns serviços são feitos em mais de uma etapa, por exemplo: Primeiro faremos um copping metálico, nisso o dentista efetuará uma prova, para podermos passar para a próxima etapa, que no caso seria aplicação de porcelana ocorrendo assim a finalização da peça protética. 
# Não são todos os trabalhos que precisa ser dividio em etapas, existem trabalhos feitos sem efetuar uma prova, como por exemplo, laminado/lente de contato ou coroa total em emax. 

-- Criação banco de dados Laborflex


DROP DATABASE Laborflex;
CREATE SCHEMA IF NOT EXISTS Laborflex;
USE Laborflex;



-- Criação Tabela Especialidades 

CREATE TABLE Especialidades (
    ID_Especialidades INT AUTO_INCREMENT NOT NULL,
    Descricao VARCHAR(100),
    PRIMARY KEY (ID_Especialidades)
);

-- Criação da Tabela Dentistas 

CREATE TABLE Dentistas (
    ID_Dentistas INT AUTO_INCREMENT NOT NULL,
    Nome VARCHAR(100),
    Sobrenome VARCHAR(100),
    ID_Especialidades INT,
    N_CRO VARCHAR(10),
    CPF VARCHAR(11),
    PRIMARY KEY (ID_Dentistas),
    CONSTRAINT FK_ID_Especialidades FOREIGN KEY (ID_Especialidades)
        REFERENCES Laborflex.Especialidades (ID_Especialidades)
);


-- Criação da tabela Endereço

CREATE TABLE Endereco (
    ID_Endereco INT AUTO_INCREMENT NOT NULL,
    ID_Dentistas INT,
    Logadouro VARCHAR(50),
    Numero VARCHAR(20),
    Bairro VARCHAR(50),
    Complemento VARCHAR(20),
    Cidade VARCHAR(50),
    Estado CHAR(2),
    CEP INT,
    PRIMARY KEY (ID_Endereco),
    CONSTRAINT FK_ID_Dentistas FOREIGN KEY (ID_Dentistas)
        REFERENCES Laborflex.Dentistas (ID_Dentistas)
);

-- Criação da tabela Telefones 
    
CREATE TABLE Telefones (
    ID_Telefones INT AUTO_INCREMENT NOT NULL,
    ID_Dentistas INT,
    DDD TINYINT,
    Telefone VARCHAR(10),
    PRIMARY KEY (ID_Telefones),
    CONSTRAINT FK_ID_DentistasTel FOREIGN KEY (ID_Dentistas)
        REFERENCES Laborflex.Dentistas (ID_Dentistas)
);

-- Criação da tabela Pacientes


CREATE TABLE Pacientes (
    ID_Pacientes INT AUTO_INCREMENT NOT NULL,
    ID_Dentistas INT,
    Nome VARCHAR(100),
    Sobrenome VARCHAR(100),
    Dt_Nascimento DATE,
    Escala_Cor VARCHAR(15),
    Sexo VARCHAR(20),
    Formato_Rosto VARCHAR(20),
    PRIMARY KEY (ID_Pacientes),
    CONSTRAINT FK_Dentistas_Pacientes FOREIGN KEY (ID_Dentistas)
        REFERENCES Laborflex.Dentistas (ID_Dentistas)
);

-- Criação da tabela Trabalhos 

CREATE TABLE Trabalhos (
    ID_Trabalhos INT AUTO_INCREMENT NOT NULL,
    Descricao VARCHAR(255),
    Valor DECIMAL(7 , 2 ),
    PRIMARY KEY (ID_Trabalhos)
);

-- Criação da tabela Itens Pedido

CREATE TABLE Itens_Pedido (
    ID_Itens_Pedido INT AUTO_INCREMENT NOT NULL,
    ID_Trabalhos INT,
    Dt_Entrada DATE,
    Dt_Prevista DATE,
    Dt_Solicitada DATE,
    Valor DECIMAL(7 , 2 ),
    PRIMARY KEY (ID_Itens_Pedido),
    CONSTRAINT FK_ID_Trabalho FOREIGN KEY (ID_Trabalhos)
        REFERENCES Laborflex.Trabalhos (ID_Trabalhos)
);


    
-- Criação da tabela Pedido

CREATE TABLE Pedido (
    ID_Pedido INT AUTO_INCREMENT NOT NULL,
    ID_Itens_Pedido INT,
    ID_Pacientes INT,
    Valor DECIMAL(7 , 2 ),
    PRIMARY KEY (ID_Pedido),
    CONSTRAINT FK_ID_Itens_Pedido FOREIGN KEY (ID_Itens_Pedido)
        REFERENCES Laborflex.Itens_Pedido (ID_Itens_Pedido),
    CONSTRAINT FK_ID_Paciente FOREIGN KEY (ID_Pacientes)
        REFERENCES Laborflex.Pacientes (ID_Pacientes)
);


-- Criação da tabela Nota Fiscal
  
CREATE TABLE Nota_Fiscal (
    ID_Nota_Fiscal INT AUTO_INCREMENT NOT NULL,
    ID_Dentistas INT,
    Valor DECIMAL(7 , 2 ),
    Status_Pagamento TINYINT,
    PRIMARY KEY (ID_Nota_Fiscal),
    CONSTRAINT FK_ID_Dentistas_Nota FOREIGN KEY (ID_Dentistas)
        REFERENCES Laborflex.Dentistas (ID_Dentistas)
);


-- Criação da tabela Itens da Nota Fiscal

CREATE TABLE Itens_Nota_Fiscal (
    ID_Itens_Nota INT AUTO_INCREMENT NOT NULL,
    ID_Nota_Fiscal INT,
    ID_Pedido INT,
    Descricao VARCHAR(250),
    Valor DECIMAL(7 , 2 ),
    PRIMARY KEY (ID_Itens_Nota),
    CONSTRAINT FK_ID_Nota_Fiscal FOREIGN KEY (ID_Nota_Fiscal)
        REFERENCES Laborflex.Nota_Fiscal (ID_Nota_Fiscal),
    CONSTRAINT FK_ID_Pedido FOREIGN KEY (ID_Pedido)
        REFERENCES Laborflex.Pedido (ID_Pedido)
);



-- Inserção dos valores na tabela Especialidades 

 INSERT INTO Especialidades VALUES 
	(null,'Implantodontista'),
	(null,'Periodontista'),
	(null,'Protesista'),
	(null, 'Odontopediatra');


-- Inserção de valores na tabela Dentistas

INSERT INTO Dentistas VALUES
	(null, 'Daiane', 'Bueno', '1', '105.323', '12547896325'),
	(null, 'Daniel', 'Ferreira', '1', '103.232', '36256698547'),
    (null, 'Elisa', 'Fernandes', '3', '305,236', '36521441258') ; 
    
    
-- Inserção de valores na tabela Endereço
  
INSERT INTO Endereco VALUES
		(NULL, '1', 'Rua Zíneas', '25', 'Jardim das Industrias', 'Sala 04', 'São José dos Campos', 'SP', '12240350'),
		(NULL, '2', 'Rua Bacabal', '910', 'Parque Industrial', 'casa', 'São José dos Campos', 'SP', '12235680'),
        (NULL, '3', 'Rua Domingos Farzes de Almeida', '18', 'Conj. Residencial Trinta e Um de Março', 'casa', 'São José dos Campos', 'SP', '12237120');
        
        
-- Inserçao de valores na tabela Telefones 

INSERT INTO Telefones VALUES 
	(NULL, 1, '12', '981437400'),
    (NULL, 2, '12', '39337366'),
    (NULL, 3, '12', '39317094') ; 
    

-- Inserção de valores na tabela Pacientes
  
INSERT INTO Pacientes VALUES 
	(NULL, '1', 'Daniel', 'Batata', '1991-09-01', 'A1', 'Masculino', 'Oval'),
    (NULL, '1', 'Daniel', 'Banana', '1981-08-11', 'A3,5', 'Masculino', 'Quadrado'),
    (NULL, '2', 'Maria', 'Benedita', '1955-04-21', 'C3', 'Feminino', 'Oval'),
    (NULL, '2', 'Lucas', 'Arruda', '1991-03-22', 'A3,5', 'Masculino', 'Redondo'),
	(NULL, '3', 'Matheus', 'Negrão', '1995-02-07', 'B1', 'Masculino', 'Quadrado'),
    (NULL, '3', 'Wilson', 'Felizardo', '1975-02-17', 'C3', 'Masculino', 'Triangular');
    
-- Inserção de valores na tabela Trabalhos
  
  INSERT INTO Trabalhos VALUES
	(NULL, 'Copping metalico', '160.00'),
    (NULL, 'Coroa total em EMAX', '320.00'),
    (NULL, 'Copping dissilicato de litio', '180.00'),
    (NULL, 'Aplicação de porcelana', '166.00'),
    (NULL, 'Onlay,Inlay metálica', '190.00'),
    (NULL, 'Onlay, Inlay em EMAX', '320.00'),
    (NULL, 'Núcleo Ag', '108.00'),
    (NULL, 'Núcleo Ag', '18.00'),
    (NULL, 'Laminado ou Lente de contato', '360.00'),
    (NULL, 'Coroa total em resina foto', '203.00'),
    (NULL, 'Copping sobre implante', '186.00');
    
-- Inserção de valores na tabela Itens do Pedido

INSERT INTO Itens_Pedido VALUES
	(NULL,'2', '2021-09-15', '2021-09-27', '2021-09-20', '320.00'),
	(NULL,'5', '2021-09-15', '2021-09-27', '2021-09-28', '190.00'),
    (NULL,'1', '2021-09-15', '2021-09-27', '2021-09-27', '160.00'),
    (NULL,'2', '2021-09-15', '2021-09-27', '2021-09-30', '320.00');
    

-- Inserção de valores na tabela Pedido

INSERT INTO Pedido VALUES
	(null, '1', '2', '320.00'),
    (null, '2', '3', '190.00'),
    (null, '3', '1', '160.00'),
    (null, '4', '6', '320.00') ; 
    
-- Atualização de dados na coluna Sobrenome da tabela Pacientes 

-- UPDATE 1
UPDATE Pacientes 
SET 
    Sobrenome = 'Sângelo'
WHERE
    ID_Pacientes = '1';

-- UPDATE 2

UPDATE Pacientes 
SET 
    Sobrenome = 'Passos'
WHERE
    ID_Pacientes = '2' ;
    

-- Exclusão de dados errados na tabela Trabalhos

DELETE FROM Trabalhos 
WHERE
    ID_Trabalhos = '8';
    
    
-- Relatórios select 


-- Select Dentistas 
SELECT 
    Nome, 
    Sobrenome, 
    N_CRO
FROM
    Dentistas ;
    
    
-- Select Pacientes
SELECT 
    Nome, 
    Sobrenome, 
    Escala_Cor,
    Sexo,
    Formato_Rosto
FROM
    Pacientes;
    

-- Select Trabalhos 
SELECT 
    Descricao, 
    Valor
FROM
    Trabalhos ;
    
  
-- INNER JOIN

SELECT 
    i.Dt_Entrada,
    i.Dt_Prevista, 
    i.Dt_Solicitada, 
    t.descricao
FROM
    Itens_Pedido AS i
        INNER JOIN
    Trabalhos AS t ON i.ID_Trabalhos = t.ID_Trabalhos
GROUP BY t.descricao ;
	


    

