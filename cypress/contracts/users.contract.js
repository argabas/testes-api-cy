const Joi = require ('joi')

const usuariosSchema = Joi.object({
    quantidade: Joi.number(), 
    usuarios: Joi.array().items({
        nome: Joi.string(),
        email: Joi.number(),
        password: Joi.string(),
        administrador: Joi.number(),
        _id: Joi.string()
    })
})
export default usuariosSchema;