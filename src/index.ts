import "reflect-metadata";
import {createConnection} from "typeorm";

import express, { Request, Response } from 'express';
import { User } from "./entity/User";
var cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

//CRUD and FIND

app.post('/users', async(req: Request, res: Response) => {
    const { name, email, role } = req.body


        try{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method == 'OPTIONS') {
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    }
    return res.status(201)
}
catch(err) {
    return res.status(500).json(err)
}

    
})

createConnection().then(async connection => {

    app.listen(5000, () => console.log('Server Up at http://localhost:5000'))

}).catch(error => console.log(error));
