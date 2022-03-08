 SELECT titulo
 FROM cancao
 WHERE titulo LIKE '%z%' ; 
 
SELECT titulo
 FROM cancao
 WHERE titulo LIKE '_a%s' ; 

SELECT  
	idPlaylist AS `Identificador Playlist`,
    idusuario AS `Usuário`,
    titulo AS `Título`,
    qtdcancoes AS `Quantidade de Canções`,
    idestado AS `Estado`,
    Datacriacao AS `Data da Criação`,
    Dataexclusao AS `Data da Exclusão`
FROM playlist
ORDER BY qtdcancoes DESC LIMIT 1  ;
 
SELECT
	idUsuario,
    Nomeusuario,
	Data_Nac
FROM usuario
order by Data_nac limit 5 offset 10 ; 

SELECT *
FROM cancao
ORDER BY qtdreproducao DESC LIMIT 5 ;

SELECT *
FROM album
ORDER BY titulo ASC ;

SELECT *
FROM album
WHERE imagemcapa IS NULL
ORDER BY titulo ASC ;  

INSERT INTO usuario 
VALUES (22, 'novousuariodespotify@gmail.com', 'Elmer Santos', '1991-11-15', 'M', 'B4129ATF','S4321m','9','1' );

SELECT *
FROM usuario
where idusuario = 22 ;

DELETE FROM generoxcancao 
WHERE IdGenero = 9 ;

UPDATE artista SET imagem = 'imagem em falta' 
WHERE (imagem is NULL AND idArtista > 0) ;








 