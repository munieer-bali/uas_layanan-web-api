import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} =  Sequelize;

const Akun =  db.define('akuns', {
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    tipeAkun: {
        type: DataTypes.ENUM,
        values: ['basic', 'premium', 'admin'],
        allowNull: false
      }
}, {
    freezeTableName: true
});

export default Akun;

(async()=>{
    await db.sync()
})();