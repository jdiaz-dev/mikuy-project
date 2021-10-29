MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(m:Menu{id: $menuId})-[:HAS]->(c:Category{id:$categoryId}) CREATE (i:Item{}),  (c)-[:HAS_AVAILABLE]->(i) set i += $itemProps return i


