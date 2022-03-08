-- 1

SELECT * 
FROM categorias;

-- 2
SELECT 
	CategoriaNome,
	Descricao
FROM categorias;

-- 3 

SELECT ProdutoNome 
FROM produtos ; 

-- 4 

SELECT *
FROM produtos
WHERE Descontinuado = '1' ; 

-- 5 

SELECT 
	ProdutoNome,
    ProvedorID
FROM produtos 
WHERE ProvedorID = '8' ;

-- 6 

SELECT 
	ProdutoNome,
    PrecoUnitario
FROM produtos
WHERE PrecoUnitario BETWEEN 10 AND 22 ; 

-- 7 

SELECT 
	ProdutoNome,
    UnidadesEstoque,
    NivelReabastecimento
FROM produtos 
WHERE UnidadesEstoque < NivelReabastecimento ; 

-- 8

SELECT *
FROM produtos 
WHERE UnidadesEstoque < NivelReabastecimento
AND UnidadesPedidas = '0' ; 


-- clientes

-- 1

SELECT 
	Empresa,
    Contato, 
    Titulo, 
    Pais
FROM clientes
ORDER BY Pais ASC ; 

-- 2

SELECT *
FROM clientes
WHERE Titulo = 'Owner' ; 

-- 3 

SELECT *
FROM clientes
WHERE Empresa LIKE 'C%' ; 

-- Faturas 

-- 1 

SELECT *
FROM faturas
ORDER BY DataFatura ASC ; 

-- 2 

SELECT * 
FROM faturas 
WHERE PaisEnvio = 'USA'
AND FormaEnvio <> '3' ; 

-- 3
SELECT * 
FROM faturas 
WHERE ClienteID  = 'GOURL' ;

-- 4

SELECT*
FROM faturas 
WHERE EmpregadoID in (2, 3, 5, 8, 9)  ; 

-- 5 

SELECT 
	(PrecoUnitario*Quantidade) AS Total
FROM detalhefatura  ;


-- 6

SELECT *
FROM detalhefatura; 


-- 7 


SELECT *,
	(PrecoUnitario*Quantidade) AS Total
FROM detalhefatura 
GROUP BY FaturaId
ORDER BY Total DESC ;


-- Parte II Produtos

-- 1 


SELECT *
FROM produtos 
ORDER BY PrecoUnitario DESC ; 

-- 2 

SELECT *
from produtos 
ORDER BY  PrecoUnitario DESC LIMIT 5; 

-- 3 

SELECT *
FROM produtos 
ORDER BY UnidadesEstoque DESC LIMIT 10 ; 

-- 4 

SELECT 
	 min(PrecoUnitario) AS barato,
     max(PrecoUnitario) AS Caro
FROM produtos; 

-- 5

SELECT *
FROM produtos
WHERE UnidadesPedidas = '0' ; 

-- 6 

SELECT *
FROM produtos 
WHERE ProvedorID IN ( 3, 6, 13 );

-- 7 

SELECT
	UnidadesEstoque AS qtd,
    ProdutoID
from produtos ;



-- Detalhe Fatura


-- 1


SELECT 
	FaturaID,
    ProdutoID,
    Quantidade
FROM detalhefatura ; 


-- 2 


SELECT 
	FaturaID,
    ProdutoID,
    Quantidade
FROM detalhefatura 
ORDER BY Quantidade DESC;

-- 3 


SELECT 
	FaturaID,
    ProdutoID,
    Quantidade
FROM detalhefatura 
WHERE Quantidade BETWEEN 50 AND 100;  

-- 4 

SELECT 
	FaturaID AS Número_da_fatura,
    ProdutoID AS Produtos,
	(PrecoUnitario*Quantidade) AS Total
FROM detalhefatura;
    

-- EXTRAS

select *
from faturas 
where EmpregadoID like '5' ; 


