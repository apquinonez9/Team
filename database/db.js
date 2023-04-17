import {Sequelize} from 'sequelize'

const db = new Sequelize('cultupaz', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db