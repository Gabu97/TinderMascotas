DROP SCHEMA IF EXISTS `basedatostinderperros2` ;

CREATE SCHEMA IF NOT EXISTS `basedatostinderperros2`;

USE `basedatostinderperros2` ;

DROP TABLE IF EXISTS `basedatostinderperros2`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(15) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL,
  `tipoUsuario` VARCHAR(10) NULL,
  `descripcion` VARCHAR(300) NULL DEFAULT NULL,
  `etiquetaPersona1` TINYINT NULL DEFAULT NULL, #FAMILIA 
  `etiquetaPersona2` TINYINT NULL DEFAULT NULL,
  `etiquetaPersona3` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota1` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota2` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota3` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota4` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota5` TINYINT NULL DEFAULT NULL,
  `numeroTelefono` INT NULL DEFAULT NULL,
  `fotoPerfil` VARCHAR(255) NULL,
  `fechaNacimiento` DATE NULL DEFAULT NULL,
  `direccion` VARCHAR(45) NULL DEFAULT NULL,
  `codigoPostal` VARCHAR(5) NULL DEFAULT NULL,
  `nombreUsuario` VARCHAR(15) NOT NULL,
  `contrasenya` VARCHAR(15) NOT NULL,
  `quebusco` VARCHAR(45) DEFAULT NULL,
  `correoElectronico` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombreUsuario_UNIQUE` (`nombreUsuario` ASC) VISIBLE);

DROP TABLE IF EXISTS `basedatostinderperros2`.`Likes` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Likes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuarioid1` INT NOT NULL,
  `usuarioid2` INT NOT NULL,
  `estado` tinyint NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuarios_has_Usuarios_usuarioid2_idx` (`usuarioid2` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Usuarios_usuarioid1idx` (`usuarioid1` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Usuarios_usuarioid1`
    FOREIGN KEY (`usuarioid1`)
    REFERENCES `basedatostinderperros2`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Usuarios_usuarioid2`
    FOREIGN KEY (`usuarioid2`)
    REFERENCES `basedatostinderperros2`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


USE basedatostinderperros2;
SELECT  usuarioid2 IN (SELECT usuarioid1 FROM likes WHERE usuarioid2 = 1 AND estado=1) from likes where estado=1 AND usuarioid1=1;
#SELECT id from 

SELECT id from usuarios where id not in (SELECT usuarioid2 from likes where usuarioid1=3) AND id<>3 AND tipoUsuario = (SELECT quebusco from usuarios where id =3) AND codigoPostal =(SELECT codigoPostal from usuarios where id =3) ;

INSERT INTO basedatostinderperros2.Usuarios(nombre,apellido,tipoUsuario,descripcion ,numeroTelefono ,fotoPerfil,fechaNacimiento ,direccion ,codigoPostal,nombreUsuario,contrasenya, quebusco,correoElectronico) VALUES
("Jordi","Perez","persona","Busco gato adulto para vivir en un piso",687078172,"Jordi.jpg","1992-04-08","calle 1234",08031,"jordi1293","contrasenya12","gato","jordicampos.97@gmail.com"),
("Peque","","gato","Procede de un refugio pero es muy cariñosa y tranquila.",934170124,"Peque.jpg","2015-04-01","c/ Guarda Antón, 10",08035,"laura1253","contrasenya12","persona","info@protectorabcn.es"),
("Rolling","","gato","URGENTE Rolling fue encontrado cerca de un cementerio junto a sus hermanos y otros cachorros. Muy buenos y sociables.",934170124,"ROLLING.jpg","2021-05-01","c/ Guarda Antón, 10",08035,"laura1233","contrasenya12","persona","info@protectorabcn.es"),
("Crico","","gato","Muy tranquilo, para personas que puedan estar con él y hacerse compañía mutua. Esta adopción es urgente ya que no lo esta pasando nada bien en el refugio.",934170124,"CRICO.jpeg","2013-05-01","c/ Guarda Antón, 10",08035,"bobby1213","contrasendaa12","persona","info@protectorabcn.es"),
("RONNIE","","gato","Ronnie vivía con una persona mayor que tuvo que ingresar en una residencia, la familia no se ha querido hacer cargo del gato, y no han dudado en abandonarlo."," 934170124","RONNIE.jpg","2014-06-01","c/ Guarda Antón, 10",08035,"bobbykmm123","contryaa12","persona","info@protectorabcn.es"),
("Valentín","","gato","Valentín  es  un gatito de 2 años y le falta un ojito, pero eso no lo hace más  feo, el es hermoso por dentro, es grandote pero todo lo que tiene de grande lo tiene de bueno.","608557752","Valentin.png","2020-06-09","Barcelona","14960","bobbyfd123","cefdnyaa12","persona","valentin@gmail.es"),
("Gabriela","Perez","persona","Busco perro adulto activo",653478172,"Gabriela.jpg","1997-08-08","calle 12345",08017,"gabisita","coenya13","perro","ingo@hjdsffnjd.com"),
("Lola","Perez","persona","Busco perro adulto para ir a vivir al campo",687034172,"Lola.jpg","1990-04-08","calle 12345678",08035,"lola123","contradsenya12","perro","lolita@gmail.com"),
("Jose","Perez","persona","Busco perro para que me acompañe a hacer senderismo",687070572,"Jose.jpg","1989-04-08","calle 12345544",08031,"juan123","cosya1234","perro","josee@gmail.com"),
("Merche","Rodriguez","persona","Busco perro entrenado para salir a hacer excursiones",687076572,"Merche.jpg","1989-04-08","calle 12344565",08031,"merche123","contrasya12","perro","merchee@gmail.com"),
("TERO","","perro","URGENTE Tero es un perro que llegó al refugio a finales de 2018 procedente de un síndrome de Noé donde malvivió los primeros años de su vida junto a muchos otros perros.", "934170124","TERO.jpeg","2016-04-08","c/ Guarda Antón",08035,"bordii","cosfgdfeny32","persona","gabitelega1997@gmail.com");

select * from usuarios;
