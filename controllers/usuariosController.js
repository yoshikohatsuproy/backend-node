const {response} = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post API - controlador',
        body: body
    });
}
module.exports = {
    usuariosGet,
    usuariosPost
}