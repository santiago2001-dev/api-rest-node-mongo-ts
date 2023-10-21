"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const url = "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin" || "";
const client = new mongodb_1.MongoClient(url);
client
    .connect()
    .then(() => {
    console.log("conection successfully in db");
})
    .catch((error) => {
    console.log("error connecting", error);
});
exports.default = client;
//# sourceMappingURL=dbConfig.js.map