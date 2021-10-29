MATCH (a:Account{id:"823b1f5d-4fb9-4f02-9a8b-9d27f6d0a84e"})-[:CREATED]->(b:Business{id:"30458dd3-5bc6-44ad-924a-54af37d1eb56"})-[:CONTAINS]->(m:Menu) 
with collect(m) as nodes count(m) as total
return  total, {menus: collect(m)[..1] }



MATCH (a:Account{id:"823b1f5d-4fb9-4f02-9a8b-9d27f6d0a84e"})-[:CREATED]->(b:Business{id:"30458dd3-5bc6-44ad-924a-54af37d1eb56"})-[:CONTAINS]->(m:Menu) 
with count(m) as total 
MATCH (a:Account{id:"823b1f5d-4fb9-4f02-9a8b-9d27f6d0a84e"})-[:CREATED]->(b:Business{id:"30458dd3-5bc6-44ad-924a-54af37d1eb56"})-[:CONTAINS]->(me:Menu) 
with me, total
order by me['name']
skip 0
return  {total:total, menus: collect(me)[..6] };








