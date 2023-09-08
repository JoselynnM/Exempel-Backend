import {Router, Request, Response } from 'express';
import cars, {CarModel, insertCar, getSingleCar, updateCarModel} from './Cars'


const carsRouter = Router();

carsRouter.get('/', (req, res) => {
    res.send(cars);
});

carsRouter.get('/allcars', (req, res) => {
    res.send(cars);
});

carsRouter.post('/create', async (req: Request , res: Response) => {
/*     let { id, brand, module } = req.body;
 */   
console.log(req.body);
const car = req.body as CarModel;
// console.log(car.brand);
/* cars.push(car);
 */
const savedCar = await insertCar(car);
    res.send(savedCar.acknowledged);
});

carsRouter.get('/:id', async (req: Request, res: Response) => {
    const car = await getSingleCar(parseInt(req.params.id));
    res.sendStatus(200);
});

carsRouter.put('/update', async (req: Request, res: Response) => {
    await updateCarModel(req.body.id, req.body.model);
    res.sendStatus(200);
})


/* carsRouter.get("/addmany", async (req: Request, res:Response) => {
    insertManyCars();
}) */


carsRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const car = cars.find(c => c.id == parseInt(id));
    res.send(car);
});


export default carsRouter;