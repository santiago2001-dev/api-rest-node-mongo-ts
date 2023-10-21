# api-rest-node-mongo-ts


#installation
- clone to repository , open to the folder in vs code and open terminal
- execute npm i for install node moules
- execute to proyect with comand node dist/app.js if you have install nodemon ,nodemon dist/app.js and execute
 tsc --w this for this to compile we code from typescript to the javascript automatic
- create to file .env with string conexion.

#implementationtsc

With the server ready we can consume the endpoints

#endpoints 
1.http://localhost:3000/api/products
this endpoint answer with list to the products in stock
-not have params
-type petition http : GET

2.http://localhost:3000/api/price

-this endpoint it brings the products that have a discount by user and product name the user has a discount on that product it will show the offer otherwise if it does not have an offer Show the product with its original price

#params 

-idUser : Number 
-nameProduct :String

#example
-http://localhost:3000/api/price/2/Adidas Stan Smith
-type petition http : GET
