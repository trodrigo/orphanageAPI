import express, { response } from 'express'
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';
import errorHandler from './errors/handler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.get('/users', (request, response) => {
    console.log('teste');
    //return response.send('Hello World');
    return response.json({ message: 'Hello World'});
});

app.listen(3333);