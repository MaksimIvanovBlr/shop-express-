const ApiError = require('../error/ApiError')
const {User} = require('../models/models')
class UserController {

    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {

        const {id} = req.query
        if(!id){
            return next(ApiError.bedRequest('NO ID'))
        }
        res.json(id)

    }
}


module.exports = new UserController()