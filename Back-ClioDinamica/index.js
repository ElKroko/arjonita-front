const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//app.use(express.json());

app.set('view engine', 'ejs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const { nuevaPropuesta, obtenerPropuestas, nuevaEvaEco, editarEvaEco } = require('./consultas');

////////////////////////////////////////////////// RUTAS /////////////////////////////////////////////////////////////

app.get('/', async(req, res) => {
    const propuestas = await obtenerPropuestas();
    //console.log('propuestas ya en home: ', propuestas);

    let propuestasExplorativas = [];
    let propuestasPostuladas = [];
    let propuestasAdjudicadas = [];

    propuestas.forEach( p => {
        if(p.estado == 'explorativa'){
            propuestasExplorativas.push(p);
        }

        if(p.estado == 'postulada'){
            propuestasPostuladas.push(p);
        }

        if(p.estado == 'adjudicada'){
            propuestasAdjudicadas.push(p);
        }
    });

    console.log('Explorativas: ', propuestasExplorativas);
    console.log('Postuladas: ', propuestasPostuladas);
    console.log('Adjudicadas: ', propuestasAdjudicadas);

    //res.sendFile(__dirname + '/index.html');
    res.render('index', {propuestasExplorativas, propuestasPostuladas, propuestasAdjudicadas});
    //res.send(JSON.stringify({propuestasExplorativas, propuestasPostuladas, propuestasAdjudicadas}));
    //res.render("Home", /*{propuestasExplorativas, propuestasPostuladas, propuestasAdjudicadas}*/);
});

app.get('/nuevaProp', (req, res) => {
    res.sendFile(__dirname + '/nuevaProp.html');
    //res.send(JSON.stringify({}));
    //res.render("Home", /*{}*/);
});

/*app.get('/actProp', (req, res) => {
    res.sendFile(__dirname + '/actProp.html');
    //res.send(JSON.stringify({}));
    //res.render("Home", /*{}* /);
});*/

app.post('/propuesta', async(req, res) => {
    let { nombre, tipo, gest, monto, estado, mesPost, annoVTA, notas, gun, jp, codigo, idProyecto, nombreCliente } = req.body;
    //console.log(nombre, tipo, gest, monto, estado, mesPost, annoVTA, notas, gun, jp, codigo, idProyecto, nombreCliente);
    //console.log(typeof monto);

    if(!estado){
        estado = 'explorativo';
    }

    let montoInt = parseInt(monto);
    let propuesta = {
        nombre: nombre,
        tipo: tipo,
        gest: gest,
        monto: montoInt,
        estado: estado,
        mesPost: mesPost,
        annoVTA: annoVTA,
        notas: notas,
        gun: gun,
        jp: jp,
        codigo: codigo,
        idProyecto: idProyecto,
        nombreCliente: nombreCliente,
    }
    const propuestaNueva = Object.values(propuesta);

    try {
        const respuesta = await nuevaPropuesta(propuestaNueva);
        //console.log("respuesta nuevapropuesta index: ", respuesta);

        res.sendFile(__dirname + '/evaEco.html'); //PASAR NOMBRE, ESTADO, CÓDIGO, ID, NOMBRECLIENTE DE PROPUESTA
        
        //res.send(JSON.stringify({respuesta[0].nombrepropuesta, respuesta[0].estado, respuesta[0].codigo, respuesta[0].idproyecto, respuesta[0].nombrecliente}));
        //res.render("evaEco", {nombre, estado, codigo, idProyecto, nombreCliente});
        //res.render("evaEco", {respuesta[0].nombrepropuesta, respuesta[0].estado, respuesta[0].codigo, respuesta[0].idproyecto, respuesta[0].nombrecliente});
    } catch (error) {
        console.log(error);
        return error;
    }

    //res.sendFile(__dirname + '/evaEco.html'); //PASAR ID DE PROPUESTA
    //res.send(JSON.stringify({usuarios})); ***
    // ej: res.render("evaEco", {});
});

app.post('/evaEconomica', async(req, res) => {
    //let idPropuesta = {id};
    const { duracion, boletaSeriedad, valorUF, notas, fechaInicio, gav, boletaCumplimiento, fechaValorUF } = req.body;
    //console.log("desde evaEconomica index.js: ", duracion, boletaSeriedad, valorUF, notas, fechaInicio, gav, boletaCumplimiento, fechaValorUF);

    let duracionInt = parseInt(duracion);
    let gavInt = parseInt(gav);
    let evaEco = {
        duracion: duracionInt,
        boletaSeriedad: boletaSeriedad,
        valorUF: valorUF,
        notas: notas,
        fechaInicio: fechaInicio,
        gav: gavInt,
        boletaCumplimiento: boletaCumplimiento,
        fechaValorUF: fechaValorUF,
        
        idPropuesta: 1, //Solo de prueba con 1, hay que recibir el id de alguna manera (preguntar)
        //idPropuesta: id,
    }
    const evaEcoNueva = Object.values(evaEco);

    try {
        const respuesta = await nuevaEvaEco(evaEcoNueva);
        //console.log("Nueva propuesta subida con éxito", respuesta);

        res.redirect('/');

    } catch (error) {
        console.log(error);
        return error;
    }

    //res.sendFile(__dirname + '/index.html');
    //res.send(JSON.stringify({usuarios}));
    //res.send('Aplicación ClioDinámica');
    //res.render("Home", /*{}*/);
});

app.get('/actualizacionEstado', async(req, res) => {
    try {
        const propuestas = await obtenerPropuestas();
        //console.log('propuestas ya en actProp: ', propuestas);
        //res.sendFile(__dirname + '/actProp.html');
        res.send(JSON.stringify({propuestas}));

        //ACÁ SE SELECCIONA LA PROPUESTA A ACTUALIZAR
    } catch (error) {
        console.log(error);
        return error
    }
});

app.put('/editarPropuesta', async(req, res) => {
    const { id, estado } = req.body;

    try {
        const propuestaAct = await editarEvaEco(id, estado);
        //res.status(200).send(JSON.stringify(propuestaAct));
        //res.send('Propuesta editada.');
    } catch (e) {
        console.log(error);
        return error;
    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Puerto 3000');
    //console.log(process.env.PORT);
});