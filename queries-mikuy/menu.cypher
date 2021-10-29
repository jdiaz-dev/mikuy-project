//create menu
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"}) CREATE (m:Menu{}),  (b)-[:CONTAINS]->(m) set m += {id:"70df9882-3d78-4f75-b8ab-6b2e3a06321f", name:"Menu de Alejandro", description:"Descripción para la carta de la Jonathan" } return m

//get menu by id
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"})-[:CONTAINS]->(m:Menu{id: "70df9882-3d78-4f75-b8ab-6b2e3a06321f"}) return m

//get menus
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"})-[:CONTAINS]->(m:Menu) return m

//update menu
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"})-[:CONTAINS]->(m:Menu{id:"70df9882-3d78-4f75-b8ab-6b2e3a06321f"}) set m += {id:"70df9882-3d78-4f75-b8ab-6b2e3a06321f", name:"Menu pro de Jonathan", description:"Descripción del menu pro de Jonathan" } return m


//delete menu
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"})-[:CONTAINS]->(m:Menu{id: "70df9882-3d78-4f75-b8ab-6b2e3a06321f"}) set m.state = false return m

