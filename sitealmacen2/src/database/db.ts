const Sequelize = require('sequelize');

const DB_NAME = 'almacen_20231';

const DB_USER = 'sa';

const DB_PASS = 'Db12345678';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'ASPIRE',
        dialect: 'mssql',
        port: 1433
    }

);


async function generateDb() {
    await database.sync({ force: false })
    console.log('Base de datos y tablas creada');
}

generateDb();
