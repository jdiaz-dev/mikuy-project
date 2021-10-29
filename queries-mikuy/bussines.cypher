//create bussiness
MATCH (a:Account{id:"ca39b062-31e5-4367-b71a-152a61045cd3"}) CREATE (b:Business{}), (a)-[:CREATED]->(b) set b += {id:"a11dae60-c403-46b0-a721-c626b96bb9f8", name:"La Picantería de Jonathan", description:"En la picantería se cocina con el Jonathan", phone:963852147, address:"Jr Ibañez #1111", district:"Cañete", photo:"La Picantería 2.png", state:true}  return b

// get bussines by id
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"}) return b

//edit Business
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "a11dae60-c403-46b0-a721-c626b96bb9f8"}) set b += {id:"a11dae60-c403-46b0-a721-c626b96bb9f8", name:"La super Picantería", description:"En la picantería se cocina con el compromiso de preservar nuestra cocina, por eso respetamos todas las vedas establecidas", phone:963852147, address:"Jr Ibañez #1111", district:"Cañete", photo:"La Picantería 2.png", state:true} return b


//edit logo
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"}) set b.photo = "La Picantería 23.png" return b


//remove Business
MATCH (a:Account{id: "ca39b062-31e5-4367-b71a-152a61045cd3"})-[:CREATED]->(b:Business{id: "938d359e-f55d-4a70-bb75-a92ca60d732c"}) set b.state = false return b

