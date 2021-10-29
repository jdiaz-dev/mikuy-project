
MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(m:Menu{id: $menuId})-[:HAS]->(c:Category{state:true})
with count(c) as total
MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(m:Menu{id: $menuId})-[:HAS]->(ca:Category{state:true})
with total, ca
order by ca[$orderBy]
skip toInteger($offset)
return {total:total, categories: collect(ca)[..toInteger($size)]}



