import {MongoClient} from 'mongodb';

export async function getDb(){
    const mongoClient = new MongoClient("mongodb://localhost:27017/" && "mongodb+srv://sofiamoreta:Joselyn2011@cluster0.vmn1ct2.mongodb.net/chas-cars-db?retryWrites=true&w=majority");
    await mongoClient.connect();
    const db = mongoClient.db("chas-cars-db");
    return db;
}



