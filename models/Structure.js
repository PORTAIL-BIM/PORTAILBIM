module.exports = (sequelize, Sequelize) => {
    const Structure = sequelize.define("Structure", {
        id: {
            type: Sequelize.INTEGER,
            allowNUll: false,
            autoIncrement: true,
            primaryKey: true,
        },
        image: {
            type: Sequelize.STRING,
        },
        file: {
            type: Sequelize.STRING,
        }
    }
    )
    return Structure;
}