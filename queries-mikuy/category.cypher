//create category

MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"}) CREATE (c:Category{}),  (m)-[:HAS]->(c) set c += {id:"7196b4f7-39dc-4682-b7e3-701d2bd81ea1", name:"Category Alejandro", description:"Descripción de la Category Alejandro" } return c



//get category by id
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id: "8bf1e6f9-1ab3-453e-b85b-5da47a2e7cd1"}) return c

//get categories
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category) return c

//update categories
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id:"7196b4f7-39dc-4682-b7e3-701d2bd81ea1"}) set c += {id:"7196b4f7-39dc-4682-b7e3-701d2bd81ea1", name:"Category pro Alejandro", description:"Descripción de la Category Alejandro" } return c

//remove categories
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"})-[:CONTAINS]->(m:Menu{id: "9392ae2f-09e2-4e12-b9c5-26e05a104734"})-[:HAS]->(c:Category{id: "8bf1e6f9-1ab3-453e-b85b-5da47a2e7cd1"}) set c.state = false return c