//create item
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id:$categoryId}) CREATE (i:Item{}),  (C)-[:HAS_AVAILABLE]->(i) set i += $itemProps return i


//get item by id
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id: "8bf1e6f9-1ab3-453e-b85b-5da47a2e7cd1"})-[:HAS_AVAILABLE]->(i:Item{id: "45005c5b-e9aa-46d8-84c8-e42e47c56fc9"}) return i

//get items
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id: "8bf1e6f9-1ab3-453e-b85b-5da47a2e7cd1"})-[:HAS_AVAILABLE]->(i:Item) return i

//update item
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id:$categoryId})-[:HAS_AVAILABLE]->(i:Item{id:$itemId}) set i += $itemProps return i

//remove item 
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id: "8bf1e6f9-1ab3-453e-b85b-5da47a2e7cd1"})-[:HAS_AVAILABLE]->(i:Item{id: "45005c5b-e9aa-46d8-84c8-e42e47c56fc9"}) set i.state = false return i