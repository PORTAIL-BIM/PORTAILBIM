module.exports = (sequelize, Sequelize) => {
    const MEP = sequelize.define("MEP", {
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
    return MEP;
}