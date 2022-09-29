import express from 'express'; 
import { DataTypes } from "sequelize"; 
import sequelize from "../loadSequelize.js";

//DEFINICION DEL MODELO 

const Usuario = sequelize.define('usuarios', { 
nombre: DataTypes.STRING,
apellido: DataTypes.STRING,
tipoUsuario: DataTypes.STRING,
descripcion: DataTypes.STRING,
etiquetaPersona1: DataTypes.TINYINT,
etiquetaPersona2: DataTypes.TINYINT,
etiquetaPersona3: DataTypes.TINYINT,
etiquetaMascota1: DataTypes.TINYINT,
etiquetaMascota2: DataTypes.TINYINT,
etiquetaMascota3: DataTypes.TINYINT,
etiquetaMascota4: DataTypes.TINYINT,
etiquetaMascota5: DataTypes.TINYINT,
numeroTelefono: DataTypes.INTEGER,
fotoPerfil: DataTypes.STRING,
fechaNacimiento: DataTypes.DATE,
direccion: DataTypes.STRING,
codigoPostal: DataTypes.STRING(5),
nombreUsuario: DataTypes.STRING,
contrasenya: DataTypes.STRING,
quebusco: DataTypes.STRING,
correoElectronico: DataTypes.STRING

}, { tableName: 'usuarios', timestamps: false }); 
const router = express.Router(); 
// GET lista de todos los usuarios 
// vinculamos la ruta /api/usuarios a la función declarada 
// si todo ok devolveremos un objeto tipo: 
// {ok: true, data: [lista_de_objetos_alumne...]} 
// si se produce un error: 
// {ok: false, error: mensaje_de_error} 
router.get('/', function (req, res, next) { 
sequelize.sync().then(() => { 
Usuario.findAll() 
.then(Usuario => res.json({ 
ok: true, 
data: Usuario 
})) 
.catch(error => res.json({ 
ok: false, 
error: error 
})) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
// GET de un solo alumne 
router.get('/:id', function (req, res, next) {

sequelize.sync().then(() => { 
Usuario.findOne({ where: { id: req.params.id } }) 
// .then(Alumne => Alumne.get({plain: true})) 
.then(Usuario => res.json({ 
ok: true, 
data: Usuario 
})) 
.catch(error => res.json({ 
ok: false, 
error: error 
})) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
// POST, creació d'un nou alumne 
router.post('/', function (req, res, next) { 
sequelize.sync().then(() => { 
Usuario.create(req.body) 
.then((item) => res.json({ ok: true, data: item })) 
.catch((error) => res.json({ ok: false, error })) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
// put modificació de una usuario 
router.put('/:id', function (req, res, next) { 
sequelize.sync().then(() => { 
Usuario.findOne({ where: { id: req.params.id } }) 
.then((al) => 
al.update(req.body) 
) 
.then((ret) => res.json({ 
ok: true, 
data: ret 
})) 
.catch(error => res.json({ 
ok: false, 
error: error 
})); 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error
}) 
}); 
}); 
// DELETE elimina Usuario id 
router.delete('/:id', function (req, res, next) { 
sequelize.sync().then(() => { 
Usuario.destroy({ where: { id: req.params.id } }) 
.then((data) => res.json({ ok: true, data })) 
.catch((error) => res.json({ ok: false, error })) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
export default router;
