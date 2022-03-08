USE musimundos ; 


-- Exercicio 1 

CREATE VIEW Faturas_Nacionais AS 
	SELECT
        clientes.nome,
        clientes.sobrenome,
		faturas.id,
        faturas.data_fatura,
        faturas.id_cliente,
        faturas.valor_total,
        faturas.pais_cobranca
	FROM faturas 
    INNER JOIN clientes ON faturas.id_cliente = clientes.id 
    WHERE faturas.pais_cobranca = 'Argentina' 
    ORDER BY faturas.pais_cobranca; 

    
    SELECT *
    from faturas ; 
        SELECT *
    from clientes ; 
    
    
    SELECT * FROM Faturas_Nacionais ; 
    
    
    
    -- Exercicio 2 
    
    
    CREATE VIEW Latinos AS 
		SELECT 
			c.nome AS musica,
			ar.nome AS artistas,
            al.titulo , 
            c.id_genero ,
            g.nome AS genero
		FROM cancoes AS c
        INNER JOIN albuns AS al ON c.id_album = al.id
        INNER JOIN artistas AS ar ON ar.id = al.id_artista 
        INNER JOIN generos AS g ON g.id = c.id_genero 
       where g.nome = 'latin'  ; 
        
SELECT *
FROM latinos 
ORDER BY artistas , musica  ; 

            
        
           SELECT *
    from artistas ; 
        SELECT *
    from albuns ; 
              SELECT *
    from cancoes; 
                 SELECT *
    from generos; 
    
    
    select * from cancoes 
    where nome = 'latin' ; 
    
-- Exercicio 3
DROP VIEW Fatura_Brazil2 ; 
CREATE VIEW Fatura_Brazil2 AS
	SELECT
		c.nome,
        c.sobrenome,
        f.pais_cobranca,
        f.valor_total
	FROM clientes AS c
    INNER JOIN faturas AS f ON c.id = f.id_cliente
	WHERE c.id = f.id_cliente
    
    ;
    
    SELECT *
    FROM Fatura_Brazil2 
    where pais_cobranca = 'Brazil' 
    group by nome
    
	
   
    
    ; 
		

        
SELECT * FROM clientes ; 

SELECT * FROM faturas; 



-- Exercicio 4 


CREATE VIEW Faturas_Brasil AS
	SELECT 
    
    
    
			