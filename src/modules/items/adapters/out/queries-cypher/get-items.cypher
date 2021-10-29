MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(m:Menu{id: $menuId})-[:HAS]->(c:Category{id:$categoryId})-[:HAS_AVAILABLE]->(i:Item{state:true}) 
with count(i) as total
MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(m:Menu{id: $menuId})-[:HAS]->(c:Category{id:$categoryId})-[:HAS_AVAILABLE]->(it:Item{state:true})
with total, it
order by it[$orderBy]
skip toInteger($offset)
return {total:total, items: collect(it)[..toInteger($size)]}
