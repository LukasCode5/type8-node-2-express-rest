# type8-node-2-express-rest

## steps

1. git init
2. npm init -y
3. index.js
   4.create express app
4. add script "start":"node src/index.js"

## cors

1. npm install cors
2. import cors
3. app.use(cors())

## Terms

1. REST - restful state transfer. standartas aplikacijos bendrauja tarpusavyje.
2. API - application programming interface.
3. resource - informacijos vienetas, grupe. Pvz: posts, comments, book ir t.t.
4. Request - uzklausa siunciama is kliento i Node(BackEnd). gali tureti parametrus is body.
5. Response - musu atsakymas i request. Pranesti apie klaida, nustatyti http koda.
6. PORT - http adreso dalis, leidzia atskirti paleistas aplikacijas. dazniausiai naudojami portai: 3000 ,3001 ,3002 ,5000 ,5005 ,5050 ,8000 ,8008

## uzklausa

GET https://jsonplaceholder.typicode.com/api/users/

GET - http metodas
host - https://jsonplaceholder.typicode.com/
/api/users - endpoint
users - resource
