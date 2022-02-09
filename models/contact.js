module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
        firstname: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        }
    })

    return Contact;
}