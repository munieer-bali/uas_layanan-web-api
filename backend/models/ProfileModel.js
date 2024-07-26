// models/ProfileModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';
import Akun from './SimpanModel.js'; // Mengimpor model Akun dengan jalur yang benar

const Profile = db.define('profiles', {
    akunId: {
        type: DataTypes.INTEGER,
        references: {
            model: Akun,
            key: 'id'
        },
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Profile;

(async () => {
    try {
        await db.sync();
        console.log("Database synchronized");
    } catch (error) {
        console.error("Unable to synchronize the database:", error);
    }
})();
