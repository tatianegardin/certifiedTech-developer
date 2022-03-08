USE sakila ; 

-- Exercicio 1 a 

CREATE VIEW `vw_listar_pais` AS
    SELECT country AS Paises
    from country
    ORDER BY Paises ; 
    
    -- Exercicio 1 b
SELECT * FROM vw_listar_pais ; 

-- Exercicio 2 a

CREATE VIEW vw_artistas AS 
SELECT 
	concat(a.first_name, ' ', a.last_name) AS Artistas,
    count(f.film_id) AS filmes
FROM actor AS a 
INNER JOIN film_actor AS f ON  a.actor_id = f.actor_id
GROUP BY Artistas
having filmes > 25 
ORDER BY a.last_name ;

-- Exercicio 2 b

Select * from vw_artistas ; 

-- Exercicio 2 c 

Select * from vw_artistas
where filmes < 33 ;

-- Exercicio 2 d

Select 
	LOWER(artistas) AS artistas ,
	filmes
from vw_artistas
where artistas LIKE 'a%' ; 


-- Exercicio 2 d


DROP VIEW vw_artistas ; 
       
