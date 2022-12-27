module.exports = (sequelize, Sequelize) => {
    const Architecture = sequelize.define("Architecture", {
        id: {
            type: Sequelize.INTEGER,
            allowNUll: false,
            autoIncrement: true,
            primaryKey: true,
        },
        image: {
            type: Sequelize.STRING
        },



    }
    )
    return Architecture
}