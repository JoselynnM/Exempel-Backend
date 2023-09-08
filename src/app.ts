import express, { Request, Response } from 'express';
import cars, {CarModel } from "./Cars";
import carsRouter from './cars-routes';


let car1: CarModel = {
    id: 10,
    brand: "Volvo",
    model: "V70"
}

const app = express();

app.use(express.json());
app.use("/cars", carsRouter);



app.get( '/', (req: Request, res: Response) => {
    res.send('Hello, Express with Typescripy');
})

/* app.get( '/cars', (req: Request, res: Response<CarModel>) => {
    res.json(cars[2]);
}); */


/* app.get("/cars/edit");

app.get("/cars/delete"); */

//Server


const port = 3000 
app.listen(port, () => {
    console.log(`running on port ${port}`);
  });
  