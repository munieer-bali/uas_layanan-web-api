// models/PostModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';
import Akun from './SimpanModel.js';

const Post = db.define('posts', {
    akunId: {
        type: DataTypes.INTEGER,
        references: {
            model: Akun,
            key: 'id'
        },
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    freezeTableName: true
});

export default Post;

(async () => {
    try {
        await db.sync();
        console.log("Database synchronized");
    } catch (error) {
        console.error("Unable to synchronize the database:", error);
    }
})();
