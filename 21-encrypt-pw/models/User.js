const UserModel = (sequelize, DataTypes) =>{
    const User = sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        pw:{
            type:DataTypes.STRING(255),
            allowNull : false
        },
        name:{
            type:DataTypes.STRING(15),
            allowNull:false
        },
        userid:{
            type:DataTypes.STRING(15),
            allowNull:false
        }
    },{
        tableName:'user1',
        freezeTableName:true,
        timestamps:false,
    });
    return User;
}

module.exports=UserModel;

