
MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(m:Menu{state:true})
with count(m) as total
MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(me:Menu{state:true})
with total, me
order by me[$orderBy]
skip toInteger($offset)
return {total:total, menus: collect(me)[..toInteger($size)]}
