const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async index(request, response) {
        const clients = await connection('clients').select('*');
        return response.json(clients);
    },

    async create(request, response) {
        const { name, email, phone } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('clients').insert({
            id,
            name,
            email,
            phone,
        });
    
        return response.json({ id });
    }
};