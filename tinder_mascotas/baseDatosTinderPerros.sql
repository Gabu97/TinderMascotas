
DROP SCHEMA IF EXISTS `baseDatosTinderPerros` ;

CREATE SCHEMA IF NOT EXISTS `baseDatosTinderPerros` DEFAULT CHARACTER SET utf8 ;
USE `baseDatosTinderPerros` ;

DROP TABLE IF EXISTS `baseDatosTinderPerros`.`Login` ;

CREATE TABLE IF NOT EXISTS `baseDatosTinderPerros`.`Login` (
  `idLogin` INT NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(15) NOT NULL,
  `contrasenya` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`idLogin`),
  UNIQUE INDEX `nombreUsuario_UNIQUE` (`nombreUsuario` ASC) VISIBLE,
  UNIQUE INDEX `idLogin_UNIQUE` (`idLogin` ASC) VISIBLE);

DROP TABLE IF EXISTS `baseDatosTinderPerros`.`Persona` ;

CREATE TABLE IF NOT EXISTS `baseDatosTinderPerros`.`Persona` (
  `idPersona` INT NOT NULL AUTO_INCREMENT,
  `nombrePersona` VARCHAR(15) NULL,
  `apellidoPersona` VARCHAR(25) NULL,
  `descripcionPersona` VARCHAR(140) NULL,
  `etiquetasPersona` VARCHAR(45) NULL,
  `etiquetasMascota` VARCHAR(45) NULL,
  `numTelefono` INT(9) NULL,
  `Login_idLogin` INT NOT NULL,
  `fotoPerfilPersona` LONGBLOB NULL,
  `fechaNacimientoPersona` DATE NULL,
  `direccionPersona` VARCHAR(45) NULL,
  `codigoPostalPersona` VARCHAR(5) NULL,
  `fotos`mascota LONGBLOB NULL,
  PRIMARY KEY (`idPersona`),
  INDEX `fk_Personas_Login_idx` (`Login_idLogin` ASC) VISIBLE,
  CONSTRAINT `fk_Personas_Login`
    FOREIGN KEY (`Login_idLogin`)
    REFERENCES `baseDatosTinderPerros`.`Login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

DROP TABLE IF EXISTS `baseDatosTinderPerros`.`RazasMascota` ;

CREATE TABLE IF NOT EXISTS `baseDatosTinderPerros`.`RazasMascota` (
  `nombreRaza` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nombreRaza`));

DROP TABLE IF EXISTS `baseDatosTinderPerros`.`Mascota` ;

CREATE TABLE IF NOT EXISTS `baseDatosTinderPerros`.`Mascota` (
  `idMascota` INT NOT NULL AUTO_INCREMENT,
  `nombreMascota` VARCHAR(15) NULL,
  `descripcionMascota` VARCHAR(140) NULL,
  `etiquetasPersona` VARCHAR(45) NULL,
  `etiquetasMascota` VARCHAR(45) NULL,
  `numTelefonoMascota` INT(9) NULL,
  `Login_idLogin` INT NOT NULL,
  `fotoPerfilMascota` VARCHAR(45) NULL,
  `fotosMascota` VARCHAR(45) NULL,
  `fechaNacimientoMascota` DATE NULL,
  `direccionMascota` VARCHAR(45) NULL,
  `codigoPostalMascota` VARCHAR(5) NULL,
  `RazasMascota_nombreRaza` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idMascota`, `RazasMascota_nombreRaza`),
  INDEX `fk_Animal_Login1_idx` (`Login_idLogin` ASC) VISIBLE,
  INDEX `fk_Mascota_RazasMascota1_idx` (`RazasMascota_nombreRaza` ASC) VISIBLE,
  CONSTRAINT `fk_Animal_Login1`
    FOREIGN KEY (`Login_idLogin`)
    REFERENCES `baseDatosTinderPerros`.`Login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Mascota_RazasMascota1`
    FOREIGN KEY (`RazasMascota_nombreRaza`)
    REFERENCES `baseDatosTinderPerros`.`RazasMascota` (`nombreRaza`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

DROP TABLE IF EXISTS `baseDatosTinderPerros`.`Match` ;

CREATE TABLE IF NOT EXISTS `baseDatosTinderPerros`.`Match` (
  `Mascota_idMascota` INT NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  `estadoMatch` VARCHAR(45) NULL DEFAULT 'pendiente',
  PRIMARY KEY (`Mascota_idMascota`, `Persona_idPersona`),
  INDEX `fk_Animal_has_Persona_Persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  INDEX `fk_Animal_has_Persona_Animal1_idx` (`Mascota_idMascota` ASC) VISIBLE,
  CONSTRAINT `fk_Animal_has_Persona_Animal1`
    FOREIGN KEY (`Mascota_idMascota`)
    REFERENCES `baseDatosTinderPerros`.`Mascota` (`idMascota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Animal_has_Persona_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `baseDatosTinderPerros`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;




INSERT INTO basedatostinderperros.razasmascota(nombreRaza)VALUES
("Labrador retriever"),
("Bulldog francés"),
("Golden retriever"),
("Pastor alemán"),
("Caniche"),
("Bulldog"),
("Beagle"),
("Rottweiler"),
("Labrador"),
("Chihuahua");

SELECT * FROM razasmascota;