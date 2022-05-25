import express, { Application,Request} from 'express';
import morgan from 'morgan';
import helmet from 'helmet'; // Security
import indexRoutes from './routes/index';
const app: Application = express();


app.use(helmet());
// middlewares
app.use(morgan('dev'));



app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(indexRoutes);

app.listen(3005);
console.log('Server on port', 3005);