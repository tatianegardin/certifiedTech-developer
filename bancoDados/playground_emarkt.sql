

-- 1

 
SELECT
	c.Empresa,
	sum(Transporte) as Total
from Correios AS c
left join Faturas AS f
	on c.CorreioID = f.FormaEnvio
GROUP BY c.CorreioID;


-- 2


