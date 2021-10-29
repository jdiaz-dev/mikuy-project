//create account

CREATE (a:Account{}) set a += {id:'ca39b062-31e5-4367-b71a-152a61045444', email:"danny@gmail.com", names:"Danny", surnames:"Arica", password:"123456", countryCode:"+51", cellphone:963852741, photo:"photo.png", state:1} return a


//recovery password      
//question: update password  
MATCH (a:Account{email:"danny@gmail.com"}) return a.id



// update profile
MATCH (a:Account{email:"danny@gmail.com"}) set a += {id:'ca39b062-31e5-4367-b71a-152a61045cd3', email:"danny@gmail.com", names:"Danny", surnames:"Arica Pesantes", password:"123", countryCode:"+51", cellphone:993852741, photo:"photo 2.png"} return a


//update phone
MATCH (a:Account{email:"danny@gmail.com"}) set a.phone = 987 return a

//update photo
MATCH (a:Account{email:"danny@gmail.com"}) set a.photo = 'new photo.png' return a