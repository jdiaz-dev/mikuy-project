//edit logo
MATCH (a:Account{id: $accountId})-[:CREATED]->(b:Business{id: $businessId}) set b += $businessProps return b