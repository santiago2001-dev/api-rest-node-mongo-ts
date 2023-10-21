import express,{Application} from 'express';
import productRoutes from '../routes/productsRoutes';
import priceProductRoutes from '../routes/priceProductRoutes';
import cors from 'cors'

class server {

    private app : Application;
    private port : string;
    private apiPaths = {
        products : '/api/products',
        price : '/api/price'
    };
    constructor(){
        this.app = express();
        this.port = process.env.PORT || "3000";
        this.routes();
        this.middelwares();

    }

    middelwares(){
        this.app.use(cors());
        this.app.use(express.json());

    }



    routes (){
        this.app.use(this.apiPaths.products,productRoutes);
        this.app.use(this.apiPaths.price,priceProductRoutes);

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`server running on http://localhost:${this.port}`);
        })
    }
}


export default server;