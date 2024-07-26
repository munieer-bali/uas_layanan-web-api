import { Sequelize } from "sequelize";


const db =  new Sequelize('web-simpan',  'root', '', {
    host: 'localhost',
    dialect: 'mysql'
} );


export default db;