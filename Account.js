//importamos sequelize y sus datatypes
const { DataTypes} = require("sequelize");

//Declaramos una funcion anonima y la exportamos
module.exports = (sequelize) => {
    //esta funcion define mediante sequelize el modelo "account"
    sequelize.define(
        //el modelo se llama acount
        "account",
        {
            //aca empezamos a definir los campos
            name:{
                type: DataTypes.STRING,
            },
            password:{
                type: DataTypes.STRING,
            },
            phone:{
                type: DataTypes.STRING,
            },
            address:{
                type: DataTypes.STRING,
            },
            birthDate:{
                type: DataTypes.DATE,
            },
            status:{
                type: DataTypes.ENUM("noActive","active","banned"),
                allowNull: true,
                defaultValue: "noActive",
            },
            email:{
                type: DataTypes.STRING,
            },
        }
    )
}