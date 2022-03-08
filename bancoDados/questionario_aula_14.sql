use musimundos ; 
-- 1

SELECT 
	c.nome,
    c.compositor,
    c.id_genero,
    g.nome
FROM generos AS g
inner join cancoes AS c 
ON c.id_genero = g.id
where compositor = 'Willie Dixon' ; 

-- 2

SELECT 
	c.nome,
    c.compositor,
    c.id_genero,
    g.nome
FROM generos AS g
inner join cancoes AS c 
ON c.id_genero = g.id
where g.nome = 'Rock' ; 


-- 3


SELECT 
	al.titulo,
    ar.nome
FROM albuns AS al
RIGHT JOIN artistas AS ar
ON al.id_artista = ar.id 
GROUP BY al.titulo ; 


--  4


SELECT 
	c.nome,
    t.nome
FROM cancoes AS c
INNER JOIN tipos_de_arquivo AS t
ON c.id_tipo_de_arquivo = t.id 
GROUP BY c.nome ;


-- 5

SELECT DISTINCT titulo
FROM empregados ; 


-- 6


SELECT distinct c.nome AS 'Nome Canção',
	 (select p.nome) AS Playlist
FROM  cancoes_playlists AS cp
INNER JOIN playlists AS p ON cp.id_playlist = p.id
INNER JOIN cancoes AS c on cp.id_cancao = c.id  
GROUP BY c.nome  LIMIT 5 ;
    
    
-- 7

SELECT  
	 concat('A musica ', nome, 'foi composta por ', compositor, '.' ) 
from cancoes ;


-- 8 



SELECT  
	COALESCE (estado_cobranca, pais_cobranca, cep_cobranca)
from faturas ;


-- 9 

SELECT 
	floor(DATEDIFF(data_contratacao, data_nascimento)/365)
FROM empregados ; 


-- 10 

select EXTRACT(MONTH from data_fatura)
from faturas
where id_cliente = 2 
ORDER BY data_fatura DESC; 

SELECT  titulo
FROM empregados  
group by titulo ;


