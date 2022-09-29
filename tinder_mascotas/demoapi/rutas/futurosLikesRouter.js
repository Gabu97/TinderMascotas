import express from 'express';
import { DataTypes } from "sequelize";
import sequelize from "../loadSequelize.js";

//DEFINICION DEL MODELO 

const FuturoLike = sequelize.define('futurosLikes', {
    etiquetasPersona: DataTypes.STRING,
    etiquetasMascota: DataTypes.STRING

}, { tableName: 'usuarios', timestamps: false });
const router = express.Router();
// GET lista de todos los likess 
// vinculamos la ruta /api/likess a la función declarada 
// si todo ok devolveremos un objeto tipo: 
// {ok: true, data: [lista_de_objetos_alumne...]} 
// si se produce un error: 
// {ok: false, error: mensaje_de_error} 


// router.get('/', async function (req, res, next) {
//     const [results, metadata] = await sequelize.query("SELECT usuarioid2 from likes where estado=1 AND usuarioid2 IN (SELECT usuarioid2 FROM likes WHERE usuarioid1 = 1 AND estado=1)");
//     console.log(results);
//     return results;
// })


// GET futurosLikes de un id 
router.get('/:id', function (req, res, next)
{ const id= req.params.id;
    sequelize.query("SELECT id,fotoPerfil,nombre,fechaNacimiento,descripcion,etiquetaPersona1,etiquetaPersona2 ,etiquetaPersona3, etiquetaMascota1,etiquetaMascota2,etiquetaMascota3,etiquetaMascota4,etiquetaMascota5 from usuarios where id not in (SELECT usuarioid2 from likes where usuarioid1="+id+") AND id<>"+id+" AND tipoUsuario = (SELECT quebusco from usuarios where id ="+id+") AND quebusco=(SELECT tipoUsuario from usuarios where id = "+id+") AND codigoPostal =(SELECT codigoPostal from usuarios where id ="+id+") ",{ type: sequelize.QueryTypes.SELECT })
    .then(x => res.json({
        ok: true,
        data: x
    }))
    .catch(error => res.json({
                ok: false,
                error: error
            })
    ).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

});
// POST, creació de un nuev like 
router.post('/', function (req, res, next) {
    sequelize.sync().then(() => {
        FuturoLike.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error }))
    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });
});
// put modificació de una likes 
router.put('/:id', function (req, res, next) {
    sequelize.sync().then(() => {
        FuturoLike.findOne({ where: { id: req.params.id } })
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
// DELETE elimina Like id 
router.delete('/:id', function (req, res, next) {
    sequelize.sync().then(() => {
        FuturoLike.destroy({ where: { id: req.params.id } })
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