const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: '',
    password: 'localhost',
    database: 'cliodinamica',
    port: '5432',
};

const pool = new Pool(config);

//Función CREAR Propuesta
const nuevaPropuesta = async(propuesta) => {
    let nombrePropuesta = propuesta[0];
    let tipo = propuesta[1];
    let gestorcom = propuesta[2];
    let monto = propuesta[3];
    let estado = propuesta[4];
    let notas = propuesta[5];
    let mespost = propuesta[6];
    let annoVTA = propuesta[7];
    let gun = propuesta[8];
    let jp = propuesta[9];
    let codigo = propuesta[10];
    let idProyecto = propuesta[11];
    let nombreCliente = propuesta[12];
    //console.log("propuesta llegó a nuevapropuesta consulta: ", propuesta);

    try {
        const consulta = await pool.query(`insert into propuestas (nombrepropuesta, tipo, gestorcom, monto, estado, notas, mespost, annovta, gun, jp, codigo, idproyecto, nombrecliente) values('${nombrePropuesta}', '${tipo}', '${gestorcom}', ${monto}, '${estado}', '${notas}', '${mespost}', '${annoVTA}', '${gun}', '${jp}', '${codigo}', '${idProyecto}', '${nombreCliente}') returning *`);
        //console.log('Desde nuevapropuesta consulta: ', consulta.rows);
        return consulta.rows;
    } catch (error) {
        console.log(error);
        return error;
    }
}

//Función OBTENER Propuestas
const obtenerPropuestas = async() => {
    try {
        const consulta = await pool.query("select * from  propuestas");
        //console.log('Propuestas desde obtenerPropuestas consultas: ', consulta.rows);
        return consulta.rows;
    } catch (error) {
        console.log(error);
        return error;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Función CREAR Evaluación económica
const nuevaEvaEco = async(evaEco) => {
    let duracion = evaEco[0];
    let boletaseriedad = evaEco[1];
    let valoruf = evaEco[2];
    let notas = evaEco[3];
    let fechainicio = evaEco[4];
    let gav = evaEco[5];
    let boletacumplimiento = evaEco[6];
    let fechavaloruf = evaEco[7];
    let idpropuesta = evaEco[8];
    //console.log("evaeco llegó a evaeco consulta: ", evaEco);

    try {
        const consulta = await pool.query(`insert into evaeconomicas (duracion, boletaseriedad, valoruf, notas, fechainicio, gav, boletacumplimiento, fechavaloruf, idpropuesta) values(${duracion}, '${boletaseriedad}', ${valoruf}, '${notas}', '${fechainicio}', ${gav}, '${boletacumplimiento}', '${fechavaloruf}', '${idpropuesta}') returning *`);
        //console.log('Desde nuevaEvaEco consulta: ', consulta.rows);
        return consulta.rows;
    } catch (error) {
        console.log(error);
        return error;
    }
}

//Función para ACTUALIZAR Evaluación económica
const editarEvaEco = async(id, estado) => {
    try {
        //CONSULTA PARA HACER DIRECTO EN BD: update propuestas set estado = 'postulada/adjudicada/explorativa' where id = 1;
        const consulta = await pool.query(`update propuestas set estado = '${estado}' where id = ${id} returning *`);
        return consulta.rows;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = { nuevaPropuesta, obtenerPropuestas, nuevaEvaEco, editarEvaEco };
//module.exports = { nuevaPropuesta, obtenerPropuestas, cambiarEstadoPropuestas, editarSkater, eliminarSkater };