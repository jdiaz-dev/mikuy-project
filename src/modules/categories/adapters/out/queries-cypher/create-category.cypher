MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId})-[:CONTAINS]->(m:Menu{id: $menuId}) CREATE (c:Category{}),  (m)-[:HAS]->(c) set c += $categoryProps return c