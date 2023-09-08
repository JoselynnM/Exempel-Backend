import {Model} from "./Model";
import {getDb} from  "./MongoDb";



export interface CarModel extends Model{
    brand: string,
    model: string
}

async function getCollection(){
    const db = await getDb();
    const collection = db.collection<CarModel>('cars');
    return collection;
}

export async function getCars(){
    const collection = await getCollection();
    const cars = collection.find();
    return cars.toArray();
}


export async function insertCar(car: CarModel) {
     const db = await getDb();
     const savedCar = await db.collection('cars').insertOne(car);
     return savedCar;
}

export async function insertManyCars(){
    const db = await getDb();
    db.collection('cars').insertMany(cars);
}

export async function getSingleCar(Id: Number){
    const collection = await getCollection();
    const car = collection.find({id: Id});
    return car.toArray();
}

export async function updateCarModel(Id: Number, Model: string){
    const collection = await getCollection();
    collection.updateOne({id: Id}, { "$set": {model: Model}});
}

export async function updateCar(Id: Number, Model:string, Brnad: string){
    const collection = await getCollection();
}



const cars: CarModel[] = [
    {
        id: 1, 
        brand: "Volvo",
        model: "V70"
    },
    {
        id: 2, 
        brand: "Testla",
        model: "P90"
    },
    {
        id: 3, 
        brand: "SAAB",
        model: "900"
    },
    {
       id: 4,
        brand: "Audi",
        model: "A4"
    },
]

export default cars;