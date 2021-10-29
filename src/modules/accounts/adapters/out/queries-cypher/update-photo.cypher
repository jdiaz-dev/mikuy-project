MATCH (a:Account{id:$accountId}) set a += $photo return a
