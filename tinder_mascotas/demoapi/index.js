//importamos express y controladores 
import express from "express"; 
import usuariosRouter from './rutas/usuariosRouter.js';
import indexRouter from './rutas/indexRouter.js'; 
import likesRouter from './rutas/likesRouter.js';
import matchesRouter from './rutas/matchesRouter.js';
import futuroslikesRouter from './rutas/futuroslikesRouter.js';
import cors from "cors";
//instanciamos nueva aplicación express 
const app = express(); 
//necesario para poder recibir datos en json 
app.use(express.json()); 
app.use(cors({origin:'*'}));
//las rutas que empiecen por /api/alumnes se dirigirán a alumnesRouter 
app.use('/', indexRouter); 
app.use('/api/usuarios', usuariosRouter); 
app.use('/api/likes', likesRouter);
app.use('/api/matches', matchesRouter);
app.use('/api/futuroslikes', futuroslikesRouter);
//arranque del servidor 
const port = 3001; 
app.listen(port, () => console.log(`App listening on port ${port}!`));