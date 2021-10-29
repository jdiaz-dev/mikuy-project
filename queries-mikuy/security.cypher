//authenticate account, create token
MATCH (a:Account{email:"danny@gmail.com"})  return {email:a.email, password:a.password}

//sign-out
//question : what I make in database?